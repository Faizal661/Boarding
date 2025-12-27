The CAP Theorem states that a distributed system can only provide two out of the following three guarantees at the same time:
- Consistency, Availability, and Partition Tolerance.

1. The Three Pillars

Consistency (C): 
    Every read receives the most recent write or an error.
Availability (A): 
    Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
Partition Tolerance (P): 
    The system continues to operate despite an arbitrary number of messages being dropped or delayed by the network between nodes.




In a distributed environment, Partition Tolerance (P) is a requirement (networks will eventually fail). 
Therefore, a system must choose between C and A.

By default, MongoDB is a CP (Consistency + Partition Tolerance) system.