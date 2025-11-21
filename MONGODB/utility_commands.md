
# 📚 MongoDB Command Line Utilities Cheatsheet

MongoDB provides a set of powerful command-line utilities for administration, data migration, backup, and diagnostics. These tools are run directly from your operating system's terminal, outside of the `mongosh` environment.

---

## 1\. Backup and Restore (Data Migration)

These commands handle exporting and importing data, preserving BSON types and indexes for robust backups, or converting data to human-readable formats.

| Command            | Description                                                                                                                                        | Example Use Case                                                        |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| **`mongodump`**    | **Creates a binary dump** of the database content. This is the **recommended** tool for production backups as it preserves BSON types and indexes. | `mongodump --db=production --out=/data/backup`                          |
| **`mongorestore`** | **Restores data** from a BSON dump created by `mongodump`.                                                                                         | `mongorestore --db=staging /data/backup/production`                     |
| **`mongoexport`**  | **Exports data** to human-readable formats like JSON or CSV. Useful for analysis or sharing.                                                       | `mongoexport --db=test --collection=users --jsonArray --out=users.json` |
| **`mongoimport`**  | **Imports data** from JSON, CSV, or TSV files into a MongoDB collection.                                                                           | `mongoimport --db=test --collection=products --file=products.json`      |

---

## 2\. Diagnostics and Statistics

Use these commands to check the health, performance, and current activity of your MongoDB instance in real-time.

| Command         | Description                                                                                                                            | Example Use Case                                                            |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| **`mongostat`** | **Provides a quick, real-time status** of the running MongoDB instance. Shows read/write activity, memory usage, and queued requests.  | Running `mongostat` in a terminal window to monitor server load.            |
| **`mongotop`**  | **Tracks the time** MongoDB spends reading and writing data to specific collections. Useful for identifying high-activity collections. | Running `mongotop` to see which collection is causing the highest disk I/O. |
| **`bsondump`**  | **Converts BSON files** (like those created by `mongodump`) into JSON, making them human-readable for inspection.                      | `bsondump collection_name.bson > readable.json`                             |

---

## 3\. Replication and Sharding

Commands for managing complex distributed database configurations.

| Command         | Description                                                                                                        |
| :-------------- | :----------------------------------------------------------------------------------------------------------------- |
| **`mongos`**    | The **query router** for a sharded cluster. Clients connect here, and it routes queries to the appropriate shards. |
| **`mongoperf`** | A **performance testing tool** used to measure disk I/O performance before deploying a MongoDB instance.           |

---

## 4\. Indispensable Commands (Inside `mongosh`)

While not command-line utilities, these are essential administrative commands run directly within the MongoDB Shell (`mongosh`):

| Command                            | Description                                                                                                |
| :--------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `db.adminCommand({ shutdown: 1 })` | Safely shuts down the running MongoDB server process.                                                      |
| `db.getProfilingLevel()`           | Checks the current database profiling setting (level 0, 1, or 2).                                          |
| `db.setProfilingLevel(2)`          | Sets the database profiling level to **2**, recording all slow queries to the `system.profile` collection. |
| `rs.status()`                      | Checks the current status and health of the replica set members.                                           |
| `sh.status()`                      | Displays the configuration and state of the sharded cluster.                                               |

### 🔑 Note on Authentication

When using external utilities like `mongodump` or `mongoexport`, you will need to provide connection and authentication details:

```bash
# General Authentication Structure
mongodump --host <hostname> --port <port> --username <user> --password <pass> --authenticationDatabase admin
```
