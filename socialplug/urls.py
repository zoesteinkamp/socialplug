from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
# from main.api.views import GlobalSearchList


admin.autodiscover()

urlpatterns = patterns('',

    # Urls that need to be gone through

    # url(r'^secret', SecretView.as_view(), name='view_secret'),
    # url(r'^login/', LoginView.as_view(), name='view_login'),
    # url(r'^logout/$', 'django.contrib.auth.views.logout', {'next_page': reverse_lazy('view_login')}, name='logout'),
    # url('', include('django.contrib.auth.urls', namespace='auth')),
    # url(r'^facebook_profile/$', 'main.views.get_facebook_profile', name='get_facebook_profile'),

    url(r'^accounts/', include('allauth.urls')),
    # url(r'^users/(?P<user_id>\d+)/$', 'main.views.profile', name='profile'),
    # url(r'^users/(?P<username>[\w.@+-]+)/(?P<user>[\w.@+-]+)/$', 'main.views.profile', name='profile'),
    url(r'^users/(?P<username>[\w.@+-]+)/$', 'main.views.profile', name='profile'),



    #Urls that are accounted for and good to go
    # main login page, base.html
    url(r'^$', 'main.views.index', name='index'),   # <- the same thing


    # the event pages
    url(r'^eventpost/', 'main.views.event_post', name='event_post'),
    url(r'^event/', 'main.views.searchevent', name='search_event'),
    url(r'^event/(?P<id>[\w.@+-]+)/$', 'main.views.postit', name='postit'),

    #the search people pages
    url(r'^people/', 'main.views.searchpeople', name='search_people'),

    # the messaging system
    url(r'^route/', 'main.views.route', name='message_route'),
    url(r'^messages/', include('django_messages.urls')),

    # the include, admin, search, and privacy policy
    # url(r'^bigsearch/foobar', GlobalSearchList.as_view(), name='bigsearch'),
    url(r'^privacypolicy/', 'main.views.privacypolicy', name='privacypolicy'),
    url(r'^api/', include('main.api.urls')),
    url(r'^admin/', include(admin.site.urls)),

    # Profile Settings
    # url(r'^settings/', 'main.views.settings', name='settings'),
    url(r'^changebio/', 'main.views.bio', name='bio'),

)

if settings.DEBUG:
    urlpatterns += patterns('', url(r'^media/(?P<path>.*)$', 'django.views.static.serve',
                                    {'document_root': settings.MEDIA_ROOT, }),
    )
