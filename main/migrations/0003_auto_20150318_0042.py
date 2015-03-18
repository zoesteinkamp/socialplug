# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_userphotos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='music',
            name='image',
            field=models.CharField(max_length=500),
            preserve_default=True,
        ),
    ]
