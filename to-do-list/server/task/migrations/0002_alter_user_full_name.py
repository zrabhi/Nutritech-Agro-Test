# Generated by Django 5.0.6 on 2024-06-01 22:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='full_name',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
