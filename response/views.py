from django.shortcuts import render

# Create your views here.
def index(request):
    img_url={"url":"https://ravish1.s3.ap-south-1.amazonaws.com/1.jpg",}
    return render(request,'response/index.html',context=img_url)
