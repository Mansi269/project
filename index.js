const express = require("express");
const app = express();

app.get('/api/hello', (req, res) => {
    res.send('Hello, world!');
  });
  
  const port = 5000; // or any other desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    // Retrieve user data based on the provided ID
    // Send the user data as a response
  });
  app.post('/api/users/:id', (req, res) => {
    const userId = req.params.id;});