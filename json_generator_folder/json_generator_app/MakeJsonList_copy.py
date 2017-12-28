import random
import pandas as pd
import os.path


def makeJsonList(total,num,dataList):
    PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))
    df = pd.read_excel(PROJECT_ROOT + '/general_form.xlsx')
    f = open("./json_generator_app/json_list.json", 'w')
    json_sample=''
    for j in range(1, total+1):
        json="{"
        for i in range(0, num):
            if i!=(num-1):
                json = classify(dataList[i], i, j, json, df)
                json+=","
            #맨 마지막 것은 쉼표 빼줘야함
            else:
                json = classify(dataList[i], i, j, json, df)
                
        json+="} \n"
        f.write(json)
        if(j==1):
            json_sample=json
    f.close()
    return json_sample


def classify(dataList, i, j, json, df):
    if dataList=="Name":
        json += "\"name\":\"%s\"" %df['Name'][j]
        #정수로 주어질 경우
    elif dataList=="ID":
        json += "\"ID\":\"%d\"" %j
    elif dataList=="Email":
        json += "\"email\":\"%s\"" %df['Email'][j]
    elif dataList=="Sex":
        json += "\"sex\":\"%s\"" %df['Sex'][j]
    elif dataList=="Country":
        json += "\"country\":\"%s\"" %df['Country'][j]
    elif dataList=="ISO2":
        json += "\"ISO2\":\"%s\"" %df['ISO2'][j]
    elif dataList=="TEL":
        json += "\"tel\":\"%s\"" %df['Tel'][j]
    elif dataList=="Password":
        json += "\"password\":\"%s\"" %df['Password'][j]
    return json