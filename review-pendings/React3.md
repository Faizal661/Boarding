# Categorized ReactJS Topics List

## **Redux**

- *Introduction & Fundamentals*
- What is Redux?
- Redux Core Architecture and Data Flow (Action → Reducer → Store → UI)
- Core Principles of Redux (Unidirectionality, Single Source of Truth)
- Redux vs Flux Architecture

- *Comparison & When to Use Redux*
- Redux vs Context API (Pros, Cons, When to Use)
- Advantage of Redux over context
- Redux vs Local Storage
- Limitations and Disadvantages of Redux

- *Core Redux Concepts*
- Redux Store (Role, Methods: `getState`, `dispatch`, `subscribe`)
- Actions and Action Creators (How to dispatch an action with payload)
- Constants (Action Types)
- Reducers (Pure Functions & Implementation)
- Immutability of State (Importance and Achievement with Immer)
- What is immer and how is it used in Redux?
- How can we handle impure actions in redux?

- *React-Redux Integration (Legacy)*
- `Provider` Component (React-Redux)
- What is the purpose of the Provider component in React Redux?
- Legacy API: `connect`, `mapStateToProps`, `mapDispatchToProps`
- What is the difference between mapStateToProps and useSelector?

- *Modern Redux (Redux Toolkit - RTK)*
- Redux vs Redux Toolkit
- `configureStore` (RTK)
- Redux `createSlice` (Slices, `extraReducers`)
- `createAsyncThunk` (RTK)
- Hooks: `useSelector` and `useDispatch` (Selectors)

- *Advanced Redux Patterns*
- `combineReducers`
- Redux Application Structure
- Clearing/Resetting Redux State

- *Middleware & Async Operations*
- Middleware (Purpose, Role in Auth/Side Effects)
- Asynchronous Operations (Redux Thunk vs Redux Saga, API Call Placement)
- Call and put in Redux saga

- *Redux Persistence & Performance*
- Redux Persist (Mechanism and Implementation)
- Performance Optimizations

- *Debugging & Testing*
- Redux DevTools (Purpose & Debugging)
- Testing Redux Reducers

- *Practical Implementation*
- Practical Implementation (Counter, Todo, Data Storage Workouts)
- Do more practicals by fully understanding the Redux flow (Action → Reducer → Store → UI)

---

## **JWT (JSON Web Tokens)**

- What is JWT token?
- Components of JWT token
- JWT: header, payload, signature
- Contents of JWT headers

- jwt.verify()
- JWT.verify vs decode
- jwt.verify arguments
- JWT decode vs verify 

- JWT claims
- JWT signature
- Use of signature in JWT

- Refresh Token
- Use of refresh token

- JWT flow
- JWT Token generation
- Understand how JWT works
- Signing algorithm example
- Role of token
- Jwt generation and verification code
- Bearer keyword
- Security offered by JWT


- Write a middleware to console the JWT token(Practical)?

- How JWT is verified?
- Difference between access token and refresh token?
- Issues with JWT with long TTL?
- Updating expired JWT token?
- Use of secret key in jwt?
- JWT claims, can client decode JWT?
- Role of JWT signature, how JWT verification works?
- What determines the lifetime of access token?
- How will you authenticate a JWT token?
- Where should access and refresh tokens be stored on the client side?
- Which is the ideal place to store JWT token?
***

## **React Hooks**
- Hooks in Redux
- Hook vs function
- Rules of using hooks
- Learn the concept of hooks
- Custom hook scenario
- Rules of custom hooks
- Why can't hooks be used in conditions
- Why we can't use the hooks inside an if case?

- useState
- useState() → State handling

- useEffect
- useEffect() → Side effects handling
- Difference between useEffect and useLayoutEffect

- useRef
- useRef() → Reference handling
- Advantages of useRef
- Changing value in useRef
- useRef vs regular variable to hold value
- forwardRef

- useReducer
- useReducer() → Alternative to useState()
- useState replace useReducer
- UseState vs useReducer

- useContext
- useContext() → Global state sharing
- Context and context workflow
- useContext and context API

- useMemo
- useMemo() → Optimization
- useMemo vs React.memo
- useMemo dependency list

- useCallback
- useCallback() → Performance tuning
- Purpose of useCallback, useMemo, React.memo
- Limitations of useMemo & useCallback

- useLocation
- useHistory vs useNavigate

- useFormState

- useSelector
- useDispatch
- useSelector and useDispatch hooks

- useTransition

- useValue

- Suspense

- Use hook


- How do you unmount a functional component?
- What is the purpose of the callback function in setState?
- State variable vs normal variables?
- useEffect dep arrays
- What can be a key?
- Which lifecycle hooks are replaced by useEffect in functional components?
- Component will unmount using useEffect

***

## **React Performance & Optimization**
- Learn React optimisation techniques
- How to improve the performance of React application

- useMemo
- React.memo
- useMemo vs React.memo
- Purpose of useCallback, useMemo, React.memo
- Drawbacks of useMemo & React.memo
- Limitations of useMemo & useCallback

- Code splitting
- Lazy loading

- Optimization techniques for Redux app
- Common performance optimizations for Redux applications

- Optimistic updates
- Memoization (not clear)
- React profiler
- Automatic batching
- Batching in React
- React concurrent mode

***

## **React Components & Props**
- Create nested dropdown and map the array of object

- Child to parent communication
- Send data from child to parent using callback functions
- Send data from child to parent using useRef
- Send data from child to parent component using Redux
- Send data from child to parent using context

- Siblings communication using useContext

- Parent to child communication
- PropTypes
- PropTypes in React: How to validate props?
- Props.children

- Prop lifting
- Lifting state up (poor understanding)
- Link props
- Key prop
- Render props

- Why shouldn't array index be used as key prop?
- Communication use useRef

***

## **React Router**
- Learn the concept of React router

- Types of routers
- Hash routers
- Hash router & memory router
- Protected routes

- Routing and navigation 
- Dynamic routing
- Nested routing

- Outlet
- Outlet vs portal

- useHistory vs useNavigate
- useLocation
- Reading query params and path params
- How to handle query/params in react router

***

## **Custom Hooks**
- Custom hook
- Function vs custom hook
- Create a custom hook
- Create a custom hook for increment/decrement counter

- Custom higher order components(HOC)

***

## **HTTP & API**
- REST API
- HTTP 200 vs 201,204
- HTTP 403, 401, 400, Common HTTP status codes
- Use proper endpoint naming, methods and status codes (refer OpenAPI)

- CORS
- What is CORS?

- Implement the search using API with debouncing
- Implement pagination

***

## **Axios**
- Axios vs fetch
- Axios interceptors
- Purpose of Axios Interceptors?
- Axios canceltoken
- Axios interceptors and cancel tokens
- Axios interceptor and insurances
- Refer axios instances and interceptors

***

## **Authentication & Authorization**
- Authentication and authorization
- Authorization
- middlewares in Redux
- Manage sessions and cookies
- Need of specifying bearer in token

***

## **Storage (localStorage, sessionStorage, cookies)**
- Local vs session storage
- Disadvantages of localStorage
- Token storage
- httpOnly cookies


