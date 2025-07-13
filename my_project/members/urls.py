from django.urls import path
from .views import registration

urlpatterns = [
    path('login_user', registration, name='login'),
]