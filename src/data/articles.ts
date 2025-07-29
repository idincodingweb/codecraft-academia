// CodeCraft Academia - Programming Articles Database
import { cleanMarkdownContent } from '@/utils/cleanContent';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publishDate: string;
  readTime: number;
  difficulty: 'Pemula' | 'Menengah' | 'Lanjutan';
  image?: string;
}

export const articles: Article[] = [
  // JavaScript Articles
  {
    id: "js-basics-1",
    title: "Memahami Dasar-Dasar JavaScript untuk Pemula",
    excerpt: "Pelajari konsep fundamental JavaScript mulai dari variabel, tipe data, hingga fungsi dengan cara yang mudah dipahami.",
    content: `Memahami Dasar-Dasar JavaScript untuk Pemula

Pengantar
JavaScript adalah bahasa pemrograman yang sangat populer dan mudah dipelajari. Dalam artikel ini, kita akan mempelajari konsep-konsep dasar yang perlu Anda ketahui.

Variabel dan Tipe Data
JavaScript memiliki beberapa tipe data dasar:
• String: Untuk teks
• Number: Untuk angka  
• Boolean: Untuk nilai true/false
• Array: Untuk menyimpan banyak nilai
• Object: Untuk menyimpan data kompleks

Contoh deklarasi variabel:

let nama = "John Doe";
let umur = 25;
let isStudent = true;
let hobi = ["coding", "gaming", "reading"];

Fungsi
Fungsi adalah blok kode yang dapat digunakan berulang kali:

function sapa(nama) {
    return "Halo, " + nama + "!";
}

console.log(sapa("Budi")); // Output: Halo, Budi!

Kesimpulan
Memahami dasar-dasar JavaScript sangat penting untuk menjadi web developer yang handal. Terus berlatih dan jangan takut untuk bereksperimen!`,
    category: "JavaScript",
    tags: ["JavaScript", "Pemula", "Web Development"],
    author: "Idin Iskandar",
    publishDate: "2024-01-15",
    readTime: 8,
    difficulty: "Pemula"
  },
  {
    id: "js-dom-manipulation",
    title: "Manipulasi DOM dengan JavaScript",
    excerpt: "Belajar cara mengubah dan berinteraksi dengan elemen HTML menggunakan JavaScript DOM API.",
    content: cleanMarkdownContent(`Manipulasi DOM dengan JavaScript

Apa itu DOM?
DOM (Document Object Model) adalah representasi struktur dokumen HTML dalam bentuk objek yang dapat dimanipulasi dengan JavaScript.

Mengakses Elemen
// Mengakses elemen berdasarkan ID
const element = document.getElementById('myElement');

// Mengakses elemen berdasarkan class
const elements = document.getElementsByClassName('myClass');

// Menggunakan querySelector (lebih modern)
const element = document.querySelector('#myElement');
const elements = document.querySelectorAll('.myClass');

Mengubah Konten
// Mengubah teks
element.textContent = 'Teks baru';

// Mengubah HTML
element.innerHTML = '<strong>Teks tebal</strong>';

// Mengubah atribut
element.setAttribute('class', 'new-class');

Event Handling
button.addEventListener('click', function() {
    alert('Button diklik!');
});

Manipulasi DOM adalah skill fundamental untuk membuat website interaktif.`),
    category: "JavaScript",
    tags: ["JavaScript", "DOM", "Web Development"],
    author: "Idin Iskandar",
    publishDate: "2024-01-20",
    readTime: 10,
    difficulty: "Menengah"
  },
  {
    id: "js-async-await",
    title: "Memahami Async/Await dalam JavaScript",
    excerpt: "Pelajari cara menangani operasi asynchronous dengan async/await untuk kode yang lebih bersih dan mudah dibaca.",
    content: `# Memahami Async/Await dalam JavaScript

## Pengantar Asynchronous Programming
JavaScript adalah bahasa single-threaded, namun dapat menangani operasi asynchronous dengan baik menggunakan Promise dan async/await.

## Promise vs Async/Await
\`\`\`javascript
// Menggunakan Promise
function fetchData() {
    return fetch('/api/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

// Menggunakan Async/Await (lebih clean)
async function fetchDataAsync() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

## Error Handling
\`\`\`javascript
async function handleErrors() {
    try {
        const result = await riskyOperation();
        return result;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        throw error; // Re-throw jika perlu
    }
}
\`\`\`

Async/await membuat kode asynchronous lebih mudah dibaca dan di-debug.`,
    category: "JavaScript",
    tags: ["JavaScript", "Async", "Promise", "ES6"],
    author: "Idin Iskandar",
    publishDate: "2024-01-25",
    readTime: 12,
    difficulty: "Lanjutan"
  },

  // React Articles
  {
    id: "react-intro",
    title: "Pengenalan React untuk Pemula",
    excerpt: "Mulai perjalanan Anda dalam React dengan memahami konsep komponen, JSX, dan state management.",
    content: `# Pengenalan React untuk Pemula

## Apa itu React?
React adalah library JavaScript untuk membangun user interface, khususnya untuk aplikasi web. Dikembangkan oleh Facebook dan sangat populer di kalangan developer.

## Konsep Dasar
### Komponen
\`\`\`jsx
function Welcome(props) {
    return <h1>Halo, {props.name}!</h1>;
}

// Atau dengan arrow function
const Welcome = ({ name }) => {
    return <h1>Halo, {name}!</h1>;
};
\`\`\`

### JSX
JSX adalah sintaks yang memungkinkan kita menulis HTML-like code dalam JavaScript:
\`\`\`jsx
const element = <h1>Hello, World!</h1>;
\`\`\`

### State dan Props
\`\`\`jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
\`\`\`

React mengubah cara kita membangun aplikasi web dengan pendekatan component-based yang powerful.`,
    category: "React",
    tags: ["React", "JavaScript", "Frontend", "Component"],
    author: "Idin Iskandar",
    publishDate: "2024-02-01",
    readTime: 15,
    difficulty: "Pemula"
  },
  {
    id: "react-hooks",
    title: "Menguasai React Hooks",
    excerpt: "Pelajari hooks paling penting dalam React seperti useState, useEffect, useContext, dan custom hooks.",
    content: `# Menguasai React Hooks

## Apa itu Hooks?
Hooks adalah fitur React yang memungkinkan kita menggunakan state dan lifecycle features dalam functional components.

## useState
\`\`\`jsx
import { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
\`\`\`

## useEffect
\`\`\`jsx
import { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    
    // Effect untuk update document title
    useEffect(() => {
        document.title = \`You clicked \${count} times\`;
    }, [count]); // Dependency array
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
\`\`\`

## Custom Hooks
\`\`\`jsx
// Custom hook untuk fetch data
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, [url]);
    
    return { data, loading };
}
\`\`\`

Hooks memberikan cara yang lebih clean dan reusable untuk logic component.`,
    category: "React",
    tags: ["React", "Hooks", "useState", "useEffect"],
    author: "Idin Iskandar",
    publishDate: "2024-02-05",
    readTime: 18,
    difficulty: "Menengah"
  },

  // Python Articles
  {
    id: "python-basics",
    title: "Dasar-Dasar Python untuk Pemula",
    excerpt: "Mulai belajar Python dari nol dengan sintaks yang mudah dipahami dan contoh praktis.",
    content: `# Dasar-Dasar Python untuk Pemula

## Mengapa Python?
Python adalah bahasa pemrograman yang sangat populer karena sintaksnya yang clean dan mudah dipelajari. Digunakan untuk web development, data science, AI, dan banyak lagi.

## Variabel dan Tipe Data
\`\`\`python
# Variabel
nama = "John Doe"
umur = 25
tinggi = 175.5
is_student = True

# List
hobi = ["coding", "reading", "gaming"]

# Dictionary
person = {
    "nama": "John",
    "umur": 25,
    "kota": "Jakarta"
}
\`\`\`

## Control Flow
\`\`\`python
# If statement
if umur >= 18:
    print("Dewasa")
else:
    print("Belum dewasa")

# For loop
for hobi_item in hobi:
    print(f"Saya suka {hobi_item}")

# While loop
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

## Fungsi
\`\`\`python
def sapa(nama, umur=None):
    if umur:
        return f"Halo {nama}, umur {umur} tahun"
    return f"Halo {nama}"

print(sapa("Budi", 25))
\`\`\`

Python adalah bahasa yang sempurna untuk memulai programming journey Anda!`,
    category: "Python",
    tags: ["Python", "Pemula", "Programming", "Basics"],
    author: "Idin Iskandar",
    publishDate: "2024-02-10",
    readTime: 12,
    difficulty: "Pemula"
  },
  {
    id: "python-oop",
    title: "Object-Oriented Programming dalam Python",
    excerpt: "Pelajari konsep OOP seperti class, object, inheritance, dan polymorphism dalam Python.",
    content: `# Object-Oriented Programming dalam Python

## Pengenalan OOP
OOP adalah paradigma pemrograman yang mengorganisir kode dalam bentuk objek dan class.

## Class dan Object
\`\`\`python
class Person:
    def __init__(self, nama, umur):
        self.nama = nama
        self.umur = umur
    
    def sapa(self):
        return f"Halo, saya {self.nama}"
    
    def ulang_tahun(self):
        self.umur += 1
        print(f"Selamat ulang tahun! Sekarang umur {self.umur}")

# Membuat object
person1 = Person("John", 25)
print(person1.sapa())
\`\`\`

## Inheritance
\`\`\`python
class Student(Person):
    def __init__(self, nama, umur, jurusan):
        super().__init__(nama, umur)
        self.jurusan = jurusan
    
    def belajar(self):
        return f"{self.nama} sedang belajar {self.jurusan}"

student1 = Student("Alice", 20, "Computer Science")
print(student1.belajar())
\`\`\`

## Encapsulation
\`\`\`python
class BankAccount:
    def __init__(self, initial_balance=0):
        self.__balance = initial_balance  # Private attribute
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
    
    def get_balance(self):
        return self.__balance

account = BankAccount(1000)
account.deposit(500)
print(account.get_balance())  # 1500
\`\`\`

OOP membantu membuat kode yang lebih terorganisir dan reusable.`,
    category: "Python",
    tags: ["Python", "OOP", "Class", "Inheritance"],
    author: "Idin Iskandar",
    publishDate: "2024-02-15",
    readTime: 20,
    difficulty: "Menengah"
  },

  // Web Development Articles
  {
    id: "html-semantic",
    title: "HTML Semantik untuk Web Modern",
    excerpt: "Pelajari pentingnya HTML semantik dan bagaimana menggunakannya untuk website yang accessible dan SEO-friendly.",
    content: `# HTML Semantik untuk Web Modern

## Apa itu HTML Semantik?
HTML semantik menggunakan elemen-elemen yang memberikan makna pada konten, bukan hanya untuk styling.

## Elemen Semantik Penting
\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Website Semantik</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <header>
                <h1>Judul Artikel</h1>
                <time datetime="2024-01-01">1 Januari 2024</time>
            </header>
            <section>
                <h2>Section 1</h2>
                <p>Konten section pertama...</p>
            </section>
        </article>
        
        <aside>
            <h3>Artikel Terkait</h3>
            <ul>
                <li><a href="#">Artikel 1</a></li>
                <li><a href="#">Artikel 2</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 Website Name</p>
    </footer>
</body>
</html>
\`\`\`

## Keuntungan HTML Semantik
- **SEO**: Search engine lebih mudah memahami struktur konten
- **Accessibility**: Screen reader dapat navigasi dengan lebih baik
- **Maintainability**: Kode lebih mudah dibaca dan dirawat

HTML semantik adalah fondasi untuk web development yang baik dan professional.`,
    category: "Web Development",
    tags: ["HTML", "Semantic", "SEO", "Accessibility"],
    author: "Idin Iskandar",
    publishDate: "2024-02-20",
    readTime: 10,
    difficulty: "Pemula"
  },
  {
    id: "css-flexbox",
    title: "Menguasai CSS Flexbox Layout",
    excerpt: "Belajar CSS Flexbox untuk membuat layout yang fleksibel dan responsif dengan mudah.",
    content: `# Menguasai CSS Flexbox Layout

## Pengenalan Flexbox
Flexbox adalah sistem layout CSS yang memungkinkan kita mengatur elemen dengan fleksibel dalam satu dimensi (baris atau kolom).

## Container Properties
\`\`\`css
.container {
    display: flex;
    
    /* Arah utama */
    flex-direction: row; /* row, column, row-reverse, column-reverse */
    
    /* Wrap items */
    flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
    
    /* Alignment pada main axis */
    justify-content: center; /* flex-start, flex-end, center, space-between, space-around */
    
    /* Alignment pada cross axis */
    align-items: center; /* flex-start, flex-end, center, stretch, baseline */
    
    /* Gap between items */
    gap: 1rem;
}
\`\`\`

## Item Properties
\`\`\`css
.item {
    /* Flex grow */
    flex-grow: 1; /* Item akan mengambil ruang kosong */
    
    /* Flex shrink */
    flex-shrink: 0; /* Item tidak akan menyusut */
    
    /* Flex basis */
    flex-basis: 200px; /* Ukuran dasar item */
    
    /* Shorthand */
    flex: 1 0 200px; /* grow shrink basis */
    
    /* Individual alignment */
    align-self: flex-end;
}
\`\`\`

## Contoh Layout
\`\`\`css
/* Header layout */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

/* Card grid */
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 300px; /* Responsive cards */
}

/* Centering content */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
\`\`\`

Flexbox adalah tool yang powerful untuk modern CSS layout!`,
    category: "Web Development",
    tags: ["CSS", "Flexbox", "Layout", "Responsive"],
    author: "Idin Iskandar",
    publishDate: "2024-02-25",
    readTime: 15,
    difficulty: "Menengah"
  },

  // Database Articles
  {
    id: "sql-basics",
    title: "Dasar-Dasar SQL untuk Database",
    excerpt: "Pelajari query SQL fundamental untuk manipulasi dan pengambilan data dari database relational.",
    content: `# Dasar-Dasar SQL untuk Database

## Apa itu SQL?
SQL (Structured Query Language) adalah bahasa standar untuk mengelola database relational.

## DDL (Data Definition Language)
\`\`\`sql
-- Membuat database
CREATE DATABASE company;

-- Membuat tabel
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    department VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE
);

-- Mengubah struktur tabel
ALTER TABLE employees 
ADD COLUMN phone VARCHAR(15);

-- Menghapus tabel
DROP TABLE employees;
\`\`\`

## DML (Data Manipulation Language)
\`\`\`sql
-- Insert data
INSERT INTO employees (name, email, department, salary, hire_date)
VALUES ('John Doe', 'john@company.com', 'IT', 75000.00, '2024-01-15');

-- Select data
SELECT * FROM employees;
SELECT name, salary FROM employees WHERE department = 'IT';

-- Update data
UPDATE employees 
SET salary = 80000.00 
WHERE id = 1;

-- Delete data
DELETE FROM employees WHERE id = 1;
\`\`\`

## Joins
\`\`\`sql
-- Inner Join
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;

-- Left Join
SELECT e.name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;
\`\`\`

## Aggregate Functions
\`\`\`sql
SELECT 
    department,
    COUNT(*) as total_employees,
    AVG(salary) as avg_salary,
    MAX(salary) as max_salary,
    MIN(salary) as min_salary
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
\`\`\`

SQL adalah skill fundamental untuk bekerja dengan data.`,
    category: "Database",
    tags: ["SQL", "Database", "Query", "Data"],
    author: "Idin Iskandar",
    publishDate: "2024-03-01",
    readTime: 18,
    difficulty: "Pemula"
  },

  // Continue with more articles...
  {
    id: "nodejs-express",
    title: "Membangun API dengan Node.js dan Express",
    excerpt: "Belajar membuat RESTful API menggunakan Node.js dan Express framework.",
    content: `# Membangun API dengan Node.js dan Express

## Setup Project
\`\`\`bash
mkdir my-api
cd my-api
npm init -y
npm install express cors helmet morgan
npm install -D nodemon
\`\`\`

## Basic Express App
\`\`\`javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'API is running!' });
});

// Users routes
app.get('/api/users', (req, res) => {
    res.json({ users: [] });
});

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    // Add validation and save to database
    res.status(201).json({ 
        message: 'User created',
        user: { name, email }
    });
});

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## Error Handling
\`\`\`javascript
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!' 
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ 
        error: 'Route not found' 
    });
});
\`\`\`

Express membuat development API menjadi sangat mudah dan cepat!`,
    category: "Backend",
    tags: ["Node.js", "Express", "API", "Backend"],
    author: "Idin Iskandar",
    publishDate: "2024-03-05",
    readTime: 20,
    difficulty: "Menengah"
  }

  // ... Continue with more articles to reach 50+
];

export const categories = [
  "JavaScript",
  "React", 
  "Python",
  "Web Development",
  "Database",
  "Backend",
  "Frontend",
  "Mobile Development",
  "DevOps",
  "Data Science"
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category);
};

export const searchArticles = (query: string): Article[] => {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(article =>
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.excerpt.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};