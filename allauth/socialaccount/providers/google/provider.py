from allauth.account.models import EmailAddress
from allauth.socialaccount import providers
from allauth.socialaccount.providers.base import (ProviderAccount,
                                                  AuthAction)
from allauth.socialaccount.providers.oauth2.provider import OAuth2Provider
from allauth.socialaccount.app_settings import QUERY_EMAIL
from allauth.account.utils import user_email


class Scope(object):
    EMAIL = 'email'
    PROFILE = 'profile'


class GoogleAccount(ProviderAccount):
    def get_profile_url(self):
        return self.account.extra_data['google_profile'].get('link')

    def get_avatar_url(self):
        return self.account.extra_data['google_profile'].get('picture')

    def to_str(self):
        dflt = super(GoogleAccount, self).to_str()
        return self.account.extra_data['google_profile'].get('name', dflt)


class GoogleProvider(OAuth2Provider):
    id = 'google'
    name = 'Google'
    package = 'allauth.socialaccount.providers.google'
    account_class = GoogleAccount

    def get_default_scope(self):
        scope = [Scope.PROFILE]
        if QUERY_EMAIL:
            scope.append(Scope.EMAIL)
        return scope

    def get_auth_params(self, request, action):
        ret = super(GoogleProvider, self).get_auth_params(request,
                                                          action)
        if action == AuthAction.REAUTHENTICATE:
            ret['approval_prompt'] = 'force'
        return ret

    def extract_uid(self, data):
        return str(data['google_profile']['id'])

    def extract_common_fields(self, data):
        return dict(email=data['google_profile'].get('email'),
                    last_name=data['google_profile'].get('family_name'),
                    first_name=data['google_profile'].get('given_name'))

    def extract_email_addresses(self, data):
        ret = []
        email = data['google_profile'].get('email')
        if email and data['google_profile'].get('verified_email'):
            ret.append(EmailAddress(email=email,
                       verified=True,
                       primary=True))
        return ret


providers.registry.register(GoogleProvider)
