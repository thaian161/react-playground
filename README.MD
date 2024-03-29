<div align="center">

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=700&size=35&duration=1&pause=10000&color=5299F3&center=true&vCenter=true&multiline=true&width=750&height=57&lines=REACT+PLAYGROUND)](https://git.io/typing-svg)

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=700&size=23&duration=5001&pause=10000&color=5299F3&center=true&vCenter=true&multiline=true&width=750&height=65&lines=Learning+%26+Practicing+React+Thru+Building+Projects)](https://git.io/typing-svg)

  <p align="center">∙・◦◎◦・∙</p>

  <br>

</div>

 <p align="center">Table Of Content</p>

- [1. Expenses App - an app to track user expenses with a filter by year feature and conduct a simple spending column chart. Those following concepts are used to built this Expense App:](#1-expenses-app---an-app-to-track-user-expenses-with-a-filter-by-year-feature-and-conduct-a-simple-spending-column-chart-those-following-concepts-are-used-to-built-this-expense-app)
- [2. Styling React Components - this folder is used to practice:](#2-styling-react-components---this-folder-is-used-to-practice)
- [3. Debugging React App](#3-debugging-react-app)
  - [**▸▸▸ 3.1 - Understanding Error Message**](#-31---understanding-error-message)
  - [**▸▸▸ 3.2 - Debugging and Analyzing React Apps**](#-32---debugging-and-analyzing-react-apps)
  - [**▸▸▸ 3.3 - Working with break point**](#-33---working-with-break-point)
  - [**▸▸▸ 3.4 - Using React DevTools**](#-34---using-react-devtools)
- [4. UserData App - the goal of this project is to utilize all the concepts and skills learned from section 1, 2 and 3](#4-userdata-app---the-goal-of-this-project-is-to-utilize-all-the-concepts-and-skills-learned-from-section-1-2-and-3)
- [5. Effects - Reducers - Context](#5-effects---reducers---context)
  - [▷ useEffect](#-useeffect)
  - [**▸▸▸ 5.1 - What is "Side Effects" and introducing "useEffect" hook**](#-51---what-is-side-effects-and-introducing-useeffect-hook)

 <p align="center">∙・◦⏤◦・∙</p>

 <br>
 <br>

## [1. Expenses App](https://github.com/thaian161/react-playground/tree/main/1%20-%20Expenses-app) - an app to track user expenses with a filter by year feature and conduct a simple spending column chart. Those following concepts are used to built this Expense App:

- Props
- Working with Events
- Two-way Blinding
- useState hook
- Lifting State Up
- Rendering Lists & Conditional Content

<br>

---

## [2. Styling React Components](https://github.com/thaian161/react-playground/tree/main/2%20-%20Styling-react-components) - this folder is used to practice:

- CSS Classes Dynamically
- Styled Component Library
- Media Queries
- CSS modules

<br>

---

## [3. Debugging React App](https://github.com/thaian161/react-playground/tree/main/3%20-%20Debugging)

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

---

## [4. UserData App](https://github.com/thaian161/react-playground/tree/main/4%20-%20UserData-app) - the goal of this project is to utilize all the concepts and skills learned from section 1, 2 and 3

<br>

---

## [5. Effects - Reducers - Context](https://github.com/thaian161/react-playground/tree/main/5%20-%20Effects-Reducers-Context)

- Working with (Side) Effects
- Managing more Complex State with Reducers
- Managing App-Wide or Component-Wide State with Context

![Rule Of Hooks](https://github.com/thaian161/react-playground/blob/main/docs/RuleOfHooks.png)

<br>

### [▷ useEffect](https://github.com/thaian161/react-playground/tree/main/5%20-%20Effects-Reducers-Context/useEffect)

### **▸▸▸ 5.1 - What is "Side Effects" and introducing "useEffect" hook**

Side Effects are:

- Store data in Browser Storage
- Send HTTP requests to Backend Servers, Fetch Data
- Set and Manage Timers, setInterval, setTimeout
- ...

=> These tasks **must happen outside of the normal component evaluation and render cycle** - especially they might block/delay rendering (eg. HTTP requests)

`useEffect (() =>{ ... }, [ dependencies array ]);`

![useEffect() hook](https://github.com/thaian161/react-playground/blob/main/docs/Side%20Effect%20Hook.png)
