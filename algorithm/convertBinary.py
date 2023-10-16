def convertBinary(n, k):
    res = ""
    while k <= n:
        remainder = n % k
        res = str(remainder) + res 
        n = n // k
