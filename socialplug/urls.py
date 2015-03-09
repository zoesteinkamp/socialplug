from django.conf.urls import patterns, include, url
from django.core.urlresolvers import reverse_lazy
from django.conf import settings
from main.views import LoginView, SecretView
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # api urls
    url(r'^api/', include('main.api.urls')),

    #login url
    url(r'^$', 'main.views.home', name='home'),

    #main page url
    url(r'^main/', 'main.views.main', name='home'),

    # search people
    url(r'^search1/', 'main.views.searchpeople', name='search1'),

    #search events
    url(r'^search2/', 'main.views.searchevent', name='search2'),

    #admin
    url(r'^admin/', include(admin.site.urls)),
    # url(r'^login/', LoginView.as_view(), name='view_login'),
    # url(r'^logout/$', 'django.contrib.auth.views.logout', {'next_page': reverse_lazy('view_login')}, name='logout'),
    # url(r'^secret', SecretView.as_view(), name='view_secret'),
    # url('', include('social.apps.django_app.urls', namespace='social')),

    #postman urls
    (r'^message/', include('postman.urls')),

    # url(r'^message/', 'main.views.message', name='message')
)

if settings.DEBUG:
    urlpatterns += patterns('', url(r'^media/(?P<path>.*)$', 'django.views.static.serve',
                                    {'document_root': settings.MEDIA_ROOT, }),
    )
