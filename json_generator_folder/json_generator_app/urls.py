from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.main, name='main'),
    url(r'^makeJsonList$', views.json_list, name='json_list'),
    url(r'^makeJsonList/download$', views.download, name='download'),
]