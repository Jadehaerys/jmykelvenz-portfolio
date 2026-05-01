# Technical Assessment Practice Questions & Answers
1. **React/Frontend:**
   - **Question:** You need to display a list of users fetched from an API in a React component. How would you structure your component?
   - **Answer:** Use `useEffect` to fetch users, `useState` to store users and page, and map over the users to render them. Example:
           ```jsx
     import React, { useState, useEffect } from 'react';
     function UserList() {
       const [users, setUsers] = useState([]);
       const [page, setPage] = useState(1);
       useEffect(() => {
         fetch(`https://api.example.com/users?page=${page}`)
           .then(res => res.json())
           .then(data => setUsers(data));
       }, [page]);
       return (
         <div>
           {users.map(user => <div key={user.id}>{user.name}</div>)}
           {/* Pagination controls here */}
         </div>
       );
     }
2. **JavaScript:**
   - **Question:** Write a function in JavaScript that takes an array of numbers and returns a new array with only the even numbers.
   - **Answer:**
     function arrayOfEven(arr) {
       return arr.filter(num => num % 2 === 0);
     }
3. **Backend/Node.js:**
   - **Question:** How would you create a simple REST API endpoint in Node.js (using Express) that returns a list of products?
   - **Answer:**
        ```js
     const express = require('express');
     const app = express();
     const port = 3000;
     app.use(express.json());
     const products = [
       {id: 1, name: 'Laptop', price: 1000},
       {id: 2, name: 'Computer', price: 10000}
     ];
     app.get('/api/products', (req, res) => {
       res.json(products);
     });
     app.listen(port, () => {
       console.log('Server is running');
     });
     ```
4. **Database:**
   - **Question:** What is the difference between SQL and NoSQL databases? When would you use each?
   - **Answer:**
     - SQL databases are relational, structured, and use tables with fixed schemas. Good for complex queries and data integrity (e.g., banking).
     - NoSQL databases are non-relational, flexible, and scale horizontally. Good for unstructured or rapidly changing data (e.g., JSON, MongoDB, Redis).
5. **Debugging:**
   - **Question:** You notice your React app is not updating the UI after a state change. What are some possible reasons and how would you debug it?
   - **Answer:**
     - Possible reasons: Not using `setState` correctly, mutating state directly, component not re-rendering, failed API calls, or CSS issues.
     - Debug: Check React DevTools, console for warnings, network tab for API errors, and ensure state is updated immutably.
6. **TypeScript:**
   - **Question:** What is the main advantage of using TypeScript over JavaScript?
   - **Answer:** TypeScript adds static typing, which helps catch errors at compile time, improves code quality, and enhances editor support (autocompletion, refactoring).
7. **React State Management:**
   - **Question:** When would you use `useContext` in React?
   - **Answer:** Use `useContext` to share state or functions globally across components without prop drilling, such as for themes, authentication, or user settings.
8. **API/HTTP:**
   - **Question:** What is the difference between HTTP GET and POST requests?
   - **Answer:** GET requests retrieve data and do not modify server state; parameters are in the URL. POST requests send data to the server to create/update resources; data is in the request body.
9. **Git:**
   - **Question:** How do you resolve a merge conflict in Git?
   - **Answer:**
     - Use `git status` to see conflicted files.
     - Open the files, look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), and manually edit to resolve.
     - After resolving, run `git add <file>` and `git commit` to complete the merge.
10. **CSS:**
    - **Question:** How do you center a div both vertically and horizontally using CSS Flexbox?
    - **Answer:**
      ```css
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      ```
11. **PHP:**
    - **Question:** How do you connect to a MySQL database using PHP?
    - **Answer:**
      ```php
      $conn = new mysqli('localhost', 'username', 'password', 'database');
      if ($conn->connect_error) {
        die('Connection failed: ' . $conn->connect_error);
      }
      ```
12. **JavaScript Array Methods:**
    - **Question:** What does the `map()` function do in JavaScript?
    - **Answer:** It creates a new array by applying a function to each element of the original array, without modifying the original array.
13. **Testing:**
    - **Question:** Why is it important to write tests for your code?
    - **Answer:** Tests help catch bugs early, ensure code works as expected, make refactoring safer, and improve code reliability and maintainability.
14. **HTML:**
    - **Question:** What is semantic HTML and why is it important?
    - **Answer:** Semantic HTML uses elements that convey meaning (like `<header>`, `<main>`, `<article>`, `<footer>`). It improves accessibility, SEO, and code clarity.
15. **Security:**
    - **Question:** What is XSS (Cross-Site Scripting) and how can you prevent it?
    - **Answer:** XSS is an attack where malicious scripts are injected into web pages. Prevent it by escaping user input, using secure frameworks, and validating/sanitizing data.
