/** Database Quiz - 50 Questions */
const quizData = [
    {
        id: 1,
        category: "SQL",
        question: "Kết quả của SELECT NULL = NULL là gì?",
        options: [
            "TRUE",
            "FALSE",
            "NULL",
            "ERROR"
        ],
        correct: 2,
        explanation: "NULL đại diện cho giá trị không xác định. NULL = NULL trả về NULL (không xác định), không phải TRUE. Để so sánh NULL, phải dùng IS NULL hoặc IS NOT NULL."
    },
    {
        id: 2,
        category: "SQL",
        question: "Sự khác biệt giữa INNER JOIN và LEFT JOIN là gì?",
        options: [
            "Không có sự khác biệt",
            "INNER JOIN trả về các bản ghi khớp ở cả 2 bảng, LEFT JOIN trả về tất cả từ bảng trái + khớp ở bảng phải",
            "LEFT JOIN nhanh hơn INNER JOIN",
            "INNER JOIN chỉ hoạt động với 2 bảng"
        ],
        correct: 1,
        explanation: "<strong>INNER JOIN</strong> chỉ trả về các bản ghi có khớp ở <em>cả hai bảng</em>. <strong>LEFT JOIN</strong> trả về <em>tất cả bản ghi từ bảng trái</em>, kèm theo bản ghi khớp từ bảng phải (nếu không khớp thì giá trị là NULL)."
    },
    {
        id: 3,
        category: "Transaction",
        question: "ACID trong transaction database là gì?",
        options: [
            "Advanced, Concurrent, Indexed, Distributed",
            "Atomicity, Consistency, Isolation, Durability",
            "Automatic, Consistent, Integrated, Data",
            "Application, Cache, Index, Database"
        ],
        correct: 1,
        explanation: "<strong>ACID</strong> là viết tắt của:<br>• <strong>A</strong>tomicity: Tất cả hoặc không gì cả<br>• <strong>C</strong>onsistency: Dữ liệu luôn hợp lệ<br>• <strong>I</strong>solation: Các transaction độc lập<br>• <strong>D</strong>urability: Dữ liệu được lưu vĩnh viễn"
    },
    {
        id: 4,
        category: "Normalization",
        question: "Normal Form 3NF (Third Normal Form) yêu cầu gì?",
        options: [
            "Chỉ cần có primary key",
            "Thỏa mãn 2NF và không có transitive dependency",
            "Tất cả cột phải là VARCHAR",
            "Không được có quan hệ giữa các bảng"
        ],
        correct: 1,
        explanation: "<strong>3NF</strong> yêu cầu:<br>1. Thỏa mãn 2NF<br>2. Không có <strong>transitive dependency</strong> (phụ thuộc bắc cầu) - nghĩa là các cột non-key không được phụ thuộc vào nhau, chỉ phụ thuộc trực tiếp vào primary key."
    },
    {
        id: 5,
        category: "Indexing",
        question: "Index trong database dùng để làm gì?",
        options: [
            "Lưu trữ dữ liệu tạm thờ",
            "Tăng tốc độ truy vấn SELECT",
            "Giảm dung lượng database",
            "Mã hóa dữ liệu"
        ],
        correct: 1,
        explanation: "<strong>Index</strong> giúp tăng tốc độ <em>đọc dữ liệu (SELECT)</em> bằng cách tạo cấu trúc dữ liệu (thường là B-tree) cho phép tìm kiếm nhanh hơn. Tuy nhiên, index làm <em>chậm</em> các thao tác INSERT, UPDATE, DELETE."
    },
    {
        id: 6,
        category: "SQL",
        question: "SQL nào tìm các bản ghi trùng lặp trong bảng?",
        options: [
            "SELECT * FROM table WHERE duplicate = true",
            "SELECT column, COUNT(*) FROM table GROUP BY column HAVING COUNT(*) > 1",
            "SELECT DUPLICATE * FROM table",
            "FIND DUPLICATES IN table"
        ],
        correct: 1,
        explanation: "Câu lệnh <code>SELECT column, COUNT(*) FROM table GROUP BY column HAVING COUNT(*) > 1</code> sẽ nhóm các giá trị giống nhau và chỉ trả về những group có nhiều hơn 1 bản ghi (tức là trùng lặp)."
    },
    {
        id: 7,
        category: "NoSQL",
        question: "MongoDB thuộc loại NoSQL nào?",
        options: [
            "Key-Value store",
            "Document store",
            "Column-family store",
            "Graph database"
        ],
        correct: 1,
        explanation: "<strong>MongoDB</strong> là <strong>Document Store</strong> - lưu trữ dữ liệu dưới dạng document JSON/BSON. Mỗi document có thể có cấu trúc khác nhau, rất linh hoạt so với SQL."
    },
    {
        id: 8,
        category: "SQL",
        question: "Sự khác biệt giữa WHERE và HAVING?",
        options: [
            "Không có sự khác biệt",
            "WHERE lọc trước GROUP BY, HAVING lọc sau GROUP BY",
            "HAVING nhanh hơn WHERE",
            "WHERE chỉ dùng cho số, HAVING cho chuỗi"
        ],
        correct: 1,
        explanation: "<strong>WHERE</strong> lọc <em>bản ghi</em> trước khi nhóm (GROUP BY). <strong>HAVING</strong> lọc <em>kết quả</em> sau khi đã nhóm, thường dùng với các hàm aggregate (COUNT, SUM, AVG...)."
    },
    {
        id: 9,
        category: "Transaction",
        question: "Isolation level nào cao nhất (an toàn nhất)?",
        options: [
            "READ UNCOMMITTED",
            "READ COMMITTED",
            "REPEATABLE READ",
            "SERIALIZABLE"
        ],
        correct: 3,
        explanation: "<strong>SERIALIZABLE</strong> là isolation level cao nhất, đảm bảo các transaction thực thi như thể tuần tự (không có hiện tượng phantom reads, non-repeatable reads, dirty reads). Tuy nhiên, hiệu suất thấp nhất."
    },
    {
        id: 10,
        category: "SQL",
        question: "Primary Key và Unique Key khác nhau thế nào?",
        options: [
            "Không có khác biệt",
            "Primary Key không cho phép NULL, Unique Key cho phép 1 NULL",
            "Unique Key bắt buộc phải có, Primary Key không",
            "Primary Key chỉ dùng cho số nguyên"
        ],
        correct: 1,
        explanation: "<strong>Primary Key</strong>: Không cho phép NULL, mỗi bảng chỉ có 1, được dùng làm khóa chính.<br><strong>Unique Key</strong>: Cho phép <em>1 giá trị NULL</em>, một bảng có thể có nhiều unique key."
    },
    {
        id: 11,
        category: "SQL",
        question: "DELETE và TRUNCATE khác nhau như thế nào?",
        options: [
            "Không có khác biệt",
            "DELETE xóa từng dòng và ghi log, TRUNCATE xóa toàn bộ trang và không ghi log",
            "TRUNCATE có thể dùng WHERE, DELETE không",
            "DELETE nhanh hơn TRUNCATE"
        ],
        correct: 1,
        explanation: "<strong>DELETE</strong>: Xóa từng dòng, có thể dùng WHERE, ghi log đầy đủ, có thể rollback.<br><strong>TRUNCATE</strong>: Xóa toàn bộ dữ liệu (không dùng WHERE), ít log hơn, nhanh hơn, reset auto-increment."
    },
    {
        id: 12,
        category: "NoSQL",
        question: "Redis thuộc loại database nào?",
        options: [
            "Document database",
            "Key-Value store",
            "Relational database",
            "Graph database"
        ],
        correct: 1,
        explanation: "<strong>Redis</strong> là <strong>Key-Value Store</strong> - lưu trữ dữ liệu dưới dạng key-value trong memory. Rất nhanh, thường dùng làm cache, session store, rate limiting."
    },
    {
        id: 13,
        category: "SQL",
        question: "Câu lệnh nào lấy 5 bản ghi đầu tiên trong MySQL?",
        options: [
            "SELECT TOP 5 * FROM table",
            "SELECT FIRST 5 * FROM table",
            "SELECT * FROM table LIMIT 5",
            "SELECT * FROM table FETCH 5"
        ],
        correct: 2,
        explanation: "Trong <strong>MySQL</strong>, dùng <code>LIMIT 5</code>. Trong SQL Server dùng <code>TOP 5</code>, trong Oracle dùng <code>FETCH FIRST 5 ROWS ONLY</code>."
    },
    {
        id: 14,
        category: "Indexing",
        question: "Composite Index (Multi-column index) hoạt động tốt nhất khi nào?",
        options: [
            "Khi query chỉ dùng cột cuối của index",
            "Khi query dùng các cột từ trái sang phải theo thứ tự index",
            "Khi query dùng OR thay vì AND",
            "Khi bảng có ít hơn 100 dòng"
        ],
        correct: 1,
        explanation: "<strong>Composite Index</strong> (A, B, C) hoạt động tốt nhất khi query sử dụng các cột từ <em>trái sang phải</em>: A, hoặc A+B, hoặc A+B+C. Không dùng được nếu chỉ query B hoặc C."
    },
    {
        id: 15,
        category: "Normalization",
        question: "Denormalization là gì và khi nào nên dùng?",
        options: [
            "Xóa database - không nên dùng bao giờ",
            "Cố ý thêm dữ liệu dư thừa để tăng tốc độ đọc",
            "Tạo thêm index cho tất cả các cột",
            "Chuyển từ SQL sang NoSQL"
        ],
        correct: 1,
        explanation: "<strong>Denormalization</strong> là cố ý thêm dữ liệu dư thừa (vi phạm normal form) để <em>giảm số lượng JOIN</em>, tăng tốc độ đọc. Thường dùng cho hệ thống read-heavy như data warehouse."
    },
    {
        id: 16,
        category: "SQL",
        question: "UNION và UNION ALL khác nhau thế nào?",
        options: [
            "Không có khác biệt",
            "UNION loại bỏ trùng lặp, UNION ALL giữ lại tất cả",
            "UNION ALL chỉ dùng cho 2 bảng",
            "UNION nhanh hơn UNION ALL"
        ],
        correct: 1,
        explanation: "<strong>UNION</strong>: Kết hợp kết quả và <em>loại bỏ bản ghi trùng lặp</em> (chậm hơn).<br><strong>UNION ALL</strong>: Kết hợp và <em>giữ lại tất cả</em> bản ghi (nhanh hơn)."
    },
    {
        id: 17,
        category: "SQL",
        question: "Câu lệnh nào tìm giá trị lớn thứ 2 trong cột salary?",
        options: [
            "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)",
            "SELECT SECOND_MAX(salary) FROM employees",
            "SELECT TOP 2 salary FROM employees ORDER BY salary DESC",
            "SELECT MAX(salary) - 1 FROM employees"
        ],
        correct: 0,
        explanation: "Cách phổ biến: <code>SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)</code>. Có thể dùng window functions như ROW_NUMBER() trong SQL hiện đại."
    },
    {
        id: 18,
        category: "Database Design",
        question: "Foreign Key dùng để làm gì?",
        options: [
            "Tạo index tự động",
            "Đảm bảo tính toàn vẹn tham chiếu giữa các bảng",
            "Tăng tốc độ truy vấn",
            "Mã hóa dữ liệu"
        ],
        correct: 1,
        explanation: "<strong>Foreign Key</strong> đảm bảo <strong>referential integrity</strong> - không cho phép tạo bản ghi tham chiếu đến dữ liệu không tồn tại, và có thể cấu hình hành động khi dữ liệu gốc bị xóa (CASCADE, SET NULL...)."
    },
    {
        id: 19,
        category: "NoSQL",
        question: "Điểm mạnh của NoSQL so với SQL là gì?",
        options: [
            "Luôn nhanh hơn SQL trong mọi trường hợp",
            "Dễ scale horizontally, linh hoạt schema, tốt cho unstructured data",
            "Hỗ trợ transaction ACID tốt hơn",
            "Ngôn ngữ query chuẩn hóa"
        ],
        correct: 1,
        explanation: "<strong>NoSQL</strong> mạnh ở:<br>• <strong>Horizontal scaling</strong> (phân tán dễ dàng)<br>• <strong>Schema flexible</strong> (không cần định nghĩa trước)<br>• Tốt cho <strong>unstructured/semi-structured data</strong>"
    },
    {
        id: 20,
        category: "SQL",
        question: "Subquery và JOIN, cái nào thường hiệu quả hơn?",
        options: [
            "Subquery luôn nhanh hơn",
            "JOIN thường hiệu quả hơn vì database engine tối ưu tốt hơn",
            "Không có sự khác biệt",
            "Không thể so sánh"
        ],
        correct: 1,
        explanation: "<strong>JOIN</strong> thường hiệu quả hơn vì database engine có thể tối ưu execution plan tốt hơn. Tuy nhiên, tùy trường hợp, subquery có thể đọc dễ hơn và với optimizer hiện đại, sự khác biệt không lớn."
    },
    {
        id: 21,
        category: "Transaction",
        question: "Deadlock trong database là gì?",
        options: [
            "Database bị crash",
            "Hai transaction chờ đợi lẫn nhau để giải phóng lock",
            "Query chạy quá lâu",
            "Index bị hỏng"
        ],
        correct: 1,
        explanation: "<strong>Deadlock</strong> xảy ra khi Transaction A lock resource X và chờ resource Y, trong khi Transaction B lock resource Y và chờ resource X. Cả hai đều chờ nhau mãi mãi. Database thường tự động phát hiện và kill một transaction."
    },
    {
        id: 22,
        category: "SQL",
        question: "COALESCE() function dùng để làm gì?",
        options: [
            "Kết hợp nhiều bảng",
            "Trả về giá trị đầu tiên không NULL trong danh sách",
            "Tính tổng các cột",
            "Nén dữ liệu"
        ],
        correct: 1,
        explanation: "<strong>COALESCE(value1, value2, ...)</strong> trả về <em>giá trị đầu tiên không NULL</em>. Thường dùng để thay thế NULL bằng giá trị mặc định: <code>COALESCE(phone, 'N/A')</code>"
    },
    {
        id: 23,
        category: "Indexing",
        question: "Covering Index là gì?",
        options: [
            "Index bao phủ toàn bộ database",
            "Index chứa tất cả cột cần cho query (không cần lookup bảng gốc)",
            "Index cho tất cả các bảng",
            "Backup của index"
        ],
        correct: 1,
        explanation: "<strong>Covering Index</strong> là index chứa <em>tất cả các cột</em> cần thiết cho một query (trong cả WHERE và SELECT). Query chỉ cần đọc index, không cần truy cập bảng gốc → rất nhanh."
    },
    {
        id: 24,
        category: "SQL",
        question: "Window function ROW_NUMBER() dùng để làm gì?",
        options: [
            "Đếm tổng số dòng trong bảng",
            "Gán số thứ tự duy nhất cho mỗi dòng trong partition",
            "Tính trung bình",
            "Tạo primary key"
        ],
        correct: 1,
        explanation: "<strong>ROW_NUMBER()</strong> gán số thứ tự duy nhất (1, 2, 3...) cho mỗi dòng trong một <em>partition</em>. Ví dụ: <code>ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)</code>"
    },
    {
        id: 25,
        category: "Database Design",
        question: "Surrogate Key là gì?",
        options: [
            "Key chính thức của ngườ dùng",
            "Key tự động sinh, không mang ý nghĩa nghiệp vụ (như AUTO_INCREMENT)",
            "Key để mã hóa dữ liệu",
            "Key ngoại (Foreign Key)"
        ],
        correct: 1,
        explanation: "<strong>Surrogate Key</strong> là key <em>tự động sinh</em> (ID, UUID...) không mang ý nghĩa nghiệp vụ, chỉ để định danh duy nhất. Ngược lại với <strong>Natural Key</strong> (như SSN, email) có ý nghĩa thực tế."
    },
    {
        id: 26,
        category: "SQL",
        question: "Sự khác biệt giữa VARCHAR và CHAR?",
        options: [
            "Không có sự khác biệt",
            "CHAR cố định độ dài, VARCHAR thay đổi theo dữ liệu",
            "VARCHAR nhanh hơn CHAR",
            "CHAR chỉ dùng cho ký tự đặc biệt"
        ],
        correct: 1,
        explanation: "<strong>CHAR(n)</strong>: Cố định n ký tự, padding space nếu ngắn hơn.<br><strong>VARCHAR(n)</strong>: Biến động, chỉ lưu đúng số ký tự cần + 1-2 bytes cho độ dài. VARCHAR tiết kiệm space hơn."
    },
    {
        id: 27,
        category: "Transaction",
        question: "Optimistic Locking và Pessimistic Locking khác nhau?",
        options: [
            "Không có khác biệt",
            "Optimistic: Kiểm tra conflict khi update, Pessimistic: Lock ngay khi đọc",
            "Optimistic chỉ dùng cho NoSQL",
            "Pessimistic nhanh hơn Optimistic"
        ],
        correct: 1,
        explanation: "<strong>Optimistic</strong>: Không lock, kiểm tra version/timestamp khi update. Tốt cho đọc nhiều.<br><strong>Pessimistic</strong>: Lock ngay khi đọc. Tốt cho ghi nhiều, tránh conflict."
    },
    {
        id: 28,
        category: "SQL",
        question: "CTE (Common Table Expression) bắt đầu bằng từ khóa nào?",
        options: [
            "WITH",
            "USING",
            "AS",
            "TEMP"
        ],
        correct: 0,
        explanation: "<strong>CTE</strong> bắt đầu bằng <code>WITH</code>:<br><code>WITH cte_name AS (SELECT ...) SELECT * FROM cte_name</code>. Giúp viết query phức tạp dễ đọc hơn."
    },
    {
        id: 29,
        category: "NoSQL",
        question: "CAP Theorem nói về điều gì?",
        options: [
            "Cách tối ưu query",
            "Chỉ có thể đảm bảo 2/3: Consistency, Availability, Partition tolerance",
            "Cách thiết kế index",
            "Các loại join trong NoSQL"
        ],
        correct: 1,
        explanation: "<strong>CAP Theorem</strong>: Trong hệ thống phân tán, chỉ có thể đảm bảo tối đa <strong>2/3</strong> thuộc tính:<br>• <strong>C</strong>onsistency<br>• <strong>A</strong>vailability<br>• <strong>P</strong>artition tolerance (bắt buộc phải có trong distributed system)"
    },
    {
        id: 30,
        category: "SQL",
        question: "Sự khác biệt giữa COUNT(*) và COUNT(column)?",
        options: [
            "Không có sự khác biệt",
            "COUNT(*) đếm tất cả, COUNT(column) bỏ qua NULL",
            "COUNT(column) nhanh hơn",
            "COUNT(*) chỉ đếm unique values"
        ],
        correct: 1,
        explanation: "<strong>COUNT(*)</strong>: Đếm <em>tất cả</em> bản ghi (kể cả NULL).<br><strong>COUNT(column)</strong>: Chỉ đếm các giá trị <em>không NULL</em> trong cột đó."
    },
    {
        id: 31,
        category: "Indexing",
        question: "Clustered Index là gì?",
        options: [
            "Index cho nhiều cột",
            "Index quyết định thứ tự vật lý của dữ liệu trong bảng",
            "Index sao lưu",
            "Index trên nhiều bảng"
        ],
        correct: 1,
        explanation: "<strong>Clustered Index</strong> quyết định <em>thứ tự vật lý</em> lưu trữ dữ liệu trong bảng. Một bảng chỉ có 1 clustered index (thường là primary key). Non-clustered index trỏ đến clustered index."
    },
    {
        id: 32,
        category: "SQL",
        question: "Sử dụng EXISTS thay vì IN khi nào?",
        options: [
            "Luôn luôn dùng EXISTS",
            "Khi subquery trả về nhiều dòng, EXISTS thường hiệu quả hơn",
            "Khi so sánh số",
            "Khi dùng với NULL"
        ],
        correct: 1,
        explanation: "<strong>EXISTS</strong> thường hiệu quả hơn <strong>IN</strong> khi subquery lớn vì EXISTS dừng ngay khi tìm thấy match đầu tiên, còn IN cần materialize toàn bộ subquery."
    },
    {
        id: 33,
        category: "Database Design",
        question: "Entity-Relationship Diagram (ERD) dùng để làm gì?",
        options: [
            "Viết code SQL",
            "Mô hình hóa cấu trúc database và mối quan hệ giữa các entity",
            "Tối ưu performance",
            "Tạo backup"
        ],
        correct: 1,
        explanation: "<strong>ERD</strong> dùng để <em>thiết kế và trực quan hóa</em> cấu trúc database, thể hiện các <strong>entity</strong> (bảng), <strong>attribute</strong> (cột), và <strong>relationship</strong> (quan hệ) giữa chúng."
    },
    {
        id: 34,
        category: "SQL",
        question: "Self Join là gì?",
        options: [
            "Join với chính bảng đó",
            "Join tự động",
            "Join khi không có điều kiện",
            "Join giữa 2 database"
        ],
        correct: 0,
        explanation: "<strong>Self Join</strong> là join một bảng với <em>chính nó</em>. Dùng alias để phân biệt: <code>SELECT a.name, b.name FROM employees a JOIN employees b ON a.manager_id = b.id</code>"
    },
    {
        id: 35,
        category: "NoSQL",
        question: "Neo4j là loại database nào?",
        options: [
            "Document database",
            "Graph database",
            "Key-value store",
            "Column-family store"
        ],
        correct: 1,
        explanation: "<strong>Neo4j</strong> là <strong>Graph Database</strong> - tối ưu cho dữ liệu có nhiều <em>quan hệ phức tạp</em> (nodes và edges). Tuyệt vờ cho social networks, recommendation engines."
    },
    {
        id: 36,
        category: "SQL",
        question: "Câu lệnh nào tạo bản sao lưu cấu trúc bảng (không có dữ liệu)?",
        options: [
            "CLONE TABLE",
            "CREATE TABLE new_table LIKE old_table",
            "COPY TABLE",
            "DUPLICATE TABLE"
        ],
        correct: 1,
        explanation: "Trong MySQL: <code>CREATE TABLE new_table LIKE old_table</code> tạo bảng mới với cùng cấu trúc (không có dữ liệu). Hoặc: <code>CREATE TABLE new_table AS SELECT * FROM old_table WHERE 1=0</code>"
    },
    {
        id: 37,
        category: "Transaction",
        question: "Two-Phase Commit (2PC) dùng để làm gì?",
        options: [
            "Tối ưu query",
            "Đảm bảo atomicity cho distributed transaction",
            "Tạo index nhanh hơn",
            "Sao lưu database"
        ],
        correct: 1,
        explanation: "<strong>Two-Phase Commit</strong> là protocol đảm bảo <strong>atomicity</strong> cho transaction xuyên suốt nhiều database/node: Phase 1 (prepare) và Phase 2 (commit/rollback)."
    },
    {
        id: 38,
        category: "SQL",
        question: "CASE expression dùng để làm gì?",
        options: [
            "Tạo bảng mớ",
            "Logic điều kiện trong SQL (IF-THEN-ELSE)",
            "Tạo index",
            "Kết nối database"
        ],
        correct: 1,
        explanation: "<strong>CASE</strong> là câu lệnh điều kiện trong SQL:<br><code>CASE WHEN condition THEN result ELSE other END</code>. Tương tự IF-ELSE trong ngôn ngữ lập trình."
    },
    {
        id: 39,
        category: "Indexing",
        question: "Index Fragmentation ảnh hưởng gì đến performance?",
        options: [
            "Không ảnh hưởng",
            "Làm chậm truy vấn vì dữ liệu index không liên tục",
            "Tăng tốc độ ghi",
            "Giảm dung lượng database"
        ],
        correct: 1,
        explanation: "<strong>Index Fragmentation</strong> xảy ra khi dữ liệu index bị phân mảnh (do nhiều INSERT/DELETE). Làm tăng I/O vì dữ liệu không liên tục, cần <strong>REBUILD</strong> hoặc <strong>REORGANIZE</strong> index để tối ưu."
    },
    {
        id: 40,
        category: "SQL",
        question: "Câu lệnh nào xóa toàn bộ dữ liệu trong bảng nhưng giữ lại cấu trúc?",
        options: [
            "DROP TABLE",
            "DELETE FROM table (không có WHERE)",
            "TRUNCATE TABLE",
            "Cả B và C"
        ],
        correct: 3,
        explanation: "Cả <strong>DELETE FROM table</strong> (không WHERE) và <strong>TRUNCATE TABLE</strong> đều xóa dữ liệu nhưng giữ cấu trúc. TRUNCATE nhanh hơn, không ghi log từng dòng, reset auto-increment."
    },
    {
        id: 41,
        category: "Database Design",
        question: "One-to-Many relationship được thể hiện như thế nào?",
        options: [
            "Tạo bảng trung gian",
            "Khóa ngoại ở bảng 'many' trỏ đến bảng 'one'",
            "Gộp thành 1 bảng",
            "Dùng array"
        ],
        correct: 1,
        explanation: "<strong>One-to-Many</strong>: Đặt <strong>foreign key</strong> ở bảng 'many' (bên nhiều) trỏ đến primary key của bảng 'one' (bên một). Ví dụ: 1 Department có nhiều Employees."
    },
    {
        id: 42,
        category: "SQL",
        question: "RANK() và DENSE_RANK() khác nhau thế nào?",
        options: [
            "Không có khác biệt",
            "RANK() bỏ qua số thứ hạng sau tie, DENSE_RANK() không bỏ qua",
            "DENSE_RANK() chỉ dùng cho số nguyên",
            "RANK() nhanh hơn"
        ],
        correct: 1,
        explanation: "Với dữ liệu [100, 100, 90]:<br>• <strong>RANK()</strong>: 1, 1, 3 (bỏ qua 2)<br>• <strong>DENSE_RANK()</strong>: 1, 1, 2 (không bỏ qua)"
    },
    {
        id: 43,
        category: "NoSQL",
        question: "Cassandra thuộc loại database nào?",
        options: [
            "Document store",
            "Wide-column store (Column-family)",
            "Graph database",
            "Key-value store"
        ],
        correct: 1,
        explanation: "<strong>Cassandra</strong> là <strong>Wide-Column Store</strong> (Column-Family). Mỗi row có thể có số lượng columns khác nhau. Tốt cho write-heavy, time-series data."
    },
    {
        id: 44,
        category: "SQL",
        question: "Query nào tìm employees có salary cao hơn trung bình?",
        options: [
            "SELECT * FROM employees WHERE salary > AVG(salary)",
            "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees)",
            "SELECT * FROM employees HAVING salary > AVG(salary)",
            "SELECT * FROM employees WHERE salary > AVERAGE"
        ],
        correct: 1,
        explanation: "Cần dùng <strong>subquery</strong>: <code>SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees)</code>. Không thể dùng aggregate function trực tiếp trong WHERE."
    },
    {
        id: 45,
        category: "Transaction",
        question: "Snapshot Isolation giải quyết vấn đề gì?",
        options: [
            "Deadlock",
            "Non-repeatable reads và Phantom reads",
            "Disk full",
            "Network latency"
        ],
        correct: 1,
        explanation: "<strong>Snapshot Isolation</strong> đảm bảo transaction nhìn thấy <em>snapshot</em> của database tại thờ điểm bắt đầu transaction, ngăn <strong>non-repeatable reads</strong> và <strong>phantom reads</strong>."
    },
    {
        id: 46,
        category: "SQL",
        question: "Sự khác biệt giữa VIEW và MATERIALIZED VIEW?",
        options: [
            "Không có khác biệt",
            "VIEW là virtual, MATERIALIZED VIEW lưu kết quả vật lý",
            "MATERIALIZED VIEW nhanh hơn VIEW",
            "Cả B và C"
        ],
        correct: 3,
        explanation: "<strong>VIEW</strong>: Virtual table, query lại mỗi lần gọi.<br><strong>MATERIALIZED VIEW</strong>: Lưu kết quả vật lý, cần refresh. Nhanh hơn cho query phức tạp nhưng dữ liệu có thể stale."
    },
    {
        id: 47,
        category: "Database Design",
        question: "Tại sao không nên dùng SELECT * trong production?",
        options: [
            "Viết dài hơn",
            "Lấy thừa cột không cần, tăng network traffic, dễ break khi schema thay đổi",
            "Không thể dùng với JOIN",
            "Chậm hơn khi có index"
        ],
        correct: 1,
        explanation: "<strong>SELECT *</strong> nên tránh vì:<br>• Lấy thừa cột không cần → tăng I/O và network<br>• Dễ break khi thêm/xóa cột<br>• Không dùng được covering index hiệu quả"
    },
    {
        id: 48,
        category: "SQL",
        question: "PIVOT operation dùng để làm gì?",
        options: [
            "Xoay bảng từ dạng row thành column",
            "Tạo index",
            "Sao lưu database",
            "Kết nối 2 bảng"
        ],
        correct: 0,
        explanation: "<strong>PIVOT</strong> chuyển dữ liệu từ <em>row-based</em> thành <em>column-based</em>. Ví dụ: chuyển dữ liệu doanh số theo từng tháng (rows) thành các cột Jan, Feb, Mar..."
    },
    {
        id: 49,
        category: "NoSQL",
        question: "Sharding trong database là gì?",
        options: [
            "Tạo index",
            "Chia dữ liệu thành nhiều phần lưu ở các server khác nhau",
            "Mã hóa dữ liệu",
            "Sao lưu database"
        ],
        correct: 1,
        explanation: "<strong>Sharding</strong> là kỹ thuật <em>phân chia dữ liệu</em> (theo range, hash, hoặc geo) lưu trên nhiều server khác nhau để <strong>scale horizontally</strong> và phân tải."
    },
    {
        id: 50,
        category: "SQL",
        question: "Query execution plan dùng để làm gì?",
        options: [
            "Tạo bảng mới",
            "Phân tích và tối ưu cách database thực thi query",
            "Sao lưu dữ liệu",
            "Tạo user mới"
        ],
        correct: 1,
        explanation: "<strong>Execution Plan</strong> cho biết database sẽ <em>thực thi query như thế nào</em> (dùng index nào, join theo thứ tự nào...). Dùng để <strong>tối ưu performance</strong> và debug query chậm."
    }
];

