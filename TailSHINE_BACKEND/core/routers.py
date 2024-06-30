from rest_framework.routers import SimpleRouter
from core.user.viewsets import UserViewSet
from django.urls import path
from core.auth.viewsets import LoginViewSet, RegistrationViewSet, RefreshViewSet,ChangePasswordView
from core.user.viewsets import ApiOwnerViewSet, dailyCountViewSet, SubscriptionTypeViewSet, ApiKeyViewSet,ApiQrViewSet,ApiTranslateViewSet,ApiImgTextViewSet,ApiGrammarViewSet,ApiCurrencyViewSet,ApiWhoisViewSet,ContactViewSet


routes = SimpleRouter()

# AUTHENTICATION
routes.register(r'auth/login', LoginViewSet, basename='auth-login')
routes.register(r'auth/register', RegistrationViewSet, basename='auth-register')
routes.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')

# USER
routes.register(r'user', UserViewSet, basename='user')

# api owner
routes.register(r'auth/ApiOwner', ApiOwnerViewSet, basename='auth-ApiOwner')
routes.register(r'auth/dailyCount', dailyCountViewSet, basename='auth-dailyCount')
routes.register(r'auth/SubscriptionType', SubscriptionTypeViewSet, basename='auth-SubscriptionType')
routes.register(r'auth/ApiKey', ApiKeyViewSet, basename='auth-ApiKey')


# api's
# routes.register(r'apiweather', ApiWeatherViewSet, basename='auth-ApiKeyWeather')




urlpatterns = [
    path('auth/resetpassword', ChangePasswordView.as_view()),
    path('apiTexttoimage/', ApiImgTextViewSet.as_view()),
    path('apiQrCodeToText/', ApiQrViewSet.as_view()),
    path('apigrammar/', ApiGrammarViewSet.as_view()),
    path('apicurrency/', ApiCurrencyViewSet.as_view()),
    path('apiwhois/', ApiWhoisViewSet.as_view()),
    path('Contact/', ContactViewSet.as_view()),
    path('apitranslate/', ApiTranslateViewSet.as_view()),
    *routes.urls,
]

