import requests
import copy
from allauth.socialaccount.providers.oauth2.views import (OAuth2Adapter,
                                                          OAuth2LoginView,
                                                          OAuth2CallbackView)

from .provider import GoogleProvider


class GoogleOAuth2Adapter(OAuth2Adapter):
    provider_id = GoogleProvider.id
    access_token_url = 'https://accounts.google.com/o/oauth2/token'
    authorize_url = 'https://accounts.google.com/o/oauth2/auth'
    profile_url = 'https://www.googleapis.com/oauth2/v1/userinfo'
    youtube_url = 'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&fields=items(snippet(title,thumbnails/high))&maxResults=25'


    def complete_login(self, request, app, token, **kwargs):
        resp = requests.get(self.profile_url,
                            params={'access_token': token.token,
                                    'alt': 'json'})
        youtube = requests.get(self.youtube_url,
                               params={'access_token': token.token,
                                    'alt': 'json'})

        # merged two dictionaries in a single expression
        test = {'google_profile': resp.json(), 'youtube_info': youtube.json()}
        # respjson = resp.json()
        # final = respjson
        # final.update(youtube.json())

        extra_data = test
        login = self.get_provider() \
            .sociallogin_from_response(request,
                                       extra_data)
        return login


oauth2_login = OAuth2LoginView.adapter_view(GoogleOAuth2Adapter)
oauth2_callback = OAuth2CallbackView.adapter_view(GoogleOAuth2Adapter)
