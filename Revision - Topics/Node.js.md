**1. Node.js Built-in Modules**  
- Theory:
  - Core modules (os, fs, path, crypto)
  - CommonJS vs ES Modules
  - require vs import
  - package.json vs package-lock.json
  - npm vs npx
  - Global & Local Dependencies
  - devDependencies vs production dependencies
  - Environment Variables (.env)
  - Process (process.env, process.exit, process.nextTick)
  - os.arch(), CPU info
- Practical:
  - Reading & writing files (fs.readFile, fs.writeFile)
  - File system operations (fs.stat, fs.rename)
  - How to check existence of a file
  - How to write a text to file
  - Write current date & time to file
  - File upload
  - Implement readStream
  - Write hashed data to a file using fs module

***

**2. Middlewares**  
- Theory:
  - Type of middleware
  - Application-level middleware
  - Router-level middleware
  - Error-handling middleware
  - Custom middleware
  - Third-party middlewares
  - Built-in Middleware
  - Middleware use-cases
  - Middleware positioning
  - Auth middleware
  - Problem of using too many middleware
- Practical:
  - Middleware to block all POST requests
  - Middleware to cache incoming request URL
  - How to setup router-level middleware

***

**3. Streams & Buffers**  
- Theory:
  - Types of Stream (Readable, Writable, Duplex, Transform)
  - Streams vs Buffers
  - Transform Stream
  - Duplex Stream
  - Buffer class
  - Pipe
  - Streams and buffers in Node.js
- Practical:
  - Create stream and read file
  - Implement readStream
  - Transfer data between files using pipe

***

**4. Event Loop, Concurrency, and Threads**  
- Theory:
  - Event Loop phases
  - Microtasks vs Macrotasks
  - process.nextTick vs setImmediate
  - Thread Pool & libuv
  - How Node.js handles concurrency
  - Concurrency vs parallelism
  - Worker threads: benefits and use cases
  - Clustering in Node.js
  - Process vs Threads
- Practical:
  - Creating worker threads
  - Implementation of child_process (fork, spawn)
  - Handle sessions properly
  - Implement form validation

***

**5. HTTP, Networking, Express**  
- Theory:
  - HTTP module (http.createServer)
  - Express.js basics, express.Router
  - Routing & middleware
  - Static files
  - Dynamic routing
  - Router chaining
  - HTTP methods (GET, POST, PUT, PATCH, DELETE, OPTIONS)
  - Path vs query parameters
  - Common status codes, error first callback
  - Setting headers (setHeader, writeHead)
  - Request-Response Cycle
  - Stateless protocol (local storage, sessions, cookies)
  - HTTP/2, TCP & IP
  - CORS, Preflight Requests
  - Session vs Cookies
  - JWT (JSON Web Tokens)
  - CSRF Protection
- Practical:
  - Add protected routes
  - Rate limiting
  - Fetch an API from Node.js
  - How to pass data in GET method
  - API endpoint to divide numbers

***

**6. Authentication & Security**  
- Theory:
  - Authentication vs Authorization
  - JWT structure & usage
  - Session management & cookies
  - HTTP-only Cookies
  - Flags in Cookies
  - CORS and CSRF (Cross-Origin and Cross-Site Request Forgery)
  - Passport Authentication
  - Secure headers
- Practical:
  - Handling multi-user login
  - Role-based access control

***

**7. Database & ORM**  
- Theory:
  - Working with SQL & NoSQL databases
  - Using ORMs (Sequelize, Mongoose)
  - Database Connections & Queries

***

**8. Performance & Debugging**  
- Theory:
  - Profiling, logging, monitoring
  - Error handling best practices
  - Exception handling (try/catch, promises)
  - Using clusters for scalability

***

**9. Advanced & Miscellaneous**  
- Theory:
  - MVC Architecture
  - REPL (Read-Eval-Print Loop)
  - Design patterns
  - View engines & server-side rendering (EJS, Partials)
  - REST principles & API versioning
  - WebSockets & Real-time communication
  - Deploying Node.js applications
  - Load balancing & reverse proxy
- Practical:
  - Render dynamic elements
  - Implement dynamic routing
  - Explore route chaining
  - Configure static files

***


**10. Others**
- HTTP header  
- Cookie header  
- Cache header  
- HTTP request structure  
- User agent  
- Content negotiation  
- Same origin policy  
- Idempotent (is GET idempotent?)  
- Disadvantages of cookies  
- SQL injection  
- helmet  

- res.write, res.send, res.end  
- app.use, app.set, app.all, app.locals  
- express.json vs urlencoded  
- nvm  
- url module  
- zlib module  
- fs.readdir  

- poll phase in event loop  
- setTimeout 0 ms vs setImmediate  
- Promisify  
- reactor pattern  
- Event-driven architecture  
- Event emitter  
- Event listener  

- Piping vs chaining in streams  
- child_process.fork() vs cluster.fork()  
- Exit codes  
