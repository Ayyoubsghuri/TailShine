from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login
from django.core.exceptions import ObjectDoesNotExist
from core.user.serializers import UserSerializer
from core.user.models import User


class LoginSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['user'] = UserSerializer(self.user).data
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)

        return data


class RegisterSerializer(UserSerializer):
    password = serializers.CharField(max_length=128, min_length=8, write_only=True, required=True)
    email = serializers.EmailField(required=True, write_only=True, max_length=128)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'is_active', 'is_staff']

    def create(self, validated_data):
        try:
            user = User.objects.get(email=validated_data['email'])
            if user is not None:
                raise serializers.ValidationError({"email": "Email is already exist."})
        except ObjectDoesNotExist:
            user = User.objects.create_user(**validated_data)   
            return user
        
class ChangePasswordSerializer(serializers.ModelSerializer):
    old_password = serializers.CharField(max_length=128, min_length=8,required=True)
    new_password = serializers.CharField(max_length=128, min_length=8,required=True)
    
    class Meta:
        model = User
        fields = ['old_password', 'new_password']
        


# class CustomPasswordResetSerializer(serializers.ModelSerializer):
    
#     class Meta:
#         model = CustomPasswordReset
#         fields='__all__'
        
#         def get_email_options(self):  
#             data = {
#                 'email_template_name': 'email/password_reset.html',
#                 'subject_template_name': 'email/password_reset_subject.txt',
#             }
#             return data
        

        