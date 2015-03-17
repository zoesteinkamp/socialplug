from django.conf.urls import patterns, include, url
from django.core.urlresolvers import reverse_lazy
from django.conf import settings
from main.views import LoginView, SecretView
from django.contrib import admin
from django.views.generic import TemplateView

admin.autodiscover()

urlpatterns = patterns('',
    # api urls
    # url(r'^api/', include('main.api.urls')),

    #login url
    url(r'^$', 'main.views.home', name='home'),
    # url(r'^login/', LoginView.as_view(), name='view_login'),
    # url(r'^logout/$', 'django.contrib.auth.views.logout', {'next_page': reverse_lazy('view_login')}, name='logout'),
    # url(r'^secret', SecretView.as_view(), name='view_secret'),
    #
    # #main page url
    url(r'^main/', 'main.views.main', name='home'),
    #
    # # search people
    url(r'^search1/', 'main.views.searchpeople', name='search1'),
    #
    # #search events
    url(r'^search2/', 'main.views.searchevent', name='search2'),
    url(r'^basemessage/', 'main.views.message'),
    url(r'^route/', 'main.views.route'),
    url(r'^test/', 'main.views.test', name='test'),
    url(r'^eventpost/', 'main.views.event_post', name='event'),
    # #admin
    url(r'^admin/', include(admin.site.urls)),

    #postman urls
    url(r'^messages/', include('django_messages.urls')),


    #swamp dragon urls
    # url(r'^swampdragon/', include('main.swampdragon.urls')),


    # url('', include('django.contrib.auth.urls', namespace='auth')),
    # url(r'^facebook_profile/$', 'main.views.get_facebook_profile', name='get_facebook_profile'),
    (r'^accounts/', include('allauth.urls')),

)

if settings.DEBUG:
    urlpatterns += patterns('', url(r'^media/(?P<path>.*)$', 'django.views.static.serve',
                                    {'document_root': settings.MEDIA_ROOT, }),
    )
