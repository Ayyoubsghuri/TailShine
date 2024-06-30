from django.db import models
from django.db.models.deletion import CASCADE
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager,User, PermissionsMixin
from rest_framework_api_key.models import APIKey
from datetime import datetime

class UserManager(BaseUserManager):

    def create_user(self, username, email, password, **kwargs):
        """Create and return a `User` with an email, phone number, username and password."""
        if username is None:
            raise TypeError('Users must have a username.')
        if email is None:
            raise TypeError('Users must have an email.')
        if password is None:
            raise TypeError('Users must have an password.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, username, email, password):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError('Superusers must have a password.')
        if email is None:
            raise TypeError('Superusers must have an email.')
        if username is None:
            raise TypeError('Superusers must have an username.')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True, unique=True,  null=True, blank=True)
    password = models.CharField(db_index=True, max_length=255)
    # start_date = models.DateField(auto_now_add=True,null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','password']

    objects = UserManager()

    def __str__(self):
        return f"{self.email}"


class SubscriptionType(models.Model):
    SubscriptionType = models.CharField(max_length=50)
    SubscriptionType_Description = models.CharField(max_length=255)
    SubscriptionType_Price = models.IntegerField()
    
    def __str__(self):
        return self.SubscriptionType 
    
class ApiOwner(models.Model):
    owner = models.OneToOneField(User, related_name="ApiOwner_subtype", unique=True, on_delete=CASCADE)
    SubscriptionType = models.ForeignKey(SubscriptionType, related_name="SubType",on_delete=CASCADE,default=1,blank=True,null=True)
    NumberRequestLast = models.PositiveIntegerField(default=30000)
    message = models.CharField(max_length=500,default='')

    def __str__(self):
        return self.owner.email       
        

class dailyCount(models.Model):
    owner = models.OneToOneField(User, related_name="ApiOwner_dailyCount", unique=True , null=True, on_delete=CASCADE)
    NumberRequestMade = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return self.owner.username

class ApiKey(models.Model):
    owner = models.OneToOneField(User, related_name="ApiOwner_apikey", unique=True, on_delete=CASCADE)
    Key = models.CharField(max_length=100,blank=True)
    
    def __str__(self):
        return self.owner.username
    
    def save(self, *args, **kwargs):
        if self.Key =="":
            api_key, key = APIKey.objects.create_key(name=f"ApiKey-{self.owner}")
            self.Key = key
        super().save(*args, **kwargs)    
        

class ContactForm(models.Model):
    owner = models.ForeignKey(User, related_name="Contact_info", on_delete=CASCADE)
    issue = models.CharField(max_length=500,default='')
    message = models.TextField(default="")

    def __str__(self):
        return self.owner.email            
        