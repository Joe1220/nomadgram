# Generated by Django 2.0.3 on 2018-03-21 15:58

from django.db import migrations
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        ('taggit', '0002_auto_20150616_2121'),
        ('images', '0004_auto_20180320_1503'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='tags',
            field=taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags'),
        ),
    ]
