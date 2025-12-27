- Read Concern and Write Concern are configurations that control the consistency and durability of your data.
- They determine how many members of a Replica Set must acknowledge a operation before it is considered successful.


1. Write Concern
        Write Concern describes the level of acknowledgement requested from MongoDB for write operations. 
        It ensures that your data is safely stored on a certain number of nodes before the application continues.

        The syntax is usually represented as { w: <value>, j: <boolean>, wtimeout: <number> }.

    Common Levels:
        w: 1 (Default): The write is acknowledged once the Primary node has applied the operation. This is fast but risky; if the Primary crashes before replicating to Secondaries, data could be lost.

        w: 0: Unacknowledged. The application doesn't wait for any response. High performance, but no guarantee the write succeeded.

        w: "majority": The write is acknowledged only after a calculated majority of nodes (e.g., 2 out of 3) have recorded the write in their on-disk journals. This is the gold standard for data durability.
        
    Additional Options:
        j: true (Journal): Ensures the write is flushed to the disk journal. Without this, 
        a crash could lose data still in the memory buffer.

        wtimeout: Prevents the write from blocking indefinitely if the required number of nodes aren't available.

2. Read Concern
        Read Concern controls what data is returned to the client. It helps you decide between "fresher" data (which might be rolled back) or "sturdier" data (which is guaranteed to stay).
    
    Common Levels:
        "local" (Default): Returns the most recent data available on the node you are querying. 
        It does not guarantee that the data has been replicated to other nodes.

        "majority": Only returns data that has been acknowledged by a majority of the replica set. 
        This prevents "Dirty Reads"—you won't see data that might be rolled back if the Primary fails.

        "snapshot": Used with Transactions. 
        It provides a synchronized view of the data across multiple collections as they existed at a single point in time.

        "linearizable": The strongest level. 
        It ensures the read only returns data that was successfully written by a majority before the read started. 
        It is the slowest because it performs a check across all nodes.



Comparison Summary : 

Feature	        Write Concern (w)	                    Read Concern

Focus	        How safe is the data I am sending?	    How reliable is the data I am getting?
Default	        w: 1	                                "local"
Safety Choice	w: "majority"	                        "majority"
Performance	    Lower w = Faster writes.	            Lower concern = Faster reads.