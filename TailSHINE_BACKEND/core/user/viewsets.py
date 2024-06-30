from core.user.serializers import UserSerializer, ApiOwnerSerializer, dailyCountSerializer, SubscriptionTypeSerializer, ApiKeySerializer,ContactFormSerializer
from core.user.models import User,ApiOwner, dailyCount, SubscriptionType, ApiKey
from rest_framework.views import APIView
from rest_framework import views
from rest_framework.response import Response
from rest_framework_api_key.permissions import HasAPIKey
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters,status,viewsets,mixins


class UserViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['id', 'username', 'email', 'is_active']

    def get_queryset(self):
        if self.request.user.is_superuser:
            return User.objects.all()

    def get_object(self):
        lookup_field_value = self.kwargs[self.lookup_field]

        obj = User.objects.get(lookup_field_value)
        self.check_object_permissions(self.request, obj)

        return obj
  


# api   
    
class ApiOwnerViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = ApiOwnerSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        if self.request.user.is_active:
            return ApiOwner.objects.filter(owner=self.request.user)


    
class dailyCountViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = dailyCountSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        if self.request.user.is_active:
            return dailyCount.objects.filter(owner=self.request.user)

    
class SubscriptionTypeViewSet(viewsets.ModelViewSet):
    http_method_names = ['post']
    serializer_class = SubscriptionTypeSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        if self.request.user.is_active:
            return SubscriptionType.objects.filter(owner=self.request.user)

        
class ApiKeyViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = ApiKeySerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        if self.request.user.is_active:
            return ApiKey.objects.filter(owner=self.request.user)

        
        
        
# 10 API
def increase_dailyCount(ownerApi):
    dC = dailyCount.objects.get(owner = ownerApi)
    dC.NumberRequestMade += 1
    dC.save()

def Both(ownerApi):
    dC = ApiOwner.objects.get(owner = ownerApi)
    if dC.NumberRequestLast > 0:
        dC.NumberRequestLast -= 1
        dC.save()
        increase_dailyCount(ownerApi)
        return True
    else:
        return False

# api grammar
class ApiGrammarViewSet(APIView):
    permission_classes = [HasAPIKey,]

    def get(self,request):
        import language_tool_python
        data = {}
        my_mistakes = []
        my_corrections = []
        start_positions = []
        end_positions = []
        key = request.headers["X_API_KEY"]
        phrase = request.data["phrase"]
        try:
            lang = request.data["lang"]
        except:
            lang = "en-US"
        advenced= False
        try:
            advenced = request.data["advanced"]
        except:
            advenced = False 
        if advenced =="False":
            advenced= False
        user = ApiKey.objects.get(Key=key)
        if request.user:
            if Both(user.owner):
                tool = language_tool_python.LanguageTool(f'{lang}')
                text = f"""{phrase}"""
                matches = tool.check(text)
 
                for rules in matches:
                    if len(rules.replacements)>0:
                        start_positions.append(rules.offset)
                        end_positions.append(rules.errorLength+rules.offset)
                        my_mistakes.append(text[rules.offset:rules.errorLength+rules.offset])
                        my_corrections.append(rules.replacements[0])
                my_new_text = list(text)
                for m in range(len(start_positions)):
                    for i in range(len(text)):
                        my_new_text[start_positions[m]] = my_corrections[m]
                        if (i>start_positions[m] and i<end_positions[m]):
                            my_new_text[i]=""
                data["mistakes-corrections"] = list(zip(my_mistakes,my_corrections))
                if advenced:
                    data["mistakes-advanced"]=matches
                return Response(data,status=status.HTTP_200_OK)
            else:
                return Response(f'User pass the limit {user.owner}',status=status.HTTP_405_METHOD_NOT_ALLOWED)
        else:
            return Response(f'Something is wrong on your account',status=status.HTTP_404_NOT_FOUND) 

