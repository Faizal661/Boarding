# Categorized ReactJS Topics List (ReactJS - 1)

## **React Hooks**
- What is react hooks
- Rules of using hooks
- Why can't we declare a hook inside a if condition

- What is state?
- What is state management
- State vs props
- State vs props - mutability
- State vs variables
- Difference between normal let, const variables and usestate
- useState
- Return datatype of useState
- Let [value, setValue] = useState(false);
- Why state is immutable
- State updates
- Updating state that's an array
- Why arrays and objects are copied when updating state
- Why prev state is used for mutation?

- useEffect
- useEffect exact concept
- useEffect - syntax
- useEffect - uses
- useEffect - sideEffects
- useEffect vs useState
- What is the purpose of dependency array in useEffect
- useEffect's behavior when dependency array is empty vs not provided
- useEffect handling the lifecycle methods
- useEffect - lifecycle
- Handle mounting, updating & unmounting using useEffect
- Purpose of return statement in useEffect
- Return in useEffect hook syntax
- useEffect cleanup function
- Unmounting & cleanup function
- Handling unmount in useEffect hook
- How to achieve unmounting phase?
- How to achieve componentWillUnmount in functional component
- componentWillUnmount using useEffect
- useLayoutEffect
- useLayoutEffect vs useEffect

- useRef
- useRef exact concept
- Advantages of useRef
- Return value of useRef
- useRef usage
- How will you assign ref variable to dom
- Updating ref - useRef
- How to update useRef
- Ref.current.value
- How to access inputRef value
- Update inputRef
- useRef vs forwardRef

- useMemo
- useCallback
- useCallback, useMemo, why and how to use
- useMemo vs useCallback
- useMemo vs react.memo()

- useReducer
- useContext
- useId
- useNavigate
- useHistory
- useParams
- useLocation

***

## **React Components & Props**
- Props
- Usage of props
- Passing multiple props
- Props immutability
- Updating props
- Prop vs fragment
- Props vs state
- Parent to child communication
- Child to parent communication
- How to pass a state from parent to child component and vice versa
- Display user input from child component in parent component
- Toggle checkbox by button click (parent-child relation)
- Update child component's state from parent component

- What is a component?
- Component structure
- Built-in components (Fragment, Suspense, StrictMode)
- Controlled component
- Uncontrolled component
- Controlled vs uncontrolled component
- Example for uncontrolled components
- How to pull data from an uncontrolled component
- Benefits of uncontrolled elements

- Stateful vs stateless components
- Pure component
- Pure component - in class
- Pure Components vs React.memo
- React.memo()
- React.memo vs useMemo

- Higher-Order Components (HOC)
- What are higher-order components (HOCs) in React? How do they work?
- Usecases of Higher order components
- Example for Higher Order Component
- Advantage of using higher order component
- Custom higher order components

***

## **React Rendering & Virtual DOM**
- How react works
- Virtual DOM
- Virtual DOM (how it works)
- Virtual DOM stored where?
- Real DOM vs. Virtual DOM

- Reconciliation
- Reconciliation (what happens when state/props change)

- Diffing
- Diffing algorithm
- Diffing Algorithm (key usage, why index is a bad key)
- How react updates the actual Dom

- React Fiber
- What is React Fiber?
- React Fiber: Understanding its architecture and reconciliation process
- React Fiber (how it improves rendering)

- Rendering
- Types of rendering
- Incremental rendering
- Dynamic rendering
- Conditional rendering
- How does conditional rendering work?
- Conditional rendering - ways to do it
- Conditional rendering using && syntax

***

## **React Router**
- React Router
- Implementation of routers in React
- Types of router
- BrowserRouter vs HashRouter
- MemoryRouter

- Routes vs Route
- Switch
- Outlet
- Link vs NavLink

- useNavigate
- useHistory
- useNavigate vs useHistory
- useLocation
- useParams
- Reading query params
- Customize tab title and favicon

***

## **Synthetic Events**
- Event handling
- Handling events in react
- Event handlers (e.g., handleClick, handleChange)

- Synthetic events
- Synthetic Events (how React handles events)
- Advantages of using synthetic events
- Examples of synthetic events

- Event delegation in React
- Event pooling in React
- Purpose of fragments in React

***

## **React Fragments**
- React Fragments
- React.Fragment
- Empty tags in JSX vs HTML
- Why we use fragments
- Advantages of React Fragment
- Fragment vs div
- Drawbacks of using Div instead of Fragment

