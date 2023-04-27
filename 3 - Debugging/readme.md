# Debugging React App
  - Understanding Error Message
  - Debugging and Analyzing React Apps
  - Working with break point
  - Using React DevTools

<br>

### **▸▸▸ 3.1 - Understanding Error Message**
1. Parsing error: jsx must be wrapped in an enclosing tag
    - Wrap your whole component in 1 root element, use the fragment tag <></>

2. "addGoadsHandler" is not defined: Typo in function name, it should be addGoalsHandler

3. Case sensitive, for example `<div> not <Div>`, `onClick` not `onclick`

<br>

### **▸▸▸ 3.2 - Debugging and Analyzing React Apps**
- When there are no error message output on console and the the app compile normally, where would we be looking for bug to debug?
 - Look for where is the issue on browser, trace back to which function trigger it, maybe you hard-coded it while developing and forgot to remove it?
 - Look for chains of event

<br>

### **▸▸▸ 3.3 - Working with break point**
- In devtool, go to `source` > go to the file that might contains the bug

![Add breakpoint](https://github.com/thaian161/react-playground/blob/main/docs/Breakpoint.png)

- Once add breakpoint, run the code again, then use `Step Into Next Function Call` button

<br>

### **▸▸▸ 3.4 - Using React DevTools**
Look at components tree in React DevTools - Components tab

![React DevTools - Components tab](https://github.com/thaian161/react-playground/blob/main/docs/ReactDevTools-Components.png)

<br>

-------------