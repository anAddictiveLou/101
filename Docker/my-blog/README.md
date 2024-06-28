Client (Browser)
       |
       | HTTP Requests (HTML, CSS, JS, API)
       |
       v
  +------------------+
  |      Nginx       |
  |------------------|
  | Static Content   | <-- Serves HTML, CSS, JS from the `public` directory
  | Proxy API Calls  | <-- Forwards API requests to the Express server
  +------------------+
       |
       | Proxy Pass (API requests)
       v
  +------------------+
  |    Express.js    |
  |------------------|
  | Application Logic| <-- Handles dynamic content and API endpoints
  | (API, Routes)    |
  +------------------+
       |
       | Handles API (JSON responses)
       v
  +------------------+
  |     Database     |
  |  (In-memory for  |
  |   simplicity)    |
  +------------------+