***

## **Custom Hooks**
- Custom hooks
- Creating a Custom Hook
- Rules of custom hooks
- Hooks vs functions
- Custom components
- Create a custom components

***

## **Lifecycle Methods**
- Lifecycle of a React component
- Lifecycle stages of a component
- Lifecycle methods in a React class component
- ComponentDidMount

- Life cycle methods in functional components
- Lifecycle events using useEffect
- How useEffect handle life cycle method
- How dependency array changes lifecycle behavior
- How to handle componentDidUpdate in a functional component
- componentWillUnmount using useEffect
- How useEffect triggers when unmounted

***

## **Error Handling**
- Error Boundaries
- What are error boundaries?
- Error Boundaries (why we need them, example)
- useRef hook

***

## **React Performance & Optimization**
- Code splitting
- Code Splitting (dynamic imports, ESModules)

- Lazy loading
- React.lazy
- React lazy syntax
- Suspense
- Suspense fallback

- How to improve performance of a react app
- Reduce initial load (code splitting, lazy, Suspense)
- How does initial load time differ between CSR and SSR
- Optimize application - clearing intervals

- React Profiler
- React Profiler (finding bottlenecks)
- Debouncing
- Throttling
- Memoization techniques
- Cons of memoization
- React.memo

***

## **CSR vs SSR**
- Client-side rendering (CSR)
- Benefits and Advantages of CSR

- Server-side rendering (SSR)
- Difference between SSR and CSR
- Use case of CSR and SSR
- Why SSR is faster than CSR for initial loading
- How initial load time differs between CSR and SSR
- Impacts of CSR on SEO

- Pros and cons of Single Page Apps (SPA)
- How SPA loads dynamic data
- Cons of SPA

***

## **JSX & Babel**
- Babel
- How Babel works
- What are Babel and Webpack?
- Transpiler / Transpilation
- Transpiler vs compiler

- What is JSX?
- JSX vs JS (Can we write JS code inside JSX?)
- Key differences between JSX and HTML
- Syntax difference between HTML and JSX
- Rules of JSX
- `htmlFor` attrib
- Giving key to a fragment

- Is JSX mandatory for React apps?
- Can React components be written without JSX?

- React.createElement
- React.createElement vs React.cloneElement
- CloneElement

***

## **React Project Setup & Tools**
- npm
- Webpack
- What are Babel and Webpack?
- Hot module replacement (HMR)
- Pros of Vite

- ReactDOM.render (Legacy API)
- ReactDOM.createRoot / createRoot() (React 18 API)
- createRoot vs createElement

- `StrictMode`
- `StrictMode` in React (Usage, enabling/disabling)
- Create a route

***

## **Practical Tasks & Exercises**
- Working of loop
- Create element
- Show the fields in an array of objects using map
- Reduce method
- Filter method vs reduce method exact concept
- How to store user input values to useState(practical)
- Check whether the text entered in input fields are matching or not
- conditionally render the count in red color when the value is an odd number in a counter app
- Counter - invalid hook call issue
- Increment and decrement

- Add a style to each of the title fields
- Add or delete an item at any position
- Add functionality to display current count of todos 
- Add functionality to prevent duplicate task entries in TODO

- Implement a filter
- Implement a counter
- Implement a counter using `useContext`
- Implement a toggle button
- Implement a List ul li 
- Implement an entered text show it in a h1 tag

- Create input field
- Create a timer using `useEffect`
- Create a component to add items to a list using `useReducer`
- Create a component to add two numbers by clicking a button.

- lifecycle events using `useEffect`
- Fetch data from api using `useEffect`
- setInterval in a `useEffect`
- Setinterval
- clearInterval
- Stop and start functionality
- Batching

***

## **React Features & Concepts**
- ESM (ECMAScript Modules)
- Default vs Named Export

- What is React (brief)
- Features of React
- Library vs Framework (Clarity needed)
- Is React a library or framework?
- Single Page Application (SPA) concept

- Purpose of the Root DOM element
- Purpose of `index.html`
- Component Naming Convention (PascalCase vs CamelCase)
- Why components need a single parent element (JSX constraint)

- One-way Data Binding
- Why two Virtual DOMs are needed
- Immutability of State

- Spread operator vs `Array.push` for array state updates
- Phases of State Updation (Triggering, Rendering, Committing)

- Batching and Automatic Batching
- Using `index` as key in lists
- New Features of React 19