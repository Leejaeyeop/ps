# https://www.acmicpc.net/problem/2352

# 1번 연결 yes or no,,,
import sys
input = sys.stdin.readline

n = int(input())
connected = [0]*(n)

targets = list(map(int, input().split()))
