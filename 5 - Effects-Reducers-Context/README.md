## [5. Effects - Reducers - Context](https://github.com/thaian161/react-playground/tree/main/5%20-%20Effects-Reducers-Context)
- Working with (Side) Effects
- Managing more Complex State with Reducers
- Managing App-Wide or Component-Wide State with Context

![Rule Of Hooks](https://github.com/thaian161/react-playground/blob/main/docs/RuleOfHooks.png)

<br>

## [A - useEffect](https://github.com/thaian161/react-playground/tree/main/5%20-%20Effects-Reducers-Context/useEffect)
### **5.1 - What is "Side Effects" and introducing "useEffect" hook**
Side Effects are:
  - Store data in Browser Storage
  - Send HTTP requests to Backend Servers
  - Set and Manage Timers, setInterval, setTimeout
  - ...
  
  => These tasks **must happen outside of the normal component evaluation and render cycle** - especially they might block/deplay rendering (eg. HTTP requests)

`useEffect (() =>{ ... }, [ dependencies array ]);`

 ![useEffect() hook](https://github.com/thaian161/react-playground/blob/main/docs/Side%20Effect%20Hook.png)