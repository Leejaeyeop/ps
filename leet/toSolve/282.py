from typing import List

class Solution:
    def addOperators(self, num: str, target: int) -> List[str]:
        res = []

        # Perform depth-first search starting from character at index `idx` in `num`
        # `prev_operand` is the value of the operand formed just prior to the current call
        # `current_val` is the current calculated value considering all the operators added till now
        # `expression` is the string representation of the expression built till now
        def dfs(idx, prev_operand, current_val, expression):
            # When we have reached the end of the string `num`
            if idx == len(num):
                # If the expression's calculated value equals the target then store the expression
                if current_val == target:
                    res.append(expression)
                return
          
            # Try out all possible splits for the current prefix
            for i in range(idx, len(num)):
                # Skip any number that starts with zero and has more than one digit
                if i != idx and num[idx] == '0':
                    break
              
                # The current operand, formed by the digits from idx to i inclusive
                current_operand = int(num[idx : i + 1])
              
                if idx == 0:
                    # If the index is at the beginning of 'num', we just take the current number as operand
                    dfs(i + 1, current_operand, current_operand, str(current_operand))
                else:
                    # Try adding '+'
                    dfs(i + 1, current_operand, current_val + current_operand, expression + "+" + str(current_operand))
                    # Try adding '-'
                    dfs(i + 1, -current_operand, current_val - current_operand, expression + "-" + str(current_operand))
                    # Try adding '*'
                    dfs(
                        i + 1,
                        prev_operand * current_operand, # this will be used in the next call to undo if we backtrack
                        current_val - prev_operand + (prev_operand * current_operand), # undo the previous operand and apply multiplication
                        expression + "*" + str(current_operand)
                    )

        # Start the DFS from index 0, with previous operand as 0 and current value as 0 and no expression built yet
        dfs(0, 0, 0, "")
        return res
