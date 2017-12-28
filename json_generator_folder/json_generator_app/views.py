from django.shortcuts import render
from django import forms
from django.http import HttpResponse
from django.http import JsonResponse
import json
#from .MakeJsonList import makeJsonList
from .MakeJsonList_copy import makeJsonList
from .MakeJsonList_copy import columeHeaderList
import os
from django.conf import settings
import zipfile
from wsgiref.util import FileWrapper
import codecs
import csv
# Create your views here.

def json_list(request):
    if request.method == 'GET':
        total=request.GET['total']
        num=request.GET['num']
        dataList=[]
        for i in range(0,int(num)):
            #one=[request.GET['name%d'%i], request.GET['type%d'%i]] # 1차버전
            one=request.GET['type%d'%i] #2차버전. 셀렉터 값만 받아오면 되므로 name이 사라짐
            dataList.append(one)
        #makeJsonList(int(total))
        
    return HttpResponse(json.dumps({'download_url':'makeJsonList/download','sample':makeJsonList(int(total), int(num), dataList)}),content_type="application/json")
    #return download(request, makeJsonList(int(total), int(num), dataList));
    #return some_view(request)

def main(request):
    return render(request, 'json_generator_app/html/main.html')



def download(request):
    #file_path = os.path.join('/media/ymmu/Dr.Mu/python_study/jangopractice/json_generator_folder/json_generator_app/', path)
    file_path = '/media/ymmu/Dr.Mu/python_study/jangopractice/json_generator_folder/json_generator_app/json_list.json'
    
    #압축해서 보내주려 했는데 다운받고 압축풀려하면 손상되었다고 뜸..왜일까
    zipFile = zipfile.ZipFile('/media/ymmu/Dr.Mu/python_study/jangopractice/json_generator_folder/json_generator_app/json_list.zip', 'w')
    zipFile.write(file_path, compress_type=zipfile.ZIP_DEFLATED)
    zipFile.close()
    response = HttpResponse()
    if os.path.exists(file_path):
        response = HttpResponse(FileWrapper(open('/media/ymmu/Dr.Mu/python_study/jangopractice/json_generator_folder/json_generator_app/json_list.json', 'r')), content_type='application/json')
        response['Content-Disposition'] = 'attachment; filename=json_list.json'
    return response

def getSelectOptions(request):
    return HttpResponse(json.dumps({'headers':columeHeaderList()}),content_type ="application/json");












def some_view(request):
    # Create the HttpResponse object with the appropriate CSV header.
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="somefilename.csv"'

    writer = csv.writer(response)
    writer.writerow(['First row', 'Foo', 'Bar', 'Baz'])
    writer.writerow(['Second row', 'A', 'B', 'C', '"Testing"', "Here's a quote"])

    return response
