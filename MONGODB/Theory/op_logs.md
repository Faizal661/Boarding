Oplog (Operations Log) is a special capped collection that keeps a rolling record of all data-modifying operations. 
It is the "engine" that powers replication and high availability.

If you have a Replica Set, the Oplog is what keeps the Secondaries in sync with the Primary.


1. How the Oplog Works
    Capture: 
        When the Primary node receives a write command (insert, update, or delete), 
        it applies the change to its data and simultaneously records the operation in its Oplog (local.oplog.rs).

    Replication: 
        Secondary nodes constantly poll the Primary's Oplog.

    Application: 
        The Secondaries copy these entries and apply them to their own datasets to stay identical to the Primary.



2. Key Characteristics
    Capped Collection: 
        The Oplog has a fixed size. Once it reaches its limit, it behaves like a "circular buffer"—the oldest entries are overwritten by the newest ones.

    Idempotency: 
        Oplog entries are designed so that applying them multiple times results in the same state. 
        For example, an $inc: 1 command is converted into a specific $set: 5 in the Oplog. This ensures consistency even if a Secondary re-processes a log entry.

    Local Database: 
        The Oplog is stored in the local database, meaning its content is not replicated itself; 
        every node has its own unique Oplog representing its history.