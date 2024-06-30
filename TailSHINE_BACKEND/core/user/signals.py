from core.user.models import ApiKey,dailyCount,ApiOwner
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver


User = get_user_model()

@receiver(post_save,sender=User)
def post_save_creat_ApiKey(sender,instance,created,*args, **kwargs):
    if created:
        ApiKey.objects.create(owner=instance)
        dailyCount.objects.create(owner=instance)
        ApiOwner.objects.create(owner=instance)
