from django.urls import path, include
from . import views

urlpatterns = [
    path('backend/', views.Db.as_view())
]
