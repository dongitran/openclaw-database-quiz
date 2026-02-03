/** Database Quiz - 50 Questions */
const quizData = [
    {
        id: 1,
        category: "SQL",
        question: "What is the result of SELECT NULL = NULL?",
        options: [
            "TRUE",
            "FALSE",
            "NULL",
            "ERROR"
        ],
        correct: 2,
        explanation: "NULL represents an unknown value. NULL = NULL returns NULL (unknown), not TRUE. To compare NULL, use IS NULL or IS NOT NULL."
    },
    {
        id: 2,
        category: "SQL",
        question: "What is the difference between INNER JOIN and LEFT JOIN?",
        options: [
            "No difference",
            "INNER JOIN returns matching records from both tables, LEFT JOIN returns all from left table + matches from right table",
            "LEFT JOIN is faster than INNER JOIN",
            "INNER JOIN only works with 2 tables"
        ],
        correct: 1,
        explanation: "<strong>INNER JOIN</strong> only returns records that have matches in <em>both tables</em>. <strong>LEFT JOIN</strong> returns <em>all records from the left table</em>, along with matching records from the right table (if no match, values are NULL)."
    },
    {
        id: 3,
        category: "Transaction",
        question: "What is ACID in database transactions?",
        options: [
            "Advanced, Concurrent, Indexed, Distributed",
            "Atomicity, Consistency, Isolation, Durability",
            "Automatic, Consistent, Integrated, Data",
            "Application, Cache, Index, Database"
        ],
        correct: 1,
        explanation: "<strong>ACID</strong> stands for:<br>• <strong>A</strong>tomicity: All or nothing<br>• <strong>C</strong>onsistency: Data is always valid<br>• <strong>I</strong>solation: Transactions are independent<br>• <strong>D</strong>urability: Data is permanently saved"
    },
    {
        id: 4,
        category: "Normalization",
        question: "What does Third Normal Form (3NF) require?",
        options: [
            "Just need a primary key",
            "Satisfies 2NF and has no transitive dependency",
            "All columns must be VARCHAR",
            "No relationships between tables allowed"
        ],
        correct: 1,
        explanation: "<strong>3NF</strong> requires:<br>1. Satisfies 2NF<br>2. No <strong>transitive dependency</strong> - meaning non-key columns must not depend on each other, only directly on the primary key."
    },
    {
        id: 5,
        category: "Indexing",
        question: "What is an index used for in a database?",
        options: [
            "Temporary data storage",
            "Speed up SELECT queries",
            "Reduce database size",
            "Encrypt data"
        ],
        correct: 1,
        explanation: "<strong>Index</strong> helps speed up <em>reading data (SELECT)</em> by creating a data structure (usually B-tree) that allows faster searching. However, indexes <em>slow down</em> INSERT, UPDATE, and DELETE operations."
    },
    {
        id: 6,
        category: "SQL",
        question: "Which SQL finds duplicate records in a table?",
        options: [
            "SELECT * FROM table WHERE duplicate = true",
            "SELECT column, COUNT(*) FROM table GROUP BY column HAVING COUNT(*) > 1",
            "SELECT DUPLICATE * FROM table",
            "FIND DUPLICATES IN table"
        ],
        correct: 1,
        explanation: "The statement <code>SELECT column, COUNT(*) FROM table GROUP BY column HAVING COUNT(*) > 1</code> groups identical values and only returns groups with more than 1 record (i.e., duplicates)."
    },
    {
        id: 7,
        category: "NoSQL",
        question: "What type of NoSQL is MongoDB?",
        options: [
            "Key-Value store",
            "Document store",
            "Column-family store",
            "Graph database"
        ],
        correct: 1,
        explanation: "<strong>MongoDB</strong> is a <strong>Document Store</strong> - stores data as JSON/BSON documents. Each document can have a different structure, very flexible compared to SQL."
    },
    {
        id: 8,
        category: "SQL",
        question: "What is the difference between WHERE and HAVING?",
        options: [
            "No difference",
            "WHERE filters before GROUP BY, HAVING filters after GROUP BY",
            "HAVING is faster than WHERE",
            "WHERE is only for numbers, HAVING is for strings"
        ],
        correct: 1,
        explanation: "<strong>WHERE</strong> filters <em>records</em> before grouping (GROUP BY). <strong>HAVING</strong> filters <em>results</em> after grouping, usually used with aggregate functions (COUNT, SUM, AVG...)."
    },
    {
        id: 9,
        category: "Transaction",
        question: "Which isolation level is the highest (safest)?",
        options: [
            "READ UNCOMMITTED",
            "READ COMMITTED",
            "REPEATABLE READ",
            "SERIALIZABLE"
        ],
        correct: 3,
        explanation: "<strong>SERIALIZABLE</strong> is the highest isolation level, ensuring transactions execute as if they were sequential (no phantom reads, non-repeatable reads, or dirty reads). However, it has the lowest performance."
    },
    {
        id: 10,
        category: "SQL",
        question: "How do Primary Key and Unique Key differ?",
        options: [
            "No difference",
            "Primary Key does not allow NULL, Unique Key allows 1 NULL",
            "Unique Key is mandatory, Primary Key is not",
            "Primary Key is only for integers"
        ],
        correct: 1,
        explanation: "<strong>Primary Key</strong>: Does not allow NULL, only one per table, used as the main key.<br><strong>Unique Key</strong>: Allows <em>1 NULL value</em>, a table can have multiple unique keys."
    },
    {
        id: 11,
        category: "SQL",
        question: "How do DELETE and TRUNCATE differ?",
        options: [
            "No difference",
            "DELETE deletes rows one by one and logs, TRUNCATE deletes entire pages and doesn't log",
            "TRUNCATE can use WHERE, DELETE cannot",
            "DELETE is faster than TRUNCATE"
        ],
        correct: 1,
        explanation: "<strong>DELETE</strong>: Deletes row by row, can use WHERE, logs fully, can be rolled back.<br><strong>TRUNCATE</strong>: Deletes all data (no WHERE), less logging, faster, resets auto-increment."
    },
    {
        id: 12,
        category: "NoSQL",
        question: "What type of database is Redis?",
        options: [
            "Document database",
            "Key-Value store",
            "Relational database",
            "Graph database"
        ],
        correct: 1,
        explanation: "<strong>Redis</strong> is a <strong>Key-Value Store</strong> - stores data as key-value pairs in memory. Very fast, commonly used as cache, session store, and rate limiting."
    },
    {
        id: 13,
        category: "SQL",
        question: "Which statement gets the first 5 records in MySQL?",
        options: [
            "SELECT TOP 5 * FROM table",
            "SELECT FIRST 5 * FROM table",
            "SELECT * FROM table LIMIT 5",
            "SELECT * FROM table FETCH 5"
        ],
        correct: 2,
        explanation: "In <strong>MySQL</strong>, use <code>LIMIT 5</code>. In SQL Server use <code>TOP 5</code>, in Oracle use <code>FETCH FIRST 5 ROWS ONLY</code>."
    },
    {
        id: 14,
        category: "Indexing",
        question: "When does a Composite Index (Multi-column index) work best?",
        options: [
            "When query only uses the last column of the index",
            "When query uses columns from left to right in index order",
            "When query uses OR instead of AND",
            "When table has fewer than 100 rows"
        ],
        correct: 1,
        explanation: "<strong>Composite Index</strong> (A, B, C) works best when queries use columns from <em>left to right</em>: A, or A+B, or A+B+C. Cannot be used if only querying B or C."
    },
    {
        id: 15,
        category: "Normalization",
        question: "What is Denormalization and when should it be used?",
        options: [
            "Delete database - never use",
            "Intentionally add redundant data to speed up reads",
            "Create index for all columns",
            "Convert from SQL to NoSQL"
        ],
        correct: 1,
        explanation: "<strong>Denormalization</strong> is intentionally adding redundant data (violating normal forms) to <em>reduce the number of JOINs</em> and speed up reads. Often used for read-heavy systems like data warehouses."
    },
    {
        id: 16,
        category: "SQL",
        question: "How do UNION and UNION ALL differ?",
        options: [
            "No difference",
            "UNION removes duplicates, UNION ALL keeps all",
            "UNION ALL only works for 2 tables",
            "UNION is faster than UNION ALL"
        ],
        correct: 1,
        explanation: "<strong>UNION</strong>: Combines results and <em>removes duplicate records</em> (slower).<br><strong>UNION ALL</strong>: Combines and <em>keeps all</em> records (faster)."
    },
    {
        id: 17,
        category: "SQL",
        question: "Which statement finds the 2nd highest value in the salary column?",
        options: [
            "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)",
            "SELECT SECOND_MAX(salary) FROM employees",
            "SELECT TOP 2 salary FROM employees ORDER BY salary DESC",
            "SELECT MAX(salary) - 1 FROM employees"
        ],
        correct: 0,
        explanation: "Common approach: <code>SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)</code>. Can also use window functions like ROW_NUMBER() in modern SQL."
    },
    {
        id: 18,
        category: "Database Design",
        question: "What is a Foreign Key used for?",
        options: [
            "Creates automatic index",
            "Ensures referential integrity between tables",
            "Speeds up queries",
            "Encrypts data"
        ],
        correct: 1,
        explanation: "<strong>Foreign Key</strong> ensures <strong>referential integrity</strong> - prevents creating records that reference non-existent data, and can configure actions when original data is deleted (CASCADE, SET NULL...)."
    },
    {
        id: 19,
        category: "NoSQL",
        question: "What are the strengths of NoSQL compared to SQL?",
        options: [
            "Always faster than SQL in all cases",
            "Easy to scale horizontally, flexible schema, good for unstructured data",
            "Better ACID transaction support",
            "Standardized query language"
        ],
        correct: 1,
        explanation: "<strong>NoSQL</strong> strengths:<br>• <strong>Horizontal scaling</strong> (easy distribution)<br>• <strong>Flexible schema</strong> (no predefined structure needed)<br>• Good for <strong>unstructured/semi-structured data</strong>"
    },
    {
        id: 20,
        category: "SQL",
        question: "Which is usually more efficient, Subquery or JOIN?",
        options: [
            "Subquery is always faster",
            "JOIN is usually more efficient because the database engine optimizes better",
            "No difference",
            "Cannot be compared"
        ],
        correct: 1,
        explanation: "<strong>JOIN</strong> is usually more efficient because the database engine can optimize the execution plan better. However, depending on the case, subqueries may be more readable and with modern optimizers, the difference is not significant."
    },
    {
        id: 21,
        category: "Transaction",
        question: "What is a Deadlock in a database?",
        options: [
            "Database crashes",
            "Two transactions waiting for each other to release locks",
            "Query takes too long",
            "Index is corrupted"
        ],
        correct: 1,
        explanation: "<strong>Deadlock</strong> occurs when Transaction A locks resource X and waits for resource Y, while Transaction B locks resource Y and waits for resource X. Both wait for each other forever. The database usually automatically detects and kills one transaction."
    },
    {
        id: 22,
        category: "SQL",
        question: "What is the COALESCE() function used for?",
        options: [
            "Combine multiple tables",
            "Returns the first non-NULL value in the list",
            "Sum of columns",
            "Compress data"
        ],
        correct: 1,
        explanation: "<strong>COALESCE(value1, value2, ...)</strong> returns the <em>first non-NULL value</em>. Often used to replace NULL with a default value: <code>COALESCE(phone, 'N/A')</code>"
    },
    {
        id: 23,
        category: "Indexing",
        question: "What is a Covering Index?",
        options: [
            "Index covering the entire database",
            "Index containing all columns needed for the query (no lookup to original table)",
            "Index for all tables",
            "Backup of index"
        ],
        correct: 1,
        explanation: "<strong>Covering Index</strong> is an index containing <em>all columns</em> needed for a query (in both WHERE and SELECT). The query only needs to read the index, no need to access the original table → very fast."
    },
    {
        id: 24,
        category: "SQL",
        question: "What is the ROW_NUMBER() window function used for?",
        options: [
            "Count total rows in table",
            "Assign unique sequential numbers to rows in a partition",
            "Calculate average",
            "Create primary key"
        ],
        correct: 1,
        explanation: "<strong>ROW_NUMBER()</strong> assigns unique sequential numbers (1, 2, 3...) to each row in a <em>partition</em>. Example: <code>ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)</code>"
    },
    {
        id: 25,
        category: "Database Design",
        question: "What is a Surrogate Key?",
        options: [
            "User's official key",
            "Auto-generated key with no business meaning (like AUTO_INCREMENT)",
            "Key for encrypting data",
            "Foreign Key"
        ],
        correct: 1,
        explanation: "<strong>Surrogate Key</strong> is an <em>auto-generated</em> key (ID, UUID...) with no business meaning, used only for unique identification. Opposite of <strong>Natural Key</strong> (like SSN, email) which has real-world meaning."
    },
    {
        id: 26,
        category: "SQL",
        question: "What is the difference between VARCHAR and CHAR?",
        options: [
            "No difference",
            "CHAR has fixed length, VARCHAR varies with data",
            "VARCHAR is faster than CHAR",
            "CHAR is only for special characters"
        ],
        correct: 1,
        explanation: "<strong>CHAR(n)</strong>: Fixed n characters, padded with spaces if shorter.<br><strong>VARCHAR(n)</strong>: Variable, only stores needed characters + 1-2 bytes for length. VARCHAR saves more space."
    },
    {
        id: 27,
        category: "Transaction",
        question: "How do Optimistic Locking and Pessimistic Locking differ?",
        options: [
            "No difference",
            "Optimistic: Check conflict when updating, Pessimistic: Lock when reading",
            "Optimistic is only for NoSQL",
            "Pessimistic is faster than Optimistic"
        ],
        correct: 1,
        explanation: "<strong>Optimistic</strong>: No locking, checks version/timestamp when updating. Good for read-heavy.<br><strong>Pessimistic</strong>: Locks immediately when reading. Good for write-heavy, avoids conflicts."
    },
    {
        id: 28,
        category: "SQL",
        question: "Which keyword starts a CTE (Common Table Expression)?",
        options: [
            "WITH",
            "USING",
            "AS",
            "TEMP"
        ],
        correct: 0,
        explanation: "<strong>CTE</strong> starts with <code>WITH</code>:<br><code>WITH cte_name AS (SELECT ...) SELECT * FROM cte_name</code>. Helps write complex queries more readably."
    },
    {
        id: 29,
        category: "NoSQL",
        question: "What does the CAP Theorem state?",
        options: [
            "How to optimize queries",
            "Can only guarantee 2/3: Consistency, Availability, Partition tolerance",
            "How to design indexes",
            "Types of joins in NoSQL"
        ],
        correct: 1,
        explanation: "<strong>CAP Theorem</strong>: In distributed systems, you can only guarantee at most <strong>2/3</strong> properties:<br>• <strong>C</strong>onsistency<br>• <strong>A</strong>vailability<br>• <strong>P</strong>artition tolerance (required in distributed systems)"
    },
    {
        id: 30,
        category: "SQL",
        question: "What is the difference between COUNT(*) and COUNT(column)?",
        options: [
            "No difference",
            "COUNT(*) counts all, COUNT(column) skips NULL",
            "COUNT(column) is faster",
            "COUNT(*) only counts unique values"
        ],
        correct: 1,
        explanation: "<strong>COUNT(*)</strong>: Counts <em>all</em> records (including NULL).<br><strong>COUNT(column)</strong>: Only counts <em>non-NULL</em> values in that column."
    },
    {
        id: 31,
        category: "Indexing",
        question: "What is a Clustered Index?",
        options: [
            "Index for multiple columns",
            "Index that determines the physical order of data in the table",
            "Backup index",
            "Index across multiple tables"
        ],
        correct: 1,
        explanation: "<strong>Clustered Index</strong> determines the <em>physical storage order</em> of data in the table. A table can only have 1 clustered index (usually the primary key). Non-clustered indexes point to the clustered index."
    },
    {
        id: 32,
        category: "SQL",
        question: "When to use EXISTS instead of IN?",
        options: [
            "Always use EXISTS",
            "When subquery returns many rows, EXISTS is usually more efficient",
            "When comparing numbers",
            "When using with NULL"
        ],
        correct: 1,
        explanation: "<strong>EXISTS</strong> is usually more efficient than <strong>IN</strong> when the subquery is large because EXISTS stops immediately when it finds the first match, while IN needs to materialize the entire subquery."
    },
    {
        id: 33,
        category: "Database Design",
        question: "What is an Entity-Relationship Diagram (ERD) used for?",
        options: [
            "Write SQL code",
            "Model database structure and relationships between entities",
            "Optimize performance",
            "Create backup"
        ],
        correct: 1,
        explanation: "<strong>ERD</strong> is used to <em>design and visualize</em> database structure, showing <strong>entities</strong> (tables), <strong>attributes</strong> (columns), and <strong>relationships</strong> between them."
    },
    {
        id: 34,
        category: "SQL",
        question: "What is a Self Join?",
        options: [
            "Join with the same table",
            "Automatic join",
            "Join without conditions",
            "Join between 2 databases"
        ],
        correct: 0,
        explanation: "<strong>Self Join</strong> is joining a table with <em>itself</em>. Use aliases to distinguish: <code>SELECT a.name, b.name FROM employees a JOIN employees b ON a.manager_id = b.id</code>"
    },
    {
        id: 35,
        category: "NoSQL",
        question: "What type of database is Neo4j?",
        options: [
            "Document database",
            "Graph database",
            "Key-value store",
            "Column-family store"
        ],
        correct: 1,
        explanation: "<strong>Neo4j</strong> is a <strong>Graph Database</strong> - optimized for data with many <em>complex relationships</em> (nodes and edges). Great for social networks, recommendation engines."
    },
    {
        id: 36,
        category: "SQL",
        question: "Which statement creates a table copy (structure only, no data)?",
        options: [
            "CLONE TABLE",
            "CREATE TABLE new_table LIKE old_table",
            "COPY TABLE",
            "DUPLICATE TABLE"
        ],
        correct: 1,
        explanation: "In MySQL: <code>CREATE TABLE new_table LIKE old_table</code> creates a new table with the same structure (no data). Or: <code>CREATE TABLE new_table AS SELECT * FROM old_table WHERE 1=0</code>"
    },
    {
        id: 37,
        category: "Transaction",
        question: "What is Two-Phase Commit (2PC) used for?",
        options: [
            "Optimize query",
            "Ensure atomicity for distributed transactions",
            "Create index faster",
            "Backup database"
        ],
        correct: 1,
        explanation: "<strong>Two-Phase Commit</strong> is a protocol that ensures <strong>atomicity</strong> for transactions spanning multiple databases/nodes: Phase 1 (prepare) and Phase 2 (commit/rollback)."
    },
    {
        id: 38,
        category: "SQL",
        question: "What is the CASE expression used for?",
        options: [
            "Create new table",
            "Conditional logic in SQL (IF-THEN-ELSE)",
            "Create index",
            "Connect database"
        ],
        correct: 1,
        explanation: "<strong>CASE</strong> is a conditional statement in SQL:<br><code>CASE WHEN condition THEN result ELSE other END</code>. Similar to IF-ELSE in programming languages."
    },
    {
        id: 39,
        category: "Indexing",
        question: "How does Index Fragmentation affect performance?",
        options: [
            "No effect",
            "Slows down queries because index data is not contiguous",
            "Speeds up writes",
            "Reduces database size"
        ],
        correct: 1,
        explanation: "<strong>Index Fragmentation</strong> occurs when index data becomes fragmented (due to many INSERT/DELETE operations). Increases I/O because data is not contiguous, need to <strong>REBUILD</strong> or <strong>REORGANIZE</strong> index to optimize."
    },
    {
        id: 40,
        category: "SQL",
        question: "Which statement deletes all data in a table but keeps the structure?",
        options: [
            "DROP TABLE",
            "DELETE FROM table (no WHERE)",
            "TRUNCATE TABLE",
            "Both B and C"
        ],
        correct: 3,
        explanation: "Both <strong>DELETE FROM table</strong> (no WHERE) and <strong>TRUNCATE TABLE</strong> delete data but keep the structure. TRUNCATE is faster, doesn't log row by row, resets auto-increment."
    },
    {
        id: 41,
        category: "Database Design",
        question: "How is a One-to-Many relationship represented?",
        options: [
            "Create intermediate table",
            "Foreign key on the 'many' side pointing to the 'one' side",
            "Merge into 1 table",
            "Use array"
        ],
        correct: 1,
        explanation: "<strong>One-to-Many</strong>: Place <strong>foreign key</strong> on the 'many' side (the many side) pointing to the primary key of the 'one' side (the one side). Example: 1 Department has many Employees."
    },
    {
        id: 42,
        category: "SQL",
        question: "How do RANK() and DENSE_RANK() differ?",
        options: [
            "No difference",
            "RANK() skips ranks after tie, DENSE_RANK() doesn't skip",
            "DENSE_RANK() is only for integers",
            "RANK() is faster"
        ],
        correct: 1,
        explanation: "With data [100, 100, 90]:<br>• <strong>RANK()</strong>: 1, 1, 3 (skips 2)<br>• <strong>DENSE_RANK()</strong>: 1, 1, 2 (doesn't skip)"
    },
    {
        id: 43,
        category: "NoSQL",
        question: "What type of database is Cassandra?",
        options: [
            "Document store",
            "Wide-column store (Column-family)",
            "Graph database",
            "Key-value store"
        ],
        correct: 1,
        explanation: "<strong>Cassandra</strong> is a <strong>Wide-Column Store</strong> (Column-Family). Each row can have different numbers of columns. Good for write-heavy, time-series data."
    },
    {
        id: 44,
        category: "SQL",
        question: "Which query finds employees with salary higher than average?",
        options: [
            "SELECT * FROM employees WHERE salary > AVG(salary)",
            "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees)",
            "SELECT * FROM employees HAVING salary > AVG(salary)",
            "SELECT * FROM employees WHERE salary > AVERAGE"
        ],
        correct: 1,
        explanation: "Need to use <strong>subquery</strong>: <code>SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees)</code>. Cannot use aggregate function directly in WHERE."
    },
    {
        id: 45,
        category: "Transaction",
        question: "What problem does Snapshot Isolation solve?",
        options: [
            "Deadlock",
            "Non-repeatable reads and Phantom reads",
            "Disk full",
            "Network latency"
        ],
        correct: 1,
        explanation: "<strong>Snapshot Isolation</strong> ensures a transaction sees a <em>snapshot</em> of the database at the start of the transaction, preventing <strong>non-repeatable reads</strong> and <strong>phantom reads</strong>."
    },
    {
        id: 46,
        category: "SQL",
        question: "What is the difference between VIEW and MATERIALIZED VIEW?",
        options: [
            "No difference",
            "VIEW is virtual, MATERIALIZED VIEW stores physical results",
            "MATERIALIZED VIEW is faster than VIEW",
            "Both B and C"
        ],
        correct: 3,
        explanation: "<strong>VIEW</strong>: Virtual table, re-queries each time called.<br><strong>MATERIALIZED VIEW</strong>: Stores physical results, needs refresh. Faster for complex queries but data may be stale."
    },
    {
        id: 47,
        category: "Database Design",
        question: "Why should SELECT * not be used in production?",
        options: [
            "Longer to write",
            "Fetches unnecessary columns, increases network traffic, breaks easily when schema changes",
            "Cannot be used with JOIN",
            "Slower when there is index"
        ],
        correct: 1,
        explanation: "<strong>SELECT *</strong> should be avoided because:<br>• Fetches unnecessary columns → increases I/O and network<br>• Breaks easily when columns are added/removed<br>• Cannot use covering index effectively"
    },
    {
        id: 48,
        category: "SQL",
        question: "What is the PIVOT operation used for?",
        options: [
            "Rotate table from row-based to column-based",
            "Create index",
            "Backup database",
            "Connect 2 tables"
        ],
        correct: 0,
        explanation: "<strong>PIVOT</strong> transforms data from <em>row-based</em> to <em>column-based</em>. Example: transform sales data by month (rows) into columns Jan, Feb, Mar..."
    },
    {
        id: 49,
        category: "NoSQL",
        question: "What is Sharding in a database?",
        options: [
            "Create index",
            "Split data into multiple parts stored on different servers",
            "Encrypt data",
            "Backup database"
        ],
        correct: 1,
        explanation: "<strong>Sharding</strong> is a technique to <em>split data</em> (by range, hash, or geo) across multiple servers to <strong>scale horizontally</strong> and distribute load."
    },
    {
        id: 50,
        category: "SQL",
        question: "What is a Query Execution Plan used for?",
        options: [
            "Create new table",
            "Analyze and optimize how the database executes queries",
            "Backup data",
            "Create new user"
        ],
        correct: 1,
        explanation: "<strong>Execution Plan</strong> shows how the database will <em>execute the query</em> (which index to use, join order...). Used to <strong>optimize performance</strong> and debug slow queries."
    },
    {
        id: 51,
        category: "Advanced SQL",
        question: "What does the LAG() window function do?",
        options: [
            "Creates a delay in query execution",
            "Returns the value from the previous row in the partition",
            "Sorts data in descending order",
            "Locks the table for reading"
        ],
        correct: 1,
        explanation: "<strong>LAG()</strong> lets you look at the <em>previous row</em> without joining. Example: Compare today's sales with yesterday's using <code>LAG(sales, 1) OVER (ORDER BY date)</code>."
    },
    {
        id: 52,
        category: "Advanced SQL",
        question: "What does LEAD() function do compared to LAG()?",
        options: [
            "LEAD looks at the next row, LAG looks at the previous row",
            "LEAD is faster than LAG",
            "LEAD works only on numbers, LAG works on all types",
            "No difference between them"
        ],
        correct: 0,
        explanation: "<strong>LEAD()</strong> looks at the <em>next row</em> (forward), while <strong>LAG()</strong> looks at the <em>previous row</em> (backward). Use LEAD to see what happens next, LAG to see what happened before."
    },
    {
        id: 53,
        category: "Advanced SQL",
        question: "What does NTILE(n) do?",
        options: [
            "Divides rows into n equal buckets/groups",
            "Creates n copies of the table",
            "Splits a string into n parts",
            "Allocates n bytes of memory"
        ],
        correct: 0,
        explanation: "<strong>NTILE(4)</strong> splits all rows into <em>4 equal groups</em> (quartiles). Great for finding top 25% performers or creating percentile rankings."
    },
    {
        id: 54,
        category: "Advanced SQL",
        question: "What is a Recursive CTE used for?",
        options: [
            "Repeating the same query multiple times",
            "Querying hierarchical/tree-structured data",
            "Creating infinite loops",
            "Backing up data recursively"
        ],
        correct: 1,
        explanation: "<strong>Recursive CTE</strong> is perfect for <em>hierarchical data</em> like org charts or folder structures. It keeps calling itself until it reaches the end of the tree."
    },
    {
        id: 55,
        category: "Advanced SQL",
        question: "What is a Correlated Subquery?",
        options: [
            "A subquery that depends on the outer query",
            "A subquery that runs faster than the main query",
            "A query that correlates two tables",
            "A backup query for failed main queries"
        ],
        correct: 0,
        explanation: "<strong>Correlated Subquery</strong> runs <em>once for each row</em> in the outer query. It references columns from the outer query, making it slower but powerful for row-by-row comparisons."
    },
    {
        id: 56,
        category: "Advanced SQL",
        question: "What is SQL Injection?",
        options: [
            "Injecting SQL code into a database engine",
            "A security attack where malicious SQL is inserted via user input",
            "Adding SQL functions to a programming language",
            "Optimizing SQL queries with hints"
        ],
        correct: 1,
        explanation: "<strong>SQL Injection</strong> is when attackers sneak <em>malicious SQL</em> through user inputs (like search boxes). Example: entering <code>'; DROP TABLE users; --</code> to delete data. Always use parameterized queries!"
    },
    {
        id: 57,
        category: "Advanced SQL",
        question: "What's the main difference between Stored Procedures and Functions?",
        options: [
            "Functions can return values, stored procedures cannot",
            "Stored procedures can have side effects (INSERT/UPDATE), functions should be pure",
            "Stored procedures are faster",
            "Functions can only do math"
        ],
        correct: 1,
        explanation: "<strong>Stored Procedures</strong> can modify data and don't have to return values. <strong>Functions</strong> should be pure (no side effects) and must return a value. Think: procedures 'do things', functions 'calculate things'."
    },
    {
        id: 58,
        category: "Advanced SQL",
        question: "What is a Database Trigger?",
        options: [
            "A button that starts a query",
            "Code that automatically runs when certain events happen (INSERT/UPDATE/DELETE)",
            "A tool for importing data",
            "A type of database index"
        ],
        correct: 1,
        explanation: "<strong>Triggers</strong> are like <em>automatic reactions</em>. When someone INSERTS a row, the trigger can automatically update an audit log or validate data. They fire without being called directly."
    },
    {
        id: 59,
        category: "Advanced SQL",
        question: "Which is better for preventing SQL Injection: string concatenation or parameterized queries?",
        options: [
            "String concatenation is faster",
            "Parameterized queries - they separate code from data",
            "Both are equally safe",
            "SQL injection cannot be prevented"
        ],
        correct: 1,
        explanation: "<strong>Parameterized queries</strong> treat user input as <em>data only</em>, never as SQL code. String concatenation lets attackers inject commands. Always use parameters: <code>SELECT * FROM users WHERE id = ?</code>"
    },
    {
        id: 60,
        category: "Advanced SQL",
        question: "When should you use a Recursive CTE vs a simple JOIN?",
        options: [
            "Always use Recursive CTE for better performance",
            "Use Recursive CTE for hierarchical/tree data with unknown depth",
            "JOIN is always better",
            "Recursive CTE is only for MySQL"
        ],
        correct: 1,
        explanation: "Use <strong>Recursive CTE</strong> when you don't know how many levels deep the data goes (like an org chart where managers have managers). Regular JOINs need to know the depth in advance."
    },
    {
        id: 61,
        category: "Performance",
        question: "What is Query Plan Analysis used for?",
        options: [
            "Creating database diagrams",
            "Understanding how the database executes your query and finding bottlenecks",
            "Planning database backups",
            "Designing table schemas"
        ],
        correct: 1,
        explanation: "<strong>Query Plan Analysis</strong> shows you the <em>step-by-step</em> of how your query runs. It reveals if the database is doing expensive full table scans instead of using indexes."
    },
    {
        id: 62,
        category: "Performance",
        question: "What is Connection Pooling?",
        options: [
            "A swimming pool for database administrators",
            "Reusing database connections instead of creating new ones each time",
            "Pooling query results in memory",
            "Connecting multiple databases together"
        ],
        correct: 1,
        explanation: "<strong>Connection Pooling</strong> keeps a <em>pool of ready connections</em> open. Instead of the expensive 'handshake' every time, apps grab an existing connection. Like keeping a taxi waiting instead of calling a new one."
    },
    {
        id: 63,
        category: "Performance",
        question: "What are Read Replicas?",
        options: [
            "Copies of data for backup only",
            "Read-only copies of the database to distribute read traffic",
            "Duplicate tables in the same database",
            "Cached query results"
        ],
        correct: 1,
        explanation: "<strong>Read Replicas</strong> are <em>copies</em> of your main database that only handle SELECT queries. They spread read traffic across multiple servers, like having multiple checkout lanes at a store."
    },
    {
        id: 64,
        category: "Performance",
        question: "What is Database Caching?",
        options: [
            "Storing data in hidden folders",
            "Storing frequently accessed data in fast memory (Redis/Memcached) to reduce database load",
            "Compressing database files",
            "Creating database backups"
        ],
        correct: 1,
        explanation: "<strong>Caching</strong> stores popular data in <em>super-fast memory</em> (like Redis). Instead of querying the database every time, apps check the cache first - like keeping frequently used tools on your desk instead of the storage room."
    },
    {
        id: 65,
        category: "Performance",
        question: "What is Table Partitioning?",
        options: [
            "Dividing a table into smaller physical pieces based on a column value",
            "Splitting data across different databases",
            "Creating backup copies of tables",
            "Encrypting table data"
        ],
        correct: 0,
        explanation: "<strong>Partitioning</strong> splits a huge table into <em>smaller chunks</em> (like by date or region). Queries only scan relevant partitions, not the entire table. Like organizing a filing cabinet by year instead of one big pile."
    },
    {
        id: 66,
        category: "Performance",
        question: "Which type of database cache invalidation is safest but slowest?",
        options: [
            "Write-through (update cache and DB together)",
            "Cache-aside (lazy loading)",
            "Write-behind (async updates)",
            "No invalidation"
        ],
        correct: 0,
        explanation: "<strong>Write-through</strong> updates both cache and database together. It's <em>slower</em> because every write does double work, but data is always consistent. Like updating both your notebook and the shared document simultaneously."
    },
    {
        id: 67,
        category: "Performance",
        question: "What is the N+1 Query Problem?",
        options: [
            "Running N queries plus 1 backup query",
            "Running one query to get N items, then N more queries to get related data",
            "A mathematical problem in databases",
            "Adding N+1 indexes to a table"
        ],
        correct: 1,
        explanation: "<strong>N+1 Problem</strong>: You fetch 100 users (1 query), then loop through and fetch each user's orders (100 queries) = 101 total! Fix with <strong>JOIN</strong> or <strong>eager loading</strong>."
    },
    {
        id: 68,
        category: "Performance",
        question: "What is the benefit of Range Partitioning by date?",
        options: [
            "It makes dates look prettier",
            "Old partitions can be archived/deleted without affecting recent data",
            "It automatically sorts data",
            "It encrypts old data"
        ],
        correct: 1,
        explanation: "<strong>Range Partitioning</strong> by date lets you <em>drop old partitions</em> (like data from 2020) instantly without DELETE statements. Queries for recent data only scan recent partitions."
    },
    {
        id: 69,
        category: "Security",
        question: "What is Encryption at Rest?",
        options: [
            "Encrypting data when it's being sent over the network",
            "Encrypting data stored on disk",
            "Encrypting data in RAM",
            "Encrypting backup tapes only"
        ],
        correct: 1,
        explanation: "<strong>Encryption at Rest</strong> scrambles data on the <em>hard drive</em>. If someone steals the physical disk, they can't read it. Different from Encryption in Transit (network)."
    },
    {
        id: 70,
        category: "Security",
        question: "What is Encryption in Transit?",
        options: [
            "Encrypting data on the hard disk",
            "Encrypting data while traveling over the network (TLS/SSL)",
            "Encrypting data in backups",
            "Encrypting data before deletion"
        ],
        correct: 1,
        explanation: "<strong>Encryption in Transit</strong> protects data as it travels between your app and database (like HTTPS). Prevents eavesdroppers from reading data on the wire."
    },
    {
        id: 71,
        category: "Security",
        question: "What is RBAC in database security?",
        options: [
            "Random Based Access Control",
            "Role-Based Access Control - permissions assigned to roles, not individual users",
            "Read-Backup-Access-Create",
            "Row-Based Access Control"
        ],
        correct: 1,
        explanation: "<strong>RBAC</strong> (Role-Based Access Control) gives permissions to <em>roles</em> (like 'analyst', 'admin'), then assigns users to roles. Easier than managing permissions for each person individually."
    },
    {
        id: 72,
        category: "Security",
        question: "How can prepared statements prevent SQL Injection?",
        options: [
            "They make queries run faster",
            "They separate SQL code from user data, treating input as values only",
            "They encrypt the query",
            "They check user passwords"
        ],
        correct: 1,
        explanation: "<strong>Prepared statements</strong> send the SQL <em>structure</em> first, then data separately. The database knows input is <strong>never</strong> code, so malicious input can't execute commands."
    },
    {
        id: 73,
        category: "Security",
        question: "What is Row-Level Security (RLS)?",
        options: [
            "Security that only applies to certain rows in the office",
            "Restricting which rows a user can see based on their permissions",
            "Encrypting individual rows differently",
            "A backup strategy for important rows"
        ],
        correct: 1,
        explanation: "<strong>Row-Level Security</strong> automatically filters rows based on <em>who's asking</em>. A sales rep sees only their customers' data, even though the table contains all customers."
    },
    {
        id: 74,
        category: "Security",
        question: "What is Database Audit Logging?",
        options: [
            "Counting the number of tables",
            "Recording who did what and when in the database",
            "Checking database disk space",
            "Testing database performance"
        ],
        correct: 1,
        explanation: "<strong>Audit Logging</strong> keeps a <em>trail of all actions</em> - who accessed what data, when they did it, and what changed. Essential for compliance (SOX, HIPAA) and detecting breaches."
    },
    {
        id: 75,
        category: "Backup & Recovery",
        question: "What is a Full Backup?",
        options: [
            "Backing up only changed data",
            "A complete copy of all database data",
            "Backing up just the indexes",
            "Backing up user passwords only"
        ],
        correct: 1,
        explanation: "<strong>Full Backup</strong> copies <em>everything</em>. It's the slowest but most complete. Like photocopying an entire book instead of just the changed pages."
    },
    {
        id: 76,
        category: "Backup & Recovery",
        question: "What is a Differential Backup?",
        options: [
            "Backing up data that changed since the LAST full backup",
            "Backing up differences between two databases",
            "Backing up only text columns",
            "A backup that checks for errors"
        ],
        correct: 0,
        explanation: "<strong>Differential Backup</strong> captures only data that changed since the <em>last full backup</em>. Faster than full backup, but grows larger each day until the next full backup."
    },
    {
        id: 77,
        category: "Backup & Recovery",
        question: "What is Transaction Log Backup?",
        options: [
            "Backing up the error log file",
            "Backing up all transactions since the last log backup for point-in-time recovery",
            "Backing up login attempts",
            "Backing up table names only"
        ],
        correct: 1,
        explanation: "<strong>Log Backup</strong> captures every transaction since the last backup. Combined with full backups, it enables <strong>point-in-time recovery</strong> - restore to any second, not just backup times."
    },
    {
        id: 78,
        category: "Backup & Recovery",
        question: "What is Point-in-Time Recovery (PITR)?",
        options: [
            "Recovering data from a specific moment in time",
            "Recovering only the current time's data",
            "Scheduling backups at specific times",
            "Backing up every hour"
        ],
        correct: 0,
        explanation: "<strong>PITR</strong> lets you restore to <em>any exact moment</em> (like '2:34 PM yesterday'). Essential for recovering from mistakes - like if someone accidentally deleted data at 3 PM but you don't discover it until 5 PM."
    },
    {
        id: 79,
        category: "Backup & Recovery",
        question: "In Master-Slave Replication, what can the Slave do?",
        options: [
            "Handle both reads and writes",
            "Handle read queries only (replicates from Master)",
            "Delete data from the Master",
            "Create new tables independently"
        ],
        correct: 1,
        explanation: "<strong>Master-Slave Replication</strong>: Master handles all writes, Slaves copy changes and handle <em>read queries</em>. Spreads read load. If Master dies, you can promote a Slave."
    },
    {
        id: 80,
        category: "Backup & Recovery",
        question: "What is Master-Master Replication?",
        options: [
            "Two databases where both can accept writes",
            "One master controlling two slaves",
            "A master database with double backup",
            "Replication that only works on weekends"
        ],
        correct: 0,
        explanation: "<strong>Master-Master</strong> lets <em>both servers accept writes</em>. Changes sync between them. Good for high availability but complex - conflicts can occur if both edit the same row."
    },
    {
        id: 81,
        category: "Backup & Recovery",
        question: "What is WAL (Write-Ahead Logging)?",
        options: [
            "Logging that happens after writing to disk",
            "Writing changes to a log BEFORE updating actual data files",
            "A type of backup storage",
            "Logging out database users"
        ],
        correct: 1,
        explanation: "<strong>WAL</strong> writes changes to a <em>log file first</em>, then to the actual database. If the system crashes mid-write, the log can replay and complete the operation. Like writing in a draft before finalizing."
    },
    {
        id: 82,
        category: "Cloud Databases",
        question: "What is the main difference between Amazon RDS and Aurora?",
        options: [
            "RDS is free, Aurora is paid",
            "Aurora is AWS-optimized, up to 5x faster than standard MySQL/PostgreSQL on RDS",
            "RDS only supports MySQL",
            "Aurora cannot be used with AWS"
        ],
        correct: 1,
        explanation: "<strong>Amazon Aurora</strong> is AWS's <em>custom-built</em> database engine, compatible with MySQL/PostgreSQL but much faster. <strong>RDS</strong> hosts standard database engines on managed instances."
    },
    {
        id: 83,
        category: "Cloud Databases",
        question: "What type of database is DynamoDB?",
        options: [
            "Relational database",
            "Fully managed NoSQL key-value and document database",
            "Graph database only",
            "In-memory cache only"
        ],
        correct: 1,
        explanation: "<strong>DynamoDB</strong> is AWS's <em>serverless NoSQL</em> database. Scales automatically, super fast (single-digit millisecond latency), and you only pay for what you use."
    },
    {
        id: 84,
        category: "Cloud Databases",
        question: "What is Google BigQuery used for?",
        options: [
            "Running small transactional queries",
            "Analyzing massive datasets (data warehouse) with SQL",
            "Storing user session data",
            "Real-time chat applications"
        ],
        correct: 1,
        explanation: "<strong>BigQuery</strong> is Google's <em>data warehouse</em> for analyzing petabytes of data. Not for fast OLTP (transactions), but amazing for OLAP (analytics) - running reports on huge datasets."
    },
    {
        id: 85,
        category: "Cloud Databases",
        question: "What is a Serverless Database?",
        options: [
            "A database without any servers",
            "Database that automatically scales and you pay per use (no server management)",
            "A database that only runs on weekends",
            "A database with no security"
        ],
        correct: 1,
        explanation: "<strong>Serverless databases</strong> (like DynamoDB, Aurora Serverless) <em>scale automatically</em> based on demand. You don't provision servers or worry about capacity - just pay for actual usage."
    },
    {
        id: 86,
        category: "Cloud Databases",
        question: "What is Multi-Region Database Deployment?",
        options: [
            "Deploying to multiple data centers in the same city",
            "Replicating data across different geographic regions for low latency and disaster recovery",
            "Running multiple database versions",
            "Deploying databases on multiple cloud providers"
        ],
        correct: 1,
        explanation: "<strong>Multi-Region</strong> puts copies of your database in <em>different parts of the world</em>. Users in Asia query the Asia copy for speed. If one region fails, others keep running."
    },
    {
        id: 87,
        category: "Cloud Databases",
        question: "Which AWS database service is best for real-time applications requiring microsecond latency?",
        options: [
            "RDS",
            "ElastiCache (Redis/Memcached)",
            "DynamoDB",
            "Redshift"
        ],
        correct: 1,
        explanation: "<strong>ElastiCache</strong> (managed Redis/Memcached) provides <em>microsecond</em> latency by keeping data in memory. Perfect for caching, session stores, and real-time leaderboards."
    },
    {
        id: 88,
        category: "Data Warehousing",
        question: "What is the main difference between OLAP and OLTP?",
        options: [
            "OLAP is for transactions, OLTP is for analytics",
            "OLTP handles daily transactions, OLAP handles analytical queries on large data",
            "OLAP is faster than OLTP",
            "OLTP is only for NoSQL"
        ],
        correct: 1,
        explanation: "<strong>OLTP</strong> (Online Transaction Processing): Fast inserts/updates for daily operations (shopping cart). <strong>OLAP</strong> (Online Analytical Processing): Complex queries on huge datasets (sales reports)."
    },
    {
        id: 89,
        category: "Data Warehousing",
        question: "What is a Star Schema?",
        options: [
            "A database shaped like a star",
            "One central fact table surrounded by dimension tables",
            "A schema with only 5 tables",
            "A backup strategy"
        ],
        correct: 1,
        explanation: "<strong>Star Schema</strong> has a <em>central fact table</em> (sales, orders) with foreign keys to surrounding <em>dimension tables</em> (customers, products, dates). Looks like a star diagram."
    },
    {
        id: 90,
        category: "Data Warehousing",
        question: "What is a Snowflake Schema?",
        options: [
            "A schema that only works in winter",
            "Star schema with normalized dimension tables (dimensions have sub-dimensions)",
            "A database schema for storing images",
            "A backup of the star schema"
        ],
        correct: 1,
        explanation: "<strong>Snowflake Schema</strong> is like a Star Schema but <em>dimensions are further normalized</em>. A 'Product' dimension might link to 'Category' and 'Brand' tables, creating a snowflake pattern."
    },
    {
        id: 91,
        category: "Data Warehousing",
        question: "What is the difference between ETL and ELT?",
        options: [
            "ETL is faster than ELT",
            "ETL transforms before loading, ELT loads raw data then transforms in the warehouse",
            "ELT is only for small data",
            "They are the same thing"
        ],
        correct: 1,
        explanation: "<strong>ETL</strong>: Extract → Transform → Load (transform on a separate server). <strong>ELT</strong>: Extract → Load → Transform (load raw data, then use warehouse power to transform). Cloud warehouses prefer ELT."
    },
    {
        id: 92,
        category: "Data Warehousing",
        question: "Why do Data Warehouses use Columnar Storage?",
        options: [
            "It looks better in diagrams",
            "Analytical queries read specific columns faster (don't need to load entire rows)",
            "It's required by law",
            "Columnar storage is cheaper"
        ],
        correct: 1,
        explanation: "<strong>Columnar Storage</strong> stores data by <em>columns</em> instead of rows. When analyzing 'sum of sales', it only reads the sales column, not every column of every row. Much faster for analytics!"
    },
    {
        id: 93,
        category: "MongoDB",
        question: "What is the MongoDB Aggregation Pipeline?",
        options: [
            "A physical pipeline for data",
            "A framework for processing data through stages (filter, group, sort) like an assembly line",
            "A backup process",
            "A way to import data"
        ],
        correct: 1,
        explanation: "<strong>Aggregation Pipeline</strong> processes data through <em>stages</em> in sequence: $match (filter) → $group (aggregate) → $sort. Like an assembly line where each stage transforms the data."
    },
    {
        id: 94,
        category: "MongoDB",
        question: "What is MongoDB Sharding?",
        options: [
            "Breaking data into pieces using a shard key to distribute across servers",
            "Encrypting MongoDB data",
            "Creating backup shards",
            "A type of MongoDB index"
        ],
        correct: 0,
        explanation: "<strong>Sharding</strong> splits MongoDB data across <em>multiple servers</em> using a <strong>shard key</strong> (like user_id). Each shard holds a portion, allowing horizontal scaling beyond one server's capacity."
    },
    {
        id: 95,
        category: "MongoDB",
        question: "What is a MongoDB Replica Set?",
        options: [
            "A set of duplicate documents",
            "A group of MongoDB servers maintaining the same data for redundancy and failover",
            "A backup file format",
            "A type of query"
        ],
        correct: 1,
        explanation: "<strong>Replica Set</strong> is <em>3+ MongoDB servers</em> that keep copies of the same data. One Primary handles writes, others replicate. If Primary dies, a Secondary automatically becomes Primary."
    },
    {
        id: 96,
        category: "MongoDB",
        question: "What is a Compound Index in MongoDB?",
        options: [
            "An index on a single field",
            "An index on multiple fields (like {lastName: 1, firstName: 1})",
            "A combination of text and number indexes",
            "An index that expires"
        ],
        correct: 1,
        explanation: "<strong>Compound Index</strong> indexes <em>multiple fields together</em>. Like a phone book sorted by last name, then first name. Queries must use fields from left to right to benefit."
    },
    {
        id: 97,
        category: "MongoDB",
        question: "What is the Schema Design Pattern 'Embedding' in MongoDB?",
        options: [
            "Putting documents inside other documents (denormalization)",
            "Creating database schemas",
            "Encrypting documents",
            "Linking documents with foreign keys"
        ],
        correct: 0,
        explanation: "<strong>Embedding</strong> stores related data <em>inside the same document</em> (like putting all comments inside a blog post document). Fast reads but duplication. Good for 1:few relationships."
    },
    {
        id: 98,
        category: "PostgreSQL",
        question: "What is JSONB in PostgreSQL?",
        options: [
            "Just a string storing JSON text",
            "Binary JSON storage that is parsed, indexable, and queryable",
            "A backup format for JSON",
            "JavaScript for PostgreSQL"
        ],
        correct: 1,
        explanation: "<strong>JSONB</strong> stores JSON in a <em>binary, parsed format</em>. You can index it, query inside it (<code>data->>'name'</code>), and it's faster than storing JSON as text."
    },
    {
        id: 99,
        category: "PostgreSQL",
        question: "How does PostgreSQL handle Array types?",
        options: [
            "PostgreSQL does not support arrays",
            "PostgreSQL supports arrays as a native column type with array operators and indexes",
            "Arrays must be stored as comma-separated strings",
            "Arrays are only for numbers"
        ],
        correct: 1,
        explanation: "<strong>PostgreSQL Arrays</strong> are <em>first-class citizens</em>. You can have <code>INTEGER[]</code> columns, query with <code>ANY</code>, use <code>unnest()</code> to expand them, and even create GiST indexes on arrays."
    },
    {
        id: 100,
        category: "PostgreSQL",
        question: "What is PostgreSQL Full-Text Search?",
        options: [
            "Searching only in text files",
            "Built-in text search with stemming, ranking, and relevance scoring",
            "A third-party plugin only",
            "Searching only full words, not partial matches"
        ],
        correct: 1,
        explanation: "<strong>PostgreSQL Full-Text Search</strong> is <em>built-in</em>! It handles stemming (run/runs/running), stop words, ranking results by relevance, and special indexes (GIN) for speed. No Elasticsearch needed for many use cases!"
    }
];

