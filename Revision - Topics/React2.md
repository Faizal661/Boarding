# Categorized ReactJS Topics List (ReactJS - 2)

## **React Hooks**

- useState (basics, controlled vs uncontrolled components)

- useEffect (dependency array, cleanup function, lifecycle simulation)
- What will happen if we not pass dependency array in useEffect
- Cleanup function syntax in useEffect
- Passing Async Callbacks in useEffect
- Why can't we use async in useEffect

- useLayoutEffect
- useLayoutEffect (vs useEffect, sync vs async execution)
- Difference between useEffect and useLayoutEffect

- useReducer
- useReducer (how it works)
- When should you use useReducer over useState?
- How does useReducer work exactly?
- Init in useReducer
- useReducer example
- Create a counter using useReducer

- useRef
- useRef (storing values, DOM reference, timer example, forwardRef)
- Can we store data inside useRef?
- Create ref vs forward ref

- useMemo
- React.memo vs useMemo
- useMemo (difference with React.memo, prevents recalculation not re-render)
- useMemo (re-renders?)
- useMemo example

- useCallback
- useCallback (when functions should be memoized, dependency array importance)
- When does useCallback re-render?
- useCallback: why should functions be recreated?
- Limitations of useCallback & useMemo

- useContext and context API
- useContext & Context API (Provider, Consumer, flow of data, props drilling solution)
- Understand the flow of context api
- How to update data in context
- Limitations of useContext
- Implementation toggle theme functionality using context api?
- Increment and decrement counter using useContext 

- useId (generating unique IDs)

- useLocation
- Useparams

- Rules of hook?
- Where can we use hooks?

- Limitations of functional components

***

## **React Performance & Optimization**
- Lazy loading
- React lazy syntax
- React.lazy – code splitting
- What is the use of React.lazy?
- Disadvantage of lazy loading

- Code Splitting (dynamic imports, ESModules)
- Suspense fallback
- Suspense (with fallback, data fetching future scope)

- How to improve performance of a react app
- Take deep understanding in improving react performance technics
- Techniques to improve performance (memoization, virtualization, throttling/debouncing, SSR)
- Implement useCallback 
- Implement useMemo  

- React profiler
- React Profiler (finding bottlenecks)

- Improving initial load time (CSR vs SSR)
- React fiber

***

## **React Components & Props**
- Pure component
- Pure Components vs React.memo (when re-renders happen, referential equality)
- Working of React.memo
- How React.memo is called
- Why functions need to be memoized

- Controlled components
- Uncontrolled components
- Controlled vs Uncontrolled Components (with examples)

- Stateless vs Stateful Components

- Child to Parent communication (callback props, useRef approach)
- Sibling communication (via lifting state up, context)
- Props lifting
- Lifting State Up (best practice)

- Props drilling
- Props Drilling (what it is, why Context is better)
- When is prop drilling good?

- HOC (High Order Components)
- Higher Order Components (HOC, use cases)
- Usecase of Higher order components
- High Order Components - benefits

- Render props
- Render Props (example usage)

- Change the colour of the text using useRef

- Portals
- Proptypes
- forwardRef
- Built in components
- Create props Proxy for HOC
- componentDidCatch

***

## **React Router**
- Types of routers
- Hash router
- Protected routes
- Routing and navigation 

- Outlet
- Outlet vs portal

- Lifecycle methods
- Difference between Context API and useContext

***

## **Custom Hooks**
- Custom hooks
- Custom Hooks (why, how to create, difference from functions)

- Create a custom hook
- Create custom hook - convert string to capital letter

***

## **React Internals & Rendering**
- Virtual DOM
- Virtual DOM (how it works)
- Shadow DOM
- Shadow DOM vs Virtual DOM

- Reconciliation
- Reconciliation (what happens when state/props change)

- Diffing Algorithm
- Diffing Algorithm (key usage, why index is a bad key)

- React Fiber
- React Fiber (what it is, how it improves rendering)

- Synthetic events
- Synthetic Events (how React handles events)

- Fragment (why we use it, <> shorthand)
- Why we use fragments
- Div vs fragments (need clarity)

- Lifecycle of a React component
- Life cycle method in react(need clarity)

- Portal (use case, rendering outside parent hierarchy)
- Purpose of the root DOM element in React

- Event pooling
- Method binding
- Dynamic rendering

- Initial load time differ between CSR and SSR

***

## **Error Handling & Validation**
- Error boundary
- Error Boundaries (why we need them, example)

- Add form validation for forms
- Add validation for form
- Product input validation

- Ask stronger password


***

## **Context API**
- useContext - implementation
- useContext and context API
- useContext & Context API (Provider, Consumer, flow of data, props drilling solution)
- Understand the flow of context api

- Why we need to use context?
- Disadvantages of using context
- Context API limitations (when Redux or Zustand is better)

- Local storage vs context api

- How to update data in context
- Implementation toggle theme functionality using context api?
- Increment and decrement counter using useContext 


***

## **Practical Exercises**
- Create a custom hook
- Create nested dropdown and map the array of objet based on the selection of 1st dropdown
- Create counter using `useReducer`
- Create a component to add items to a list using `useReducer`
- Create props Proxy for HOC
- Change the colour of the text using useRef
- Sibling communication in react
- Re render a component if page resized

- Implement a basic stopwatch
- Implement lazy loading

- Find sum of middle of the 5 elements -child to parent communication


***

## **React Features & Concepts**
- Npx
- Dynamic imports, ESModules
- Portal
- Suspense
- Fallback
- Render props
- React profiler
- createref

- Hot Module Replacement (HMR)
- Hydration (in SSR/Next.js context)
- Memory Leaks in useEffect (how to avoid with cleanup)
- Referential Equality problem in React

- StrictMode in React
- React concurrentmode
- Automatic batching
- React Concurrent Mode (automatic batching)
- One-way Data Binding (how React enforces it)


***

## **Axios**
- Canceltoken
- Axios interceptors
- Axios canceltoken
- axios vs fetch

***