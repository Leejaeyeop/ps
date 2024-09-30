class Solution(object):
    def wordPattern(self, pattern, s):
        """
        :type pattern: str
        :type s: str
        :rtype: bool
        """
        sdict = {}
        pdict = {}
        s = s.split(" ")
        if len(s) != len(pattern):
            return False
        for i in range(len(s)):
            if s[i] not in pdict and pattern[i] not in sdict:
                sdict[pattern[i]] = s[i]
                pdict[s[i]] = pattern[i]
            elif (s[i] not in pdict or pattern[i] not in sdict) or sdict[pattern[i]] != s[i] or pdict[s[i]] != pattern[i] :
                return False     

        return True
