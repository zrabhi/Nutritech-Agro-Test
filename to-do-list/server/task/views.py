# from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import  UserSerializer
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import ValidationError
from .models import User, Task
from .task_serializer import TaskSerializer


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    print(email, password)
    user = authenticate(email=email, password=password)

    if not user:
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    token = Token.objects.get(user=user)
    return Response({'token': token.key, 'user': UserSerializer(user).data}, status=status.HTTP_200_OK)

@api_view(['POST'])
# @permission_classes([AllowAny])
def sign_up(request):
    print("data", request.data)
    try:
        serializer = UserSerializer(data=request.data)
        if (serializer.is_valid(raise_exception=True)):
            user =  serializer.save()
            token = Token.objects.create(user=user)
            return Response({"token": token.key, "user": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except ValidationError as e:
            error_message = e.detail
            errors = {}
            for field, field_errors in error_message.items():
                errors[field] = field_errors[0]
            return Response({"error": errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)
# # Create your views here.

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def create_task(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