// Quiz State
let currentQuestion = 0;
let userAnswers = new Array(quizData.length).fill(null);
let shuffledQuizData = []; // Store shuffled questions

// Fisher-Yates Shuffle Algorithm
function fisherYatesShuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Shuffle questions and options
function shuffleQuiz() {
    // Shuffle the order of questions
    const shuffledQuestions = fisherYatesShuffle(quizData);
    
    // For each question, shuffle the options and update correct index
    shuffledQuizData = shuffledQuestions.map(q => {
        // Create array of [option, originalIndex] pairs
        const optionsWithIndex = q.options.map((opt, idx) => ({
            text: opt,
            originalIndex: idx
        }));
        
        // Shuffle the options
        const shuffledOptions = fisherYatesShuffle(optionsWithIndex);
        
        // Find the new position of the correct answer
        const newCorrectIndex = shuffledOptions.findIndex(
            opt => opt.originalIndex === q.correct
        );
        
        // Return shuffled question with updated correct index
        return {
            ...q,
            options: shuffledOptions.map(opt => opt.text),
            correct: newCorrectIndex
        };
    });
}

// Category Emojis Mapping
const categoryEmojis = {
    'SQL': '📝',
    'NoSQL': '📦',
    'Transaction': '⚡',
    'Indexing': '🎯',
    'Normalization': '📊',
    'Database Design': '🏗️',
    'Advanced SQL': '🔮',
    'Performance': '🚀',
    'Security': '🔒',
    'Backup & Recovery': '💾',
    'Cloud Databases': '☁️',
    'Data Warehousing': '🏭',
    'MongoDB': '🍃',
    'PostgreSQL': '🐘'
};

