"""
Django settings for socialplug project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
from django.core.urlresolvers import reverse_lazy

BASE_DIR = os.path.dirname(os.path.dirname(__file__))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []

# Application definition

INSTALLED_APPS = (
    'rest_framework',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'main',
    # messaging system
    'django_messages',
    # the best thing eva
    'swampdragon',
    'dragonapp',
    'django.contrib.sites',
    # auth collection
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.facebook',
    'allauth.socialaccount.providers.google',
    'allauth.socialaccount.providers.instagram',
    'allauth.socialaccount.providers.spotify',
    # extensions?
    'django_extensions',
    'django_forms_bootstrap'

)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'socialplug.urls'

WSGI_APPLICATION = 'socialplug.wsgi.application'

REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': (
        'rest_framework_filters.backends.DjangoFilterBackend',
    ),



# swampdragon stuff
SWAMP_DRAGON_CONNECTION = ('swampdragon.connections.sockjs_connection.DjangoSubscriberConnection', '/data')
DRAGON_URL = 'http://localhost:9999/'
SWAMP_DRAGON_HEARTBEAT_ENABLED = True



LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}


TEMPLATE_CONTEXT_PROCESSORS = (
    'django.core.context_processors.tz',
    'django.core.context_processors.request',
    'django.contrib.messages.context_processors.messages',
    'django_messages.context_processors.inbox',
    'django.contrib.auth.context_processors.auth',
    "django.core.context_processors.debug",
    "django.core.context_processors.i18n",
    "django.core.context_processors.media",
    "django.core.context_processors.static",
    "django.core.context_processors.request",
    "allauth.account.context_processors.account",
    "allauth.socialaccount.context_processors.socialaccount",
)

AUTHENTICATION_BACKENDS = (
    "django.contrib.auth.backends.ModelBackend",
    "allauth.account.auth_backends.AuthenticationBackend",
)

SOCIALACCOUNT_QUERY_EMAIL = True
# social login scopes
SOCIALACCOUNT_PROVIDERS = \
    {
        'facebook':
            {'SCOPE': ['email', 'public_profile', 'user_activities', 'user_likes', 'user_interests', 'user_actions.books',
                       'user_actions.music'],
             'AUTH_PARAMS': {'auth_type': 'reauthenticate'},
             'METHOD': 'js_sdk'},

    'google':
        {'SCOPE': ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email',
                   'https://www.googleapis.com/auth/youtube.readonly']
            , 'AUTH_PARAMS': {}},
    'instagram':
        {'SCOPE': ['basic']
            , 'AUTH_PARAMS': {}},
    'spotify':
        {'SCOPE': ['user-library-read', 'user-read-email']
            , 'AUTH_PARAMS': {}},

    }


SITE_ID = 1
AUTH_PROFILE_MODULE = 'main.UserProfile'

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/

STATIC_URL = '/static/'

TEMPLATE_DIRS = (
    os.path.join(BASE_DIR,  'templates'),


)


MEDIA_URL = '/media/'

MEDIA_ROOT = os.path.join(BASE_DIR, *MEDIA_URL.strip('/').split('/'))
STATIC_ROOT = os.path.join(BASE_DIR, 'main/static')
LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'
ACCOUNT_LOGOUT_REDIRECT_URL = '/'
ACCOUNT_USERNAME_MIN_LENGTH = 2
ACCOUNT_PASSWORD_MIN_LENGTH = 6
SOCIALACCOUNT_AUTO_SIGNUP = True
# SOCIALACCOUNT_ADAPTER = 'main.adapter.MySocialAccountAdapter'

try:
    from local_settings import *
except ImportError:
    pass