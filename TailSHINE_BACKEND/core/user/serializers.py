from core.user.models import User, ApiOwner, dailyCount, SubscriptionType, ApiKey,ContactForm
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_active']
        read_only_field = ['is_active']
        
class ApiOwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApiOwner
        fields = '__all__'

class dailyCountSerializer(serializers.ModelSerializer):
    class Meta:
        model = dailyCount
        fields = '__all__'
        
class SubscriptionTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscriptionType
        fields = '__all__'
        
class ApiKeySerializer(serializers.ModelSerializer):
    class Meta:
        model = ApiKey
        fields = '__all__'
        
class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'