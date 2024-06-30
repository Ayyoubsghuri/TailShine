# Generated by Django 4.0.4 on 2022-05-15 20:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core_user', '0002_alter_apikey_owner_alter_apiowner_owner_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='apiowner',
            name='NumberRequestLast',
        ),
        migrations.RemoveField(
            model_name='apiowner',
            name='SubscriptionType',
        ),
        migrations.AddField(
            model_name='apiowner',
            name='issue',
            field=models.CharField(default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='apiowner',
            name='message',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='apiowner',
            name='owner',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='Contact_info', to=settings.AUTH_USER_MODEL),
        ),
    ]