// DOM Elements
const questionCounter = document.getElementById('questionCounter');
const categoryBadge = document.getElementById('categoryBadge');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const quizComplete = document.getElementById('quizComplete');
const quizCard = document.querySelector('.quiz-card');
const body = document.body;

// Modal Elements
const answerModal = document.getElementById('answerModal');
const correctAnswer = document.getElementById('correctAnswer');
const explanation = document.getElementById('explanation');

// Update background gradient based on current question
function updateBackgroundGradient() {
    const totalQuestions = shuffledQuizData.length || 100;
    const progress = currentQuestion / (totalQuestions - 1);

    // Calculate hue: Start at 220 (blue), go through 280 (purple), 320 (pink), 160 (green), back to 200
    // This creates a smooth transition: blue -> purple -> pink -> green -> teal
    const startHue = 220;
    const endHue = 380; // 220 + 160 = 380 (which wraps to 20)
    const hue = startHue + (progress * (endHue - startHue));
    const normalizedHue = hue % 360;

    // Second color is offset by 40 degrees for a complementary look
    const secondHue = (normalizedHue + 40) % 360;

    // Use pastel/light colors with high lightness (85-92%) and low saturation (50-60%)
    const color1 = `hsl(${normalizedHue}, 55%, 88%)`;
    const color2 = `hsl(${secondHue}, 60%, 85%)`;

    body.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
}

