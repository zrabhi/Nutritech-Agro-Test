from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            print(model)
            fields = ['username', 'password', 'email']

        def create(self, validated_data):
            user = User (username=validated_data['username'],
                                   email=validated_data['email'])
            user.set_password(validated_data['password'])
            user.save()
            # print('here!!')
            return user
