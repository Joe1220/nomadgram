from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

class Command(BaseCommand):

  def handle(self, *args, **options):

    User = get_user_model()
    User.objects.create_superuser('joe1220', 'joe1220@daum.net', 'c159789c')