// Initialize
function init() {
    console.log('Initializing quiz...');
    
    // Re-query DOM elements to ensure they're available
    const questionTextEl = document.getElementById('questionText');
    const questionCounterEl = document.getElementById('questionCounter');
    const categoryBadgeEl = document.getElementById('categoryBadge');
    const optionsContainerEl = document.getElementById('optionsContainer');
    
    console.log('DOM Elements:', {
        questionText: !!questionTextEl,
        questionCounter: !!questionCounterEl,
        categoryBadge: !!categoryBadgeEl,
        optionsContainer: !!optionsContainerEl
    });
    
    // Ensure quiz data exists
    if (!quizData || quizData.length === 0) {
        console.error('Quiz data is empty!');
        if (questionTextEl) questionTextEl.textContent = 'Error: Quiz data not found';
        return;
    }
    
    console.log('Quiz data loaded:', quizData.length, 'questions');
    
    shuffleQuiz();
    console.log('Shuffled quiz:', shuffledQuizData.length, 'questions');
    
    userAnswers = new Array(shuffledQuizData.length).fill(null);
    renderQuestion();
    updateNavigation();
    updateBackgroundGradient();
}

// Render current question
function renderQuestion() {
    // Re-query DOM elements to ensure they're available
    const questionTextEl = document.getElementById('questionText');
    const questionCounterEl = document.getElementById('questionCounter');
    const categoryBadgeEl = document.getElementById('categoryBadge');
    const optionsContainerEl = document.getElementById('optionsContainer');
    
    // Ensure data is loaded
    if (!shuffledQuizData || shuffledQuizData.length === 0) {
        console.error('Quiz data not loaded yet');
        return;
    }
    
    const q = shuffledQuizData[currentQuestion];
    
    if (!q) {
        console.error('Question not found at index', currentQuestion);
        return;
    }

    console.log('Rendering question', currentQuestion, ':', q.question.substring(0, 50));

    // Update header
    if (questionCounterEl) {
        questionCounterEl.textContent = `Question ${currentQuestion + 1}/${shuffledQuizData.length}`;
    }
    
    // Update category badge with emoji and color
    const emoji = categoryEmojis[q.category] || '💡';
    if (categoryBadgeEl) {
        categoryBadgeEl.textContent = `${emoji} ${q.category}`;
        categoryBadgeEl.className = 'category-badge';
        categoryBadgeEl.setAttribute('data-category', q.category);
    }
    
    if (questionTextEl) {
        questionTextEl.textContent = q.question;
    }
    
    // Render options based on question type
    if (optionsContainerEl) {
        optionsContainerEl.innerHTML = '';
        
        if (q.type === 'open') {
            // Open-ended question: show hint or expected answer outline
            const hintEl = document.createElement('div');
            hintEl.className = 'open-question-hint';
            hintEl.innerHTML = `
                <div style="padding: 16px; background: rgba(255,255,255,0.1); border-radius: 12px; border: 1px dashed rgba(255,255,255,0.3); margin-bottom: 12px;">
                    <p style="color: rgba(255,255,255,0.7); font-style: italic; margin: 0;">💡 This is a scenario-based question. Think about your approach, then click "Show Answer" to see the detailed solution.</p>
                </div>
            `;
            optionsContainerEl.appendChild(hintEl);
        } else {
            // Multiple choice question
            const labels = ['A', 'B', 'C', 'D'];
            
            q.options.forEach((option, index) => {
                const optionEl = document.createElement('div');
                optionEl.className = 'option';
                
                optionEl.innerHTML = `
                    <span class="option-letter">${labels[index]}</span>
                    <span class="option-text">${option}</span>
                `;
                
                optionEl.onclick = () => selectOption(index);
                optionsContainerEl.appendChild(optionEl);
            });
        }
    }
}

