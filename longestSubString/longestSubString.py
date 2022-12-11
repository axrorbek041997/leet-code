
class Solution:
	def lengthOfLongestSubString(self, s: str) -> int:
		for i, val in enumerate(s):
			for j, v in enumerate(s[i:]):
				print(s[i:i+j+1])
				if v in s[i:i+j+1]:
					break


stn = Solution()
stn.lengthOfLongestSubString('abcabcbb')
