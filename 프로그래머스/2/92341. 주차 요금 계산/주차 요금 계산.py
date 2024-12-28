import math

def solution(fees, records):
    answer = []
    basicTime,basicFee,unitTime,unitFee = map(int, fees)
    feeDic = {}
    timeDic = {}
    inRecords = {}
    
    def convertTime(time):
        hour,minutes = map(int, time.split(":"))
        return minutes + (hour * 60)
    
    def calcTime(inTime, outTime):
        return outTime - inTime
    
    def calcFee(time):
        if time <= basicTime:
            return basicFee
        else:
            return basicFee + (math.ceil((time - basicTime) / unitTime) * unitFee)
    
    for record in records: 
        time,carNumber,stat = record.split(" ")
        
        if stat == "IN":
            inRecords[carNumber] = time
        else:
            if(timeDic.get(carNumber) == None):
                timeDic[carNumber] = 0
            timeDic[carNumber] += calcTime(convertTime(inRecords[carNumber]), convertTime(time))
            inRecords[carNumber] = "0"
            
    # 미출차 시간 계산
    for num, time in inRecords.items():
        if time != "0":
            if(timeDic.get(num) == None):
                timeDic[num] = 0
            timeDic[num] += calcTime(convertTime(time), convertTime("23:59"))
    
    # 요금 계산
    for num, time in timeDic.items():
        if time != "0":
            if(feeDic.get(num) == None):
                feeDic[num] = 0
            feeDic[num] += calcFee(time)
    
    answer = [feeDic[key] for key in sorted(feeDic)]
        
    return answer