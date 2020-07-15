from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField("Username", max_length=255)
    password = models.CharField("Password", max_length=255)
    first_name = models.CharField("First name", max_length=255)
    last_name = models.CharField("Last name", max_length=255)
    email = models.EmailField()
    createdAt = models.DateTimeField("Created", auto_now_add=True)

    def __str__(self):
        return self.first_name