from django.forms import ModelForm
from .models import Project, Review

class ProjectForm(ModelForm):
    class Meta:
        model = Project
        # fields = {'__all__'}
        fields = ['title', 'featured_image', 'description', 'demo_link', 'source_link', 'tags']


class ReviewForm(ModelForm):
    class Meta:
        model = Review
        fields = ['value', 'body']

        labels = {
            'value': 'Place your vote',
            'body': 'Add a comment with a vote'
        }

