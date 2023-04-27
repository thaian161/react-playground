# Debugging React App
1 - Understanding Error Message
2 - Debugging and Analyzing React Apps
3 - Working with break point
4 - Using React DevTools

## 1: Understanding Error Message
1. Parsing error: jsx must be wrapped in an enclosing tag
- Wrap your whole component in 1 root element, use the fragment tag <></>

2. "addGoadsHandler" is not defined: Typo in function name, it should be addGoalsHandler

3. Case sensitive, for example <div> not <Div>, `onClick` not `onclick`

## 2 - Debugging and Analyzing React Apps
- When there are no error message output on console and the the app compile normally, where would we be looking for bug to debug?
 - Look for where is the issue on browser, trace back to which function trigger it, maybe you hard-coded it while developing and forgot to remove it?
 - Look for chains of event

## 3 - Working with break point
- In devtool, go to `source` > go to the file that might contains the bug

![Add breakpoint]()

- Once add breakpoint, run the code again, then use `Step Into Next Function Call` button

## 4 - Using React DevTools
Look at components tree in React DevTools - Components tab

![React DevTools - Components tab]()