# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('socialaccount', '0002_auto_20150306_2245'),
    ]

    operations = [
        migrations.AlterField(
            model_name='socialaccount',
            name='provider',
            field=models.CharField(max_length=30, verbose_name='provider', choices=[(b'spotify', b'Spotify'), (b'google', b'Google'), (b'facebook', b'Facebook'), (b'instagram', b'Instagram')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='socialapp',
            name='provider',
            field=models.CharField(max_length=30, verbose_name='provider', choices=[(b'spotify', b'Spotify'), (b'google', b'Google'), (b'facebook', b'Facebook'), (b'instagram', b'Instagram')]),
            preserve_default=True,
        ),
    ]
