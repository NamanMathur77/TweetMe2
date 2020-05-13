from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import Tweet
User = get_user_model()
# Create your tests here.
class TweetTestCase(TestCase):
    def setUp(self):
        User.objects.create_user(username='abc', password='somepassword')
        User.objects.create_user(username='cfe', password='somepassword')
    def test_user_created(self):
        user = User.objects.get(username="cfe")
        self.assertEqual(user.username, "cfe")
