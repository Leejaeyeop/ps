import math 

def convertBinary(n, k):
    res = ""
    while 0 < n:
        remainder = n % k
        res = str(remainder) + res 
        n = n // k
    return res     

# 소수 판별
def isPrimenumber(x):
    if x == 1:
        return False
    # 2부터 x의 제곱근까지의 숫자
    for i in range (2, int(math.sqrt(x) + 1)):
            if x % i == 0:
                return False
    return True

       
# 문자열 split + 진법 변환
def solution(n, k):
    answer = 0
    
    num = convertBinary(n, k)
        
    nums = filter(lambda x : len(x) > 0, num.split("0"))
                    
    for num in nums:
        if isPrimenumber(int(num)) == True:
            answer +=1
                     
    return answer