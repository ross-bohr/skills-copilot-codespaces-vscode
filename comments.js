// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for GET /comments/:id
// 5. Create a route for DELETE /comments/:id
// 6. Create a route for PUT /comments/:id
// 7. Create a route for PATCH /comments/:id
// 8. Create a route for GET /comments/:id/author
// 9. Create a route for GET /comments/:id/author/:id
// 10. Create a route for GET /comments/:id/post
// 11. Create a route for GET /comments/:id/post/:id
// 12. Create a route for GET /comments/:id/tag
// 13. Create a route for GET /comments/:id/tag/:id
// 14. Create a route for GET /comments/:id/likes
// 15. Create a route for GET /comments/:id/likes/:id

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// 3. Create a route for POST /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});

// 4. Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
    res.send('GET /comments/:id');
});

// 5. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});

// 6. Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    res.send('PUT /comments/:id');
});

// 7. Create a route for PATCH /comments/:id
app.patch('/comments/:id', (req, res) => {
    res.send('PATCH /comments/:id');
});

// 8. Create a route for GET /comments/:id/author
app.get('/comments/:id/author', (req, res) => {
    res.send('GET /comments/:id/author');
});