# api Qr Code
class ApiQrViewSet(APIView):
    permission_classes = [HasAPIKey,]

    def get(self,request):
        import numpy
        import cv2
        data = {}
        key = request.headers["X_API_KEY"]
        filestr = request.FILES["img"].read()
        user = ApiKey.objects.get(Key=key)
        print(request.user)
        if request.user:
            if Both(user.owner):
                npimg = numpy.fromstring(filestr, numpy.uint8)
                im = cv2.imdecode(npimg, cv2.IMREAD_COLOR)
                det = cv2.QRCodeDetector()
                retval, decoded_info, points, straight_qrcode = det.detectAndDecodeMulti(numpy.hstack([im, im]))
                if(retval):
                    data["QrCode"] = decoded_info
                    return Response(data,status=status.HTTP_200_OK)
                else:
                    return Response("there's no QR Code in this image",status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(f'User pass the limit {user.owner}',status=status.HTTP_405_METHOD_NOT_ALLOWED)
        else:
            return Response(f'Something is wrong on your account',status=status.HTTP_404_NOT_FOUND)

# api image to text
class ApiImgTextViewSet(APIView):
    permission_classes = [HasAPIKey,]

    def get(self,request):
        import cv2
        import pytesseract
        import numpy
        from langdetect import detect,detect_langs
        
        pytesseract.pytesseract.tesseract_cmd = (
            r"C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
        )
        data = {}
        key = request.headers["X_API_KEY"]
        filestr = request.FILES['img'].read()
        lang = request.data["lang"]
        textType = request.data["texttype"]
        if textType == "signleline":
            textType="3"
        elif textType == "All":
            textType="11" 
        user = ApiKey.objects.get(Key=key)
        if request.user:
            if Both(user.owner):
                try:
                    npimg = numpy.fromstring(filestr, numpy.uint8)
                    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)
                    fltxt = pytesseract.image_to_string(img, lang=f"{lang}",
                                                        config=f"--psm {textType}")
                    data["text"] = fltxt
                    data["text_lang"] = detect(fltxt)
                    return Response(data,status=status.HTTP_200_OK)
                except:
                    return Response(f'Something is wrong , the language you insert maybe dont exist in our dataset ',status=status.HTTP_404_NOT_FOUND)
                    
            else:
                return Response(f'User pass the limit {user.owner}',status=status.HTTP_405_METHOD_NOT_ALLOWED)
        else:
            return Response(f'Something is wrong on your account',status=status.HTTP_404_NOT_FOUND)

# api translate
class ApiTranslateViewSet(APIView):
    permission_classes = [HasAPIKey,]

    def get(self,request):
        from deep_translator import GoogleTranslator
        from langdetect import detect,detect_langs
        import json
        data = {}
        key = request.headers["X_API_KEY"]
        sentence = request.data["sentence"]
        trasnlateTo = request.data["trasnlateTo"]
        try:
            source = request.data["source"]
        except:
            source='auto'
        user = ApiKey.objects.get(Key=key)
        print(request.user)
        if request.user:
            if Both(user.owner):
                translated = GoogleTranslator(source=source, target=trasnlateTo)
                data["sentence"]=sentence
                data["sentence_lang"] = detect(sentence)
                data["trasnlateTo"]=trasnlateTo
                data["transalted"] = translated.translate(sentence)
                data["languages_detection"] = str(detect_langs(sentence))
                return Response(data,status=status.HTTP_200_OK)
            else:
                return Response(f'User pass the limit {user.owner}',status=status.HTTP_405_METHOD_NOT_ALLOWED)
        else:
            return Response(f'Something is wrong on your account',status=status.HTTP_404_NOT_FOUND)
        
# currency
class ApiCurrencyViewSet(APIView):
    permission_classes = [HasAPIKey,]

    def get(self,request):
        from currency_converter_with_rate import converter
        data = {}
        key = request.headers["X_API_KEY"]
        base = request.data["currency_base"]
        target = request.data["currency_target"]
        amount = request.data["amount"]
        user = ApiKey.objects.get(Key=key)
        print(request.user)
        if request.user:
            if Both(user.owner):
                currency = converter.CurrencyConverter()
                data["currency"]=currency.base(f'{base}').target(f'{target}').amount({amount}).get()
                return Response(data,status=status.HTTP_200_OK)
            else:
                return Response(f'User pass the limit {user.owner}',status=status.HTTP_405_METHOD_NOT_ALLOWED)
        else:
            return Response(f'Something is wrong on your account',status=status.HTTP_404_NOT_FOUND)

# api whois
class ApiWhoisViewSet(APIView):
    permission_classes = [HasAPIKey,]

    def get(self,request):
        import whois
        data = {}
        key = request.headers["X_API_KEY"]
        domain = request.data["domain"]
        user = ApiKey.objects.get(Key=key)
        print(request.user)
        if request.user:
            if Both(user.owner):
                try:
                    data["domain"]=whois.whois(f'{domain}')
                    return Response(data,status=status.HTTP_200_OK)
                except:
                    return Response(f"This domain don't exist",status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(f'User pass the limit {user.owner}',status=status.HTTP_405_METHOD_NOT_ALLOWED)
        else:
            return Response(f'Something is wrong on your account',status=status.HTTP_404_NOT_FOUND)

class ContactViewSet(APIView):
    permission_classes = [IsAuthenticated,]

    def post(self, request, *args, **kwargs):
        data = {
            'issue': request.data.get('issue'), 
            'message': request.data.get('message'), 
            'owner': request.user.id
        }
        serializer = ContactFormSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response("Done", status=status.HTTP_201_CREATED)
        # else:
        #     return Response(f'Something went wront',status=status.HTTP_404_NOT_FOUND)