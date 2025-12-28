In Node.js, concurrency and parallelism are achieved using different architectural patterns 
depending on whether a task is 
    1. I/O-bound (waiting) or 
    2. CPU-bound (computing).


1. Achieving Concurrency (I/O-Bound Tasks)
    Node.js is designed for concurrency on a single thread using its Event Loop. 
    This allows the server to manage thousands of simultaneous requests (like database queries or network calls) 
    without waiting for each one to finish before starting the next. 

    - Async/Await and Promises: 
        The primary way to structure concurrent code. 
        While one await pauses a specific function, the Event Loop remains free to handle other events.
    - Non-Blocking I/O: 
        Node.js offloads I/O tasks (file system, networking) to the operating system or its internal libuv thread pool. 
        When the task is done, a callback is added to the queue for the main thread to process.
    - Promise.all(): 
        Used to initiate multiple asynchronous tasks simultaneously. 
        For example, fetching data from three different APIs at once instead of one after another. 

2. Achieving Parallelism (CPU-Bound Tasks)
    Because the main JavaScript thread can only execute one instruction at a time, 
    "true" parallelism (using multiple CPU cores) requires offloading heavy computations from the main thread. 
    
    - Worker Threads: 
        This module allows you to run JavaScript code in separate threads within the same process. 
        These threads share memory via SharedArrayBuffer, making them ideal for heavy computations like image processing or data analysis.
    - Cluster Module: 
        This allows you to fork multiple instances of your Node.js application (child processes). 
        Each process runs on a separate CPU core and can share the same server port, 
        making it highly effective for scaling web servers to utilize all available hardware.
    - Child Processes: 
        Used to run completely separate processes or external programs (like a Python script or a shell command). 
        Each has its own memory and communicates with the parent via Inter-Process Communication (IPC). 



Summary Table: Which Tool to Use?

    Task Type	            Best Tool	                Mechanism
        
    Network Requests	    Promises / Async-Await	    Concurrency (Event Loop)
    Database Queries	    Non-blocking I/O	        Concurrency (Event Loop)
    Heavy Calculations	    Worker Threads	            Parallelism (Multi-threading)
    Scaling a Server	    Cluster Module	            Parallelism (Multi-processing)
    External Scripts	    Child Processes	            Parallelism (Process Isolation)