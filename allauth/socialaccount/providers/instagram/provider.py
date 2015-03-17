from allauth.socialaccount import providers
from allauth.socialaccount.providers.base import ProviderAccount
from allauth.socialaccount.providers.oauth2.provider import OAuth2Provider


class InstagramAccount(ProviderAccount):

    PROFILE_URL = 'http://instagram.com/'

    def get_profile_url(self):
        return self.PROFILE_URL + self.account.extra_data['insta_profile']['data'].get('username')

    def get_avatar_url(self):
        return self.account.extra_data['insta_profile']['data'].get('profile_picture')

    def to_str(self):
        dflt = super(InstagramAccount, self).to_str()
        return self.account.extra_data['insta_profile']['data'].get('username', dflt)


class InstagramProvider(OAuth2Provider):
    id = 'instagram'
    name = 'Instagram'
    package = 'allauth.socialaccount.providers.instagram'
    account_class = InstagramAccount

    def extract_extra_data(self, data):
        return data

    def get_default_scope(self):
        return ['basic']

    def extract_uid(self, data):
        return str(data['insta_profile']['data']['id'])

    def extract_common_fields(self, data):
        return dict(username=data['insta_profile']['data']['username'])


providers.registry.register(InstagramProvider)
