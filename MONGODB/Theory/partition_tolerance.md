Partition Tolerance (P) is the ability of a database to keep functioning even when the 
network connecting its nodes breaks (a "network partition").

In MongoDB, Partition Tolerance is not optional; 
it is a built-in requirement for any replica set or sharded cluster.



1. How mongodb handles a partition

When a network failure occurs and nodes can no longer talk to each other, 
the cluster splits into "islands." MongoDB handles this using a Majority Rule.

- The Majority Side: 
    If a group of nodes can still see more than 50% of the total configured nodes, they stay functional. 
    If the original Primary is in this group, it stays the Primary. If not, they elect a new one.

- The Minority Side: 
    If a group of nodes has 50% or fewer of the total nodes, they become read-only. 
    If the Primary was in this group, it must step down and become a Secondary.


2. Why it chooses Consistency over Availability (CP)

MongoDB prioritizes Consistency during a partition to prevent "Split Brain" 
(where two different nodes think they are the Primary and accept different data).

- Writes: 
    If a partition is so bad that no group can form a majority, the cluster will stop accepting writes entirely. 
    It sacrifices Availability to ensure data remains consistent.

- Reads: 
    You can still read from the minority side if your readPreference is set to secondary, 
    but you risk reading "stale" (old) data.


3. summary:
    - Partition Tolerance means MongoDB won't crash just because a wire is cut; it will reorganize itself.
    - It uses Elections and Heartbeats to detect these partitions.
    - It guarantees that even if the network is broken, you will never have two "Primary" nodes writing different data at the same time.