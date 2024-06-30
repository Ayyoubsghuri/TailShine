# Generated by Django 4.0.4 on 2022-05-15 20:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core_user', '0003_remove_apiowner_numberrequestlast_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='apiowner',
            name='issue',
        ),
        migrations.AddField(
            model_name='apiowner',
            name='NumberRequestLast',
            field=models.PositiveIntegerField(default=30000),
        ),
        migrations.AddField(
            model_name='apiowner',
            name='SubscriptionType',
            field=models.ForeignKey(blank=True, default=1, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='SubType', to='core_user.subscriptiontype'),
        ),
        migrations.AlterField(
            model_name='apiowner',
            name='message',
            field=models.CharField(default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='apiowner',
            name='owner',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='ApiOwner_subtype', to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='ContactForm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('issue', models.CharField(default='', max_length=500)),
                ('message', models.TextField(default='')),
                ('owner', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='Contact_info', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
