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

XSS (Cross-Site Scripting):
XSS is a security vulnerability where an attacker injects malicious scripts into web pages viewed by other users. This can allow attackers to steal cookies, session tokens, or other sensitive information. Prevent XSS by escaping user input and using secure frameworks.

SQL Injection:
SQL injection is a vulnerability where an attacker manipulates SQL queries by injecting malicious input into form fields or URLs. This can allow unauthorized access, data leaks, or data loss. Prevent SQL injection by using parameterized queries and validating user input.

CORS (Cross-Origin Resource Sharing):
CORS is a browser security feature that controls how web pages can request resources from a different domain. It helps prevent malicious websites from making unauthorized requests to your server. You configure CORS on your backend to specify which domains are allowed to access your API.

# Webhouse Intro Call Prep

## 1. Self-Introduction (1–2 minutes)
Hi, I’m Jade Mykel Ventic, a web developer and student founder based in Cebu. I have hands-on experience building and deploying web applications for real clients, including e-commerce, SaaS, and collaborative platforms. My main stack is React, Next.js, TypeScript, and Vercel for the frontend, and I also work with Supabase, MySQL, PostgreSQL, and API integrations for the backend. I enjoy working on projects that solve real problems and improve user experience. I’m passionate about building products end-to-end, from design to deployment, and I’m always eager to learn new tools and approaches.

## 2. STAR Stories (Project Highlights)

### Tuon (AI-Powered Study Platform)
- **Situation:** Students needed a better way to turn learning materials into active practice.
- **Task:** Build a platform that generates flashcards and quizzes from any topic, PDF, or YouTube link.
- **Action:** Designed and developed the full-stack app solo using React, TypeScript, Supabase, Groq API, and Vercel. Integrated AI features, subscription billing, and privacy-first architecture.
- **Result:** Over 1,000 users in the first 3 months, 99.9% uptime, and positive feedback on usability.

### S&R Pastry Shop (E-Commerce Web App)
- **Situation:** Local bakery needed a digital storefront that fit their Messenger/GCash workflow.
- **Task:** Create a web app with a custom checkout flow that bridges web and Messenger.
- **Action:** Built a high-performance site with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Developed a clipboard-based order handoff to Messenger.
- **Result:** Enabled online orders without backend complexity, modernized the business, and improved customer experience.

### PSITS Voting System (Collaborative Project)
- **Situation:** Student org needed a secure, efficient way to run elections.
- **Task:** Build an online voting platform for officer elections.
- **Action:** Co-developed the app using React and Vercel, focusing on security and usability.
- **Result:** Processed 500+ votes, reduced tallying time by 90%, and received positive feedback from users.

## 3. Questions to Ask Webhouse
- What does a typical project look like at Webhouse?

- What tech stack do you use most often?

- How is the team structured, and how do developers collaborate?

- What does success look like for someone in this role?

- What are the next steps after this call?

## 4. Logistics Checklist
- Test internet, camera, and mic before the call
- Have resume and portfolio open for reference
- Dress neatly and be ready 5 minutes early

## 5. Extra Interview Preparation

### Behavioral & Soft Skills
- Prepare examples of teamwork, leadership, and problem-solving (e.g., leading a student org, collaborating on group projects, handling client feedback).
- Be ready to discuss how you handle deadlines, prioritize tasks, and learn new technologies quickly.
- Practice answers to: "Tell me about a challenge you faced and how you overcame it," and "How do you handle feedback or mistakes?"

### Technical Deep-Dive
Review your own code and be ready to explain your design decisions:
“I choose technologies based on project requirements, scalability, and maintainability. For example, I use React and Next.js for fast development and good SEO, and Supabase for managed authentication and database.”

How you handled authentication:
“I use Supabase Auth for secure managed user authentication. I implement protected routes on the frontend and verify tokens on the backend to ensure only authorized users can access sensitive data.”

How you optimized performance:
“I optimize performance by using code splitting, lazy loading, image optimization, and serving static assets via a CDN. I also monitor app performance and fix bottlenecks as they appear.”

Whiteboard or talk through a simple algorithm:
“To reverse a string in JavaScript: str.split('').reverse().join(''). For API pagination, I calculate the start index as (page-1)*pageSize and return array.slice(start, start+pageSize).”

REST API design:
“I design REST APIs with clear endpoints, use proper HTTP verbs (GET, POST, PUT, DELETE), and return appropriate status codes. I validate input, handle errors gracefully, and document the API for consumers.”

