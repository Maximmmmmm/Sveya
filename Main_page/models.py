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

class Category(models.Model):
	category = models.CharField(max_length=255)

	def __str__(self):
		return self.category

class CyberClothing(models.Model):
	title = models.CharField(max_length=150)
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	file = models.FileField(upload_to='files')
	video_url = models.URLField()
	example = models.ImageField(upload_to='examples')
	details = models.TextField()
	summary = models.TextField()