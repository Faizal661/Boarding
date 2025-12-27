Journaling is a write-ahead logging process that ensures the database can recover your data 
in the event of a crash, hard reboot, or power failure.

It acts as a "safety net" between the data held in volatile RAM and the permanent data files stored on your disk.


1. How Journaling Works
    MongoDB uses the WiredTiger storage engine, which handles journaling through the following cycle:

    Memory First: 
        When a write operation occurs, MongoDB updates the data in the private view (RAM buffer).

    Write to Journal: 
        Before the data is "flushed" to the main data files, the operation is recorded in the Journal on disk. These are small, sequential, and very fast writes.

    Checkpoint: 
        Every 60 seconds (by default), MongoDB performs a "checkpoint," where it flushes all the gathered changes from RAM into the actual permanent data files.

    Cleanup: 
        Once the data is safely in the data files, the journal entries for those operations are cleared.


2. Recovery After a Crash
    If the server loses power between checkpoints (e.g., at the 30-second mark), the data in RAM is lost. However:

    When MongoDB restarts, it looks at the Journal.

    It sees all the writes that happened after the last successful checkpoint.

    It "replays" those operations into the data files, ensuring no data loss occurred.