Database schema basics:
“I design normalized schemas to avoid data duplication, use primary and foreign keys for relationships, and add indexes to speed up queries. I plan for migrations to handle schema changes safely.”

Common security practices (e.g., XSS, SQL injection prevention):
“I sanitize and validate all user input, use parameterized queries to prevent SQL injection, and escape output to prevent XSS. I also use HTTPS and secure authentication methods.”

Difference between frontend and backend responsibilities:
“Frontend handles the user interface, user input, and API calls. Backend handles business logic, data storage, authentication, and security. The frontend sends requests, and the backend processes them and returns data.”

### Portfolio Walkthrough
- Have 2–3 projects ready to demo or discuss in detail (what problem they solved, your role, tech used, and results).
- Be ready to share links or screenshare if asked.

### Post-Call Follow-Up
- After the call, send a short thank-you email summarizing your interest and mentioning something specific you enjoyed about the conversation.
- Example: "Thank you for the insightful conversation about Webhouse's approach to product development. I'm excited about the possibility of contributing to your team."

## 6. Explaining Behavioral & Technical Prompts

### Teamwork Example
"In my PSITS Voting System project, I worked closely with other developers. We divided tasks based on our strengths, communicated regularly, and used Git for version control. When conflicts arose, I helped mediate and kept the team focused on our shared goal."

### Leadership Example
"As a student leader, I organized events and managed a team. I delegated tasks, set clear expectations, and motivated members by recognizing their contributions. This taught me how to balance project goals with individual strengths."

### Problem-Solving Example
"While building Tuon, I faced challenges integrating the Groq API for AI features. I broke the problem into smaller parts, researched solutions, and tested iteratively until it worked. This experience improved my debugging and persistence."

### Handling Deadlines & Prioritization
"I use a combination of digital tools and to-do lists to track deadlines and priorities. I break down large tasks into smaller steps, estimate time needed, and adjust my plan as needed. If a deadline is tight, I focus on the most critical features first and communicate early if there are risks."

### Learning New Technologies
"I enjoy learning new tools and frameworks. For example, when I needed to use Supabase for authentication, I read the docs, built a small prototype, and integrated it into my project. I’m comfortable picking up new tech quickly by combining documentation, tutorials, and hands-on practice."

### Challenge/Overcoming Obstacles
"During a freelance project, I encountered a bug that caused the checkout flow to fail on mobile. I reproduced the issue, used browser dev tools to debug, and found a CSS conflict. After fixing it, I added a test to prevent regressions."

### Handling Feedback or Mistakes
"I see feedback as a chance to improve. For example, after a client suggested changes to a website’s checkout flow, I listened, clarified their needs, and quickly iterated on the design. If I make a mistake, I own it, fix it, and document the lesson for next time."

### Explaining Design Decisions
"I chose React and Next.js for most projects because they offer fast development, great performance, and strong community support. For authentication, I used Supabase Auth for secure, managed user sessions. To optimize performance, I used code splitting, lazy loading, and a CDN for static assets."

### REST API, Database, and Security
"I follow REST principles—clear endpoints, stateless requests, and proper HTTP verbs. For databases, I design schemas to avoid duplication, use indexes for performance, and plan for migrations. For security, I sanitize user input, use parameterized queries to prevent SQL injection, and escape output to prevent XSS."

### Frontend vs Backend Responsibilities
"Frontend handles UI, user input, and API calls. Backend handles business logic, data storage, authentication, and security. For example, the frontend collects form data and sends it to the backend, which validates and stores it."

## 7. How to Design Systems Well (Practical Tips)
- **Start with the user:** Understand the real problem and user needs before writing code. Sketch user flows and map out the main features.
- **Break down requirements:** List all features, then group them into MVP (must-have) and nice-to-have. Prioritize what delivers the most value first.
- **Choose the right stack:** Pick technologies you know will scale and are maintainable. Don’t over-engineer; use proven tools unless there’s a clear reason to try something new.
- **Design for modularity:** Structure code into reusable components (frontend) and clear API endpoints (backend). Use folders and naming conventions that make sense.
- **Plan for data:** Design your database schema early. Think about how data will flow between frontend, backend, and database. Use diagrams if needed.
- **Security and validation:** Always validate user input, handle errors gracefully, and protect sensitive data (e.g., passwords, API keys).
- **Test early and often:** Write tests for critical logic. Manually test user flows. Fix bugs as soon as you find them.
- **Document as you go:** Write clear comments, README files, and API docs. This helps you and others maintain the system later.
- **Iterate and get feedback:** Ship early, gather user/client feedback, and improve the system in cycles.

