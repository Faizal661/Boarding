Database Profiler is a built-in tool in MongoDB that collects detailed information about every operation (queries, writes, etc.) 
executed against a specific database. 
Think of it as a "flight recorder" for your database performance.


It allows you to identify 
    slow queries, 
    unindexed searches, 
    and resource-heavy operations that might be dragging down your application's speed.



1. Profiling Levels
    The profiler is turned off by default to save resources. You can enable it using three different levels:
    - 0 (Default),      Off. No profiling data is collected.	                                                    None impact
    - 1	Slow Ops Only.  Collects data for operations that take longer than a specific threshold (default is 100ms).	Low impact
    - 2	All Ops.        Collects data for every single operation performed on the database.	         High impact(Use only for debugging)


2. Enable profiler

    // Enable level 1 profiling for operations slower than 50ms
        db.setProfilingLevel(1, { slowms: 50 });

    // Verify the current status
        db.getProfilingStatus();


3. Where is the data stored?
    - All profiling data is stored in a capped collection named "system.profile"

    - Find the 5 most recent slow operations
        db.system.profile.find().limit(5).sort({ ts: -1 }).pretty();


4. Key Fields in system.profile
    When you inspect the profiler output, these fields are the most important for troubleshooting:

    op: 
        The type of operation (query, insert, update, command).
    ns: 
        The namespace (database and collection) targetted.
    millis: 
        How long the operation took in milliseconds.
    planSummary: 
        Crucial for optimization. It tells you if it used an IXSCAN (Index Scan) or a COLLSCAN (Collection Scan).
    keysExamined / docsExamined: 
        If docsExamined is much higher than the number of documents returned, you likely need a better index.

5. Performance Monitoring Checklist
    Check for COLLSCAN: 
        Look for queries where planSummary says COLLSCAN. These are the "silent killers" of performance.
    Monitor docsExamined: 
        If your query returns 1 document but examined 100,000, your index is inefficient.
    Watch the Lock Time: 
        Look at locks information to see if a query spent too much time waiting for access to the data.



6. Summary Table

    Feature             Detail
        Storage             system.profile (Capped Collection)
        Overhead            Depends on level; Level 2 is not recommended for production.
        Scope               Database-specific (must enable per DB).
        Best Use            Identifying "Slow Queries" in a production-like environment.
