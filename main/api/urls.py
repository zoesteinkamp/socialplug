from django.conf.urls import include, url, patterns
from rest_framework import routers
from main.api import views

router = routers.DefaultRouter()
router.register(r'socialaccount', views.SocialAccountViewSet)
router.register(r'event', views.EventViewSet)
router.register(r'user', views.UserViewSet)
router.register(r'userprofile', views.UserProfileViewSet)

urlpatterns = patterns('',
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))

)

