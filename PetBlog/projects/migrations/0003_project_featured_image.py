# Generated by Django 4.1.7 on 2023-03-18 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_tag_project_source_link_project_vote_ratio_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='featured_image',
            field=models.ImageField(blank=True, default='default.png', null=True, upload_to=''),
        ),
    ]
