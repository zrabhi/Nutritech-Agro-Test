from django.urls import path
from . import views

urlpatterns = [
    path('signup', views.sign_up),
    path('login', views.get_user),
    # path('getuser', views.)
    # path('logout')
]