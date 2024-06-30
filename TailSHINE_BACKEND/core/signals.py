from core.user.models import ApiKey,dailyCount
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save,sender=User)
def post_save_creat_ApiKey(sender,instance,created,*args, **kwargs):
    if created:
        print("Created")
        ApiKey.objects.create(owner=instance)
        dailyCount.objects.create(owner=instance)
