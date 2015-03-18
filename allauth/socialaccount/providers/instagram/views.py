import requests

from allauth.socialaccount.providers.oauth2.views import (OAuth2Adapter,
                                                          OAuth2LoginView,
                                                          OAuth2CallbackView)
from .provider import InstagramProvider


class InstagramOAuth2Adapter(OAuth2Adapter):
    provider_id = InstagramProvider.id
    access_token_url = 'https://instagram.com/oauth/access_token'
    authorize_url = 'https://instagram.com/oauth/authorize'
    profile_url = 'https://api.instagram.com/v1/users/self'
    user_recent = 'https://api.instagram.com/v1/users/self/media/recent'

    def complete_login(self, request, app, token, **kwargs):
        resp = requests.get(self.profile_url,
                            params={'access_token': token.token,
                            'alt': 'json'})
        recent = requests.get(self.user_recent,
                              params={'access_token': token.token,
                              'alt': 'json'})


        test = {'insta_profile': resp.json(), 'insta_info': recent.json()}
        # print test
        extra_data = test
        # print extra_data
        return self.get_provider().sociallogin_from_response(request,
                                                             extra_data)


oauth2_login = OAuth2LoginView.adapter_view(InstagramOAuth2Adapter)
oauth2_callback = OAuth2CallbackView.adapter_view(InstagramOAuth2Adapter)