## 8. How to Scale Systems (Practical Strategies)
- **Design for statelessness:** Make backend services stateless where possible, so you can add more servers easily (horizontal scaling).
- **Use managed services:** Leverage cloud platforms (like Vercel, Supabase, AWS, etc.) that handle scaling, load balancing, and failover for you.
- **Database scaling:** Start with a normalized schema, use indexes for fast queries, and consider read replicas or sharding as you grow. Use caching (e.g., Redis) to reduce database load.
- **API rate limiting:** Protect your system from overload by limiting how many requests a user or client can make per minute.
- **Asynchronous processing:** Offload heavy or slow tasks (like sending emails, processing images) to background jobs or queues (e.g., using tools like Bull, Celery, or cloud functions).
- **CDN for static assets:** Serve images, CSS, and JS from a Content Delivery Network to reduce latency and server load.
- **Monitor and alert:** Set up monitoring (e.g., with Sentry, Datadog, or built-in cloud tools) to catch errors and performance issues early.
- **Automated testing and CI/CD:** Use automated tests and continuous deployment pipelines to safely ship updates as your system grows.
- **Optimize code and queries:** Profile your app to find bottlenecks, and refactor slow code or database queries.
- **Plan for growth:** Regularly review your architecture and be ready to refactor or upgrade components as usage increases.

### Example (Scaling Tuon)
- Started on Vercel for easy auto-scaling and global CDN.
- Used Supabase for managed database and authentication.
- Added caching for frequently accessed data.
- Monitored usage and upgraded resources as user base grew.

#### How to Approach the Technical Deep-Dive
- **Explaining design decisions:**
  - Example: “I chose React and Next.js for the frontend because they allow for fast development, server-side rendering, and good SEO. For authentication, I used Supabase Auth for secure, managed user sessions. To optimize performance, I used code splitting, lazy loading, and a CDN for static assets.”
  - Be specific about trade-offs: “I picked Supabase over Firebase because of its SQL support and open-source nature.”
- **Whiteboarding/talking through algorithms:**
  - Practice explaining a simple algorithm (e.g., how to reverse a string, or how your API paginates results).
    - **Reverse a string (JS):**
      - "To reverse a string in JavaScript, I split it into an array, reverse the array, and join it back: `str.split('').reverse().join('')`. This is efficient for most use cases."
    - **Find the max in an array:**
      - "I loop through the array, compare each value to a variable holding the current max, and update it if I find a larger value. In JS: `Math.max(...arr)`."
    - **Check for palindrome:**
      - "Compare the string to its reverse. If they're equal, it's a palindrome."
    - **FizzBuzz:**
      - "Loop from 1 to n, print 'Fizz' for multiples of 3, 'Buzz' for 5, 'FizzBuzz' for both, else the number."
    - **API pagination logic:**
      - "Given a page and pageSize, I calculate the start index as `(page-1)*pageSize` and return `array.slice(start, start+pageSize)`. For databases, I use SQL's `LIMIT` and `OFFSET`."
    - **Sum all even numbers in an array:**
      - "Filter the array for even numbers, then use `reduce` to sum them."
    - **Remove duplicates from an array:**
      - "Use a Set in JS: `[...new Set(arr)]`."
    - **Count character frequency in a string:**
      - "Loop through each character, use an object to store counts, increment as you go."
  - For API design: “Here’s how I’d design a REST endpoint for /api/products: GET for listing, POST for creating, PUT/PATCH for updating, DELETE for removal. I’d validate input, handle errors, and return clear status codes."
    - **Example answer:**
      - "For a GET /api/products endpoint, I’d fetch products from the database, support pagination with query params like `?page=1&pageSize=10`, and return a JSON array. For POST, I’d validate the request body, insert the product, and return the new product with a 201 status. For PUT/PATCH, I’d check if the product exists, update fields, and return the updated product. For DELETE, I’d remove the product and return a 204 status. I always handle errors with clear messages and proper status codes."
- **REST API, database, and security:**
  - REST: “I follow REST principles—clear endpoints, stateless requests, and proper HTTP verbs.”
  - Database: “I design schemas to avoid duplication, use indexes for performance, and plan for migrations.”
  - Security: “I sanitize user input, use parameterized queries to prevent SQL injection, and escape output to prevent XSS.”
