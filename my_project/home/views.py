from django.shortcuts import render

# Create your views here.
def home_page(request):
    return render(request, 'home/home.html')

def profile_page(request):
    return render(request, 'home/profile.html')
