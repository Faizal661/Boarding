A RESTful API, also known as a REST API, is an application programming interface (API) that adheres to the architectural style of Representational State Transfer (REST). REST is a set of guidelines and constraints for building distributed systems, particularly web services, that emphasize simplicity, scalability, and statelessness. [1, 2]  
Key principles and characteristics of RESTful APIs: 

• Client-Server Architecture: The client (e.g., a web browser or mobile app) and the server (where the data and services reside) are separated, allowing them to evolve independently. 
• Statelessness: Each request from a client to a server contains all the necessary information for the server to understand and process the request. The server does not store any client-specific context between requests. 
• Cacheability: Responses from the server can be designated as cacheable or non-cacheable, allowing clients and intermediaries to store and reuse data, improving performance. 
• Uniform Interface: A consistent and standardized way of interacting with resources, typically using standard HTTP methods (GET, POST, PUT, DELETE) and resource identifiers (URLs). 
• Layered System: The architecture can be composed of multiple layers (e.g., proxies, load balancers), each with its own responsibilities, without affecting the client-server interaction. 
• Code on Demand (Optional): Servers can temporarily extend or customize client functionality by transferring executable code (e.g., JavaScript). 

How they work: 
RESTful APIs use HTTP requests to perform operations on resources. Each resource is identified by a unique URL. Clients send requests to these URLs using HTTP methods to: 

• GET: Retrieve data from a resource. 
• POST: Create a new resource. 
• PUT: Update an existing resource. 
• DELETE: Remove a resource. 

The server then responds with a representation of the resource, often in formats like JSON or XML, along with status codes indicating the success or failure of the operation. 



[1] https://www.redhat.com/en/topics/api/what-is-a-rest-api[2] https://www.ibm.com/think/topics/rest-apis