- **Frontend vs Backend responsibilities:**
  - “Frontend handles UI, user input, and API calls. Backend handles business logic, data storage, authentication, and security. For example, the frontend collects form data and sends it to the backend, which validates and stores it.”

#### How to Nail the Portfolio Walkthrough
- **Project storytelling:**
  - “For my Tuon project, the problem was students needed a better way to study. I built an AI-powered platform that generates quizzes from any material. I handled the full stack: React/Next.js frontend, Supabase backend, Groq API for AI, and Vercel for deployment. The result: 1,000+ users in 3 months and great feedback.”
  - “For S&R Pastry Shop, the challenge was to fit a web store into a Messenger/GCash workflow. I designed a custom checkout that copies order details to the clipboard and deep-links to Messenger, making it seamless for the business.”
- **What to highlight:**
  - The problem, your solution, your role, the tech stack, and the impact/results.
  - Be ready to show code snippets, explain architecture, or screenshare the live site.
- **Sharing links/screens:**
  - Have your portfolio, GitHub, and live project links open and ready to share.
  - If asked to screenshare, walk through the user flow and point out interesting technical details or challenges you solved.

### Sample Answers for Interview Prompts

#### Teamwork Example
"In my PSITS Voting System project, I worked closely with other developers. We divided tasks based on our strengths, communicated regularly, and used Git for version control. When conflicts arose, I helped mediate and kept the team focused on our shared goal."

#### Leadership Example
"As a student leader, I organized events and managed a team. I delegated tasks, set clear expectations, and motivated members by recognizing their contributions. This taught me how to balance project goals with individual strengths."

#### Problem-Solving Example
"While building Tuon, I faced challenges integrating the Groq API for AI features. I broke the problem into smaller parts, researched solutions, and tested iteratively until it worked. This experience improved my debugging and persistence."

#### Handling Deadlines & Prioritization
"I use a combination of digital tools and to-do lists to track deadlines and priorities. I break down large tasks into smaller steps, estimate time needed, and adjust my plan as needed. If a deadline is tight, I focus on the most critical features first and communicate early if there are risks."

#### Learning New Technologies
"I enjoy learning new tools and frameworks. For example, when I needed to use Supabase for authentication, I read the docs, built a small prototype, and integrated it into my project. I’m comfortable picking up new tech quickly by combining documentation, tutorials, and hands-on practice."

#### Challenge/Overcoming Obstacles
"During a freelance project, I encountered a bug that caused the checkout flow to fail on mobile. I reproduced the issue, used browser dev tools to debug, and found a CSS conflict. After fixing it, I added a test to prevent regressions."

#### Handling Feedback or Mistakes
"I see feedback as a chance to improve. For example, after a client suggested changes to a website’s checkout flow, I listened, clarified their needs, and quickly iterated on the design. If I make a mistake, I own it, fix it, and document the lesson for next time."

#### Explaining Design Decisions
"I chose React and Next.js for most projects because they offer fast development, great performance, and strong community support. For authentication, I used Supabase Auth for secure, managed user sessions. To optimize performance, I used code splitting, lazy loading, and a CDN for static assets."

#### REST API, Database, and Security
"I follow REST principles—clear endpoints, stateless requests, and proper HTTP verbs. For databases, I design schemas to avoid duplication, use indexes for performance, and plan for migrations. For security, I sanitize user input, use parameterized queries to prevent SQL injection, and escape output to prevent XSS."

#### Frontend vs Backend Responsibilities
"Frontend handles UI, user input, and API calls. Backend handles business logic, data storage, authentication, and security. For example, the frontend collects form data and sends it to the backend, which validates and stores it."


Hi! I’m Jade Mykel Ventic, a student founder and full-stack web developer based in Cebu. I’m passionate about building digital products that are actually used—especially in education and SaaS.

On the front-end, I specialize in React and Next.js with TypeScript and Tailwind CSS, focusing on modern, responsive, and accessible interfaces. I love bringing designs to life and making sure users have a smooth experience.

For the back-end, I’ve worked with Supabase, PHP (Laravel), and Python, handling authentication, payments, and database management. I’ve built and launched several real-world projects end-to-end, including an AI-powered study platform and e-commerce sites for local businesses.

I’m a Dean’s Lister and student leader, but I take the most pride in shipping products that solve real problems. I’m excited about the opportunity to bring my skills and passion to your team. Thank you!