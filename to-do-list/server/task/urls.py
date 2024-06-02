from django.urls import path
from . import views

urlpatterns = [
    path('signup', views.sign_up),
    path('login', views.login),
    path('getuser', views.get_user),    # path('create'),
    # path('validate'),
    # path('delete'),
    # path('getuser', views.)
    # path('logout')
]