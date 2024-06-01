from django.db import models

# Create your models here.
# Create your models here.

class User(models.Model):
    email = models.EmailField(unique=True),
    username = models.CharField(unique=True, max_length=50)

    def __str__(self):
        return f'{self.username}'

class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.CharField(max_length=200)
    status = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.task}'