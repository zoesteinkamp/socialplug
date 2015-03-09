from django.conf.urls import patterns, include, url
from django.core.urlresolvers import reverse_lazy
from django.conf import settings
from main.views import LoginView, SecretView
from django.contrib import admin
from django.views.generic import TemplateView

admin.autodiscover()

urlpatterns = patterns('',
    # url(r'^api/', include('main.api.urls')),
    # url(r'^$', 'socialplug.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    # url(r'^$', 'main.views.home', name='home'),
    # url(r'^search1/', 'main.views.searchpeople', name='search1'),
    url(r'^admin/', include(admin.site.urls)),
    # url('', include('django.contrib.auth.urls', namespace='auth')),
    url(r'^$', LoginView.as_view(), name='view_login'),
    # url(r'^logout/$', 'django.contrib.auth.views.logout', {'next_page': reverse_lazy('view_login')}, name='logout'),
    url(r'^secret', SecretView.as_view(), name='view_secret'),
    # url('', include('social.apps.django_app.urls', namespace='social')),
    # url(r'^facebook_profile/$', 'main.views.get_facebook_profile', name='get_facebook_profile'),
    (r'^accounts/', include('allauth.urls')),
)

if settings.DEBUG:
    urlpatterns += patterns('', url(r'^media/(?P<path>.*)$', 'django.views.static.serve',
                                    {'document_root': settings.MEDIA_ROOT, }),
    )
