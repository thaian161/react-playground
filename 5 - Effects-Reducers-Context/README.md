## [5. Effects - Reducers - Context](https://github.com/thaian161/react-playground/tree/main/5%20-%20Effects-Reducers-Context)

- Working with (Side) Effects
- Managing more Complex State with Reducers
- Managing App-Wide or Component-Wide State with Context

![Rule Of Hooks](https://github.com/thaian161/react-playground/blob/main/docs/RuleOfHooks.png)

<br>

## [▷ useEffect](https://github.com/thaian161/react-playground/tree/main/5%20-%20Effects-Reducers-Context/useEffect)

### **▸▸▸ 5.1 - What is "Side Effects" and introducing "useEffect" hook**

Side Effects are:

- Store data in Browser Storage
- Send HTTP requests to Backend Servers, Fetching Data
- Directly updating the DOM
- Set and Manage Timers, setInterval, setTimeout
- ...

=> These tasks **must happen outside of the normal component evaluation and render cycle** - especially they might block/delay rendering (eg. HTTP requests)

- useEffect accept 2 arguments: `useEffect(<function>, <dependency>)`

```
useEffect (() =>{ ... }, [ dependencies array ]);
```

Does useEffect run after every render?

- **useEffect runs on every render**, to avoid this, add dependency array (empty brackets)
- YES!!! by default, it runs both **after the first render** and **after every update**

```
useEffect(()=>{
  // Run only on the first render
}, []);
```

![useEffect() hook](https://github.com/thaian161/react-playground/blob/main/docs/Side%20Effect%20Hook.png)

## [▷ useReducer]()

## [▷ useContext]()