// Quiz State
let currentQuestion = 0;
let userAnswers = new Array(quizData.length).fill(null);
let answerRevealed = new Array(quizData.length).fill(false);

// DOM Elements
const questionCounter = document.getElementById('questionCounter');
const categoryBadge = document.getElementById('categoryBadge');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const answerSection = document.getElementById('answerSection');
const correctAnswer = document.getElementById('correctAnswer');
const explanation = document.getElementById('explanation');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const quizComplete = document.getElementById('quizComplete');
const quizCard = document.querySelector('.quiz-card');

// Initialize
function init() {
    renderQuestion();
    updateNavigation();
}

// Render current question
function renderQuestion() {
    const q = quizData[currentQuestion];
    
    // Update header
    questionCounter.textContent = `Câu ${currentQuestion + 1}/${quizData.length}`;
    categoryBadge.textContent = q.category;
    questionText.textContent = q.question;
    
    // Update progress
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Render options
    optionsContainer.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        
        // Add classes based on state
        if (userAnswers[currentQuestion] === index) {
            optionEl.classList.add('selected');
        }
        
        if (answerRevealed[currentQuestion]) {
            if (index === q.correct) {
                optionEl.classList.add('correct');
            } else if (userAnswers[currentQuestion] === index && index !== q.correct) {
                optionEl.classList.add('wrong');
            }
        }
        
        optionEl.innerHTML = `
            <span class="option-letter">${labels[index]}</span>
            <span class="option-text">${option}</span>
        `;
        
        optionEl.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionEl);
    });
    
    // Show/hide answer section
    if (answerRevealed[currentQuestion]) {
        answerSection.style.display = 'block';
        correctAnswer.textContent = `Đáp án đúng: ${labels[q.correct]}`;
        explanation.innerHTML = q.explanation;
        showAnswerBtn.textContent = 'Ẩn đáp án';
    } else {
        answerSection.style.display = 'none';
        showAnswerBtn.textContent = 'Xem đáp án';
    }
}

// Select an option
function selectOption(index) {
    userAnswers[currentQuestion] = index;
    renderQuestion();
}

// Show/hide answer
function showAnswer() {
    if (answerRevealed[currentQuestion]) {
        answerRevealed[currentQuestion] = false;
    } else {
        answerRevealed[currentQuestion] = true;
    }
    renderQuestion();
}

// Navigation
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        updateNavigation();
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        renderQuestion();
        updateNavigation();
    } else {
        // Show completion
        showCompletion();
    }
}

function updateNavigation() {
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === quizData.length - 1 ? 'Hoàn thành →' : 'Câu sau →';
}

function showCompletion() {
    quizCard.style.display = 'none';
    quizComplete.style.display = 'block';
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(null);
    answerRevealed = new Array(quizData.length).fill(false);
    quizCard.style.display = 'flex';
    quizComplete.style.display = 'none';
    renderQuestion();
    updateNavigation();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (quizComplete.style.display === 'block') return;
    
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

// Start
init();
