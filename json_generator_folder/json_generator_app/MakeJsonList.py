import random

def makeJsonList(total,num,dataList):
    f = open("./json_generator_app/json_list.json", 'w')
    json_sample=''
    for j in range(1, total):
        json="{"
        for i in range(0, num):
            if i!=(num-1):
                #스트링으로 주어질 경우
                if dataList[i][1]=="String":
                    json += "\"%s\":\"%s\"," %(dataList[i][0] ,dataList[i][1])
                #정수로 주어질 경우
                if dataList[i][1]=="Int":
                    json += "\"%s\":\"%d\"," %(dataList[i][0] ,j)
            
            #맨 마지막 것은 쉼표 빼줘야함
            else:
                #스트링으로 주어질 경우
                if dataList[i][1]=="String":
                    json += "\"%s\":\"%s\"" %(dataList[i][0] ,dataList[i][1])
                #스트링으로 주어질 경우
                if dataList[i][1]=="Int":
                    json += "\"%s\":\"%d\"" %(dataList[i][0] ,j)
        json+="} \n"
        f.write(json)
        if(j==1):
            json_sample=json
    f.close()
    return json_sample