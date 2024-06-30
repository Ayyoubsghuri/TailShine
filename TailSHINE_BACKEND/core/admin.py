from django.contrib import admin
from core.user.models import UserManager, User, ApiOwner, dailyCount, SubscriptionType, ApiKey,ContactForm
# Register your models here.
class Contact(admin.ModelAdmin):
    list_display = ('owner', 'issue', 'message')

# admin.site.register(UserManager)

admin.site.register(User)
admin.site.register(ApiOwner)
admin.site.register(dailyCount)
admin.site.register(SubscriptionType)
admin.site.register(ApiKey)
admin.site.register(ContactForm,Contact)