// Select an option - immediate feedback (only for multiple choice)
function selectOption(index) {
    const q = shuffledQuizData[currentQuestion];
    
    // Only works for multiple choice questions
    if (q.type === 'open') return;
    
    userAnswers[currentQuestion] = index;
    
    // Get all option elements
    const optionsContainerEl = document.getElementById('optionsContainer');
    const optionEls = optionsContainerEl ? optionsContainerEl.querySelectorAll('.option') : [];
    
    optionEls.forEach((el, i) => {
        el.classList.remove('selected');
        
        if (i === q.correct) {
            // Always highlight correct answer in green
            el.classList.add('correct');
        } else if (i === index && i !== q.correct) {
            // Highlight wrong answer in red only if user selected it
            el.classList.add('wrong');
        }
        
        // Disable further clicks
        el.onclick = null;
        el.style.cursor = 'default';
    });
}

// Show answer in modal
function showAnswer() {
    const q = shuffledQuizData[currentQuestion];
    const labels = ['A', 'B', 'C', 'D'];
    const correctAnswerEl = document.getElementById('correctAnswer');
    const explanationEl = document.getElementById('explanation');
    
    // Mark open-ended questions as "viewed" when showing answer
    if (q.type === 'open' && userAnswers[currentQuestion] === null) {
        userAnswers[currentQuestion] = -1; // -1 indicates "viewed but no selection"
    }
    
    if (q.type === 'open') {
        // Open-ended question: show the answer field
        if (correctAnswerEl) {
            correctAnswerEl.innerHTML = `
                <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%); padding: 16px; border-radius: 12px; border-left: 4px solid #667eea; margin-bottom: 16px;">
                    <strong style="color: #1e40af; display: block; margin-bottom: 8px;">📝 Sample Answer:</strong>
                    <div style="color: #1e293b; line-height: 1.6;">${q.answer || 'See detailed explanation below'}</div>
                </div>
            `;
        }
        if (explanationEl) {
            explanationEl.innerHTML = `<strong>Detailed Explanation:</strong><br><br>${q.explanation}`;
        }
    } else {
        // Multiple choice question
        if (correctAnswerEl) {
            correctAnswerEl.textContent = `Correct answer: ${labels[q.correct]}`;
        }
        if (explanationEl) {
            explanationEl.innerHTML = q.explanation;
        }
    }
    
    answerModal.classList.add('active');
}

// Close modal
function closeModal(event) {
    // Close if clicking overlay or close button, or if event is null (manual call)
    if (!event || event.target === answerModal) {
        answerModal.classList.remove('active');
    }
}

// Navigation
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        updateNavigation();
        updateBackgroundGradient();
    }
}

function nextQuestion() {
    console.log('Next clicked, current:', currentQuestion);
    if (currentQuestion < shuffledQuizData.length - 1) {
        currentQuestion++;
        console.log('Moving to question:', currentQuestion);
        renderQuestion();
        updateNavigation();
        updateBackgroundGradient();
    } else {
        // Show completion
        showCompletion();
    }
}

function updateNavigation() {
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === shuffledQuizData.length - 1 ? 'Finish →' : 'Next →';
}

function showCompletion() {
    // Calculate results
    let correctCount = 0;
    let viewedCount = 0;
    let mcqCount = 0;
    let openCount = 0;
    
    for (let i = 0; i < shuffledQuizData.length; i++) {
        const q = shuffledQuizData[i];
        if (q.type === 'open') {
            openCount++;
            // For open questions, count if user viewed the answer
            if (userAnswers[i] !== null) {
                viewedCount++;
            }
        } else {
            mcqCount++;
            // For MCQ, count correct answers
            if (userAnswers[i] === q.correct) {
                correctCount++;
            }
        }
    }
    
    // Update result display - show MCQ correct + Open viewed
    const totalAnswered = correctCount + viewedCount;
    document.getElementById('correctCount').textContent = totalAnswered;
    document.getElementById('totalCount').textContent = shuffledQuizData.length;
    
    // Update result message based on score
    const percentage = (correctCount / shuffledQuizData.length) * 100;
    const messageEl = document.getElementById('resultMessage');
    
    if (percentage === 100) {
        messageEl.textContent = '🌟 Perfect score! You\'re a database master!';
    } else if (percentage >= 80) {
        messageEl.textContent = '🎉 Excellent! You really know your databases!';
    } else if (percentage >= 60) {
        messageEl.textContent = '👍 Good job! Keep practicing to improve!';
    } else {
        messageEl.textContent = '💪 Keep learning! You\'ll get better with practice!';
    }
    
    quizCard.style.display = 'none';
    quizComplete.style.display = 'block';
}

function restartQuiz() {
    shuffleQuiz();
    currentQuestion = 0;
    userAnswers = new Array(shuffledQuizData.length).fill(null);
    quizCard.style.display = 'flex';
    quizCard.style.flexDirection = 'column';
    quizComplete.style.display = 'none';
    renderQuestion();
    updateNavigation();
    updateBackgroundGradient();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (quizComplete.style.display === 'block') return;
    
    // Close modal on Escape
    if (e.key === 'Escape' && answerModal.classList.contains('active')) {
        closeModal();
        return;
    }
    
    if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
        prevQuestion();
    } else if (e.key === 'ArrowRight') {
        nextQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
        selectOption(parseInt(e.key) - 1);
    } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        showAnswer();
    }
});

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    try {
        init();
    } catch (error) {
        console.error('Failed to initialize quiz:', error);
        questionText.textContent = 'Failed to load quiz. Please refresh the page.';
    }
});