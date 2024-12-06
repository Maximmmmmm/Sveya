from django.db import models

# Create your models here.
class InfoCard(models.Model):
	img = models.ImageField(upload_to='media')
	title = models.CharField(max_length=50)
	value = models.CharField(max_length=50)

class MediaLinks(models.Model):
	img = models.ImageField(upload_to='media')
	name = models.CharField(max_length=50)
	link = models.URLField()

class GoogleMapsLink(models.Model):
	name = models.CharField(max_length=50)
	url = models.URLField()

class Collaborations(models.Model):
	img = models.ImageField(upload_to='media')