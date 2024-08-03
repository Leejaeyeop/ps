import heapq
class Solution(object):
    #  profit이 무조건 많아야 함.
    def findMaximizedCapital(self, k, w, profits, capital):
        """
        :type k: int
        :type w: int
        :type profits: List[int]
        :type capital: List[int]
        :rtype: int
        """
        cnt = 0
        lis = []
        pq = []
        lisIdx = 0
        for i in range(len(profits)):
            lis.append([capital[i],profits[i]])
        lis.sort(key = lambda x:x[0])    

        while cnt < k:
            while lisIdx < len(lis) and w >= lis[lisIdx][0]:
                heapq.heappush(pq,-lis[lisIdx][1])
                lisIdx+=1
            if pq:
                w += -heapq.heappop(pq)
            cnt+=1

        return w    
