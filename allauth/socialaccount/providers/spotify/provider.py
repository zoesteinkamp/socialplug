from allauth.socialaccount import providers
from allauth.socialaccount.providers.base import ProviderAccount
from allauth.socialaccount.providers.oauth2.provider import OAuth2Provider
from allauth.socialaccount import app_settings


class SpotifyAccount(ProviderAccount):
    def get_avatar_url(self):
        return self.account.extra_data['spot_profile']['images'].get('url')

    def to_str(self):
        dflt = super(SpotifyAccount, self).to_str()
        return self.account.extra_data['spot_profile'].get('display_name', dflt)
    pass


class SpotifyOAuth2Provider(OAuth2Provider):
    id = 'spotify'
    name = 'Spotify'
    package = 'allauth.socialaccount.providers.spotify'
    account_class = SpotifyAccount

    def extract_uid(self, data):
        return data['spot_profile']['id']

    def extract_common_fields(self, data):
        return dict(name=data['spot_profile']['display_name'],
                    email=data['spot_profile']['email'])

    def get_default_scope(self):
        scope = []
        if app_settings.QUERY_EMAIL:
            scope.append('user-read-email')
            scope.append('user-library-read')
        return scope

providers.registry.register(SpotifyOAuth2Provider)