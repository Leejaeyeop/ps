def convertBinary(n, k):
    res = ""
    while 0 < n:
        # 나머지
        remainder = n % k
        # 나머지 + res
        res = str(remainder) + res 
        # n은 몫으로 
        n = n // k
    return res  
