# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto_20150319_2046'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='country',
        ),
        migrations.RemoveField(
            model_name='event',
            name='email',
        ),
        migrations.RemoveField(
            model_name='event',
            name='phonenumber',
        ),
        migrations.AlterField(
            model_name='event',
            name='date',
            field=models.DateField(auto_now=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='event',
            name='time',
            field=models.TimeField(auto_now=True),
            preserve_default=True,
        ),
    ]
