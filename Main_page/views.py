from django.shortcuts import render
from .models import InfoCard, MediaLinks, GoogleMapsLink, Collaborations, Category, CyberClothing

# Create your views here.
def show_home(request):

	cards = InfoCard.objects.all()
	links = MediaLinks.objects.all()
	mapsLinks = GoogleMapsLink.objects.all()
	partners = Collaborations.objects.all()

	context = {
		"home": 'this is home page',
		"cards": cards,
		"links": links,
		"mapsLinks": mapsLinks,
		"partners": partners
	}

	return render(request, 'Main_page/home.html', context=context)

def center(request):

	categories = Category.objects.all()
	clothings = CyberClothing.objects.all()
	primer = CyberClothing.objects.get(pk=1)

	context = {
		"categories": categories,
		"primer": primer
	}

	return render(request, 'Main_page/center.html', context)