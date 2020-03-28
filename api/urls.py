from django.urls import path
from . import views


urlpatterns = [
    path('', views.Hello.as_view(), name='hello'),
]