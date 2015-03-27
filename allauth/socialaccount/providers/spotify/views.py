from allauth.socialaccount.providers.oauth2.views import (OAuth2Adapter,
                                                          OAuth2LoginView,
                                                          OAuth2CallbackView)
import requests

from .provider import SpotifyOAuth2Provider
import json


class SpotifyOAuth2Adapter(OAuth2Adapter):
    provider_id = SpotifyOAuth2Provider.id
    access_token_url = 'https://accounts.spotify.com/api/token'
    authorize_url = 'https://accounts.spotify.com/authorize'
    profile_url = 'https://api.spotify.com/v1/me'
    tracks_url = 'https://api.spotify.com/v1/me/tracks?offset=0&limit=20'

    def complete_login(self, request, app, token, **kwargs):
        resp = requests.get(self.profile_url, params={
            'access_token': token.token})
        # tracks request
        tracks = requests.get(self.tracks_url, params={
            'access_token': token.token})

        test = {'spot_profile': resp.json(), 'spot_info': tracks.json()}

        extra_data = test

        return self.get_provider().sociallogin_from_response(
            request,
            extra_data
        )


oauth_login = OAuth2LoginView.adapter_view(SpotifyOAuth2Adapter)
oauth_callback = OAuth2CallbackView.adapter_view(SpotifyOAuth2Adapter)