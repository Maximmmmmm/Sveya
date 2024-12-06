from django.shortcuts import render
from .models import InfoCard

# Create your views here.
def show_home(request):

	cards = InfoCard.objects.all()

	context = {
		"home": 'this is home page',
		"cards": cards
	}

	return render(request, 'Main_page/home.html', context=context)
