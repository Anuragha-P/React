// server.js
const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();
const port = 5000;

app.use(express.json());

// Mock database
const users = [];

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).send('Missing required fields');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user to the mock database
  users.push({ username, email, password: hashedPassword });

  res.status(201).send('User registered successfully');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
