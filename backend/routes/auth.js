const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  console.log('Login attempt:', {
    providedUsername: username,
    expectedUsername: process.env.ADMIN_USERNAME,
    passwordMatch: password === process.env.ADMIN_PASSWORD
  });
  
  if (username === process.env.ADMIN_USERNAME && 
      password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    console.log('Authentication successful, token generated');
    res.json({ token });
  } else {
    console.log('Authentication failed');
    res.status(401).json({ 
      message: 'Invalid credentials',
      debug: process.env.NODE_ENV === 'development' ? {
        providedUsername: username,
        expectedUsername: process.env.ADMIN_USERNAME,
        passwordMatch: password === process.env.ADMIN_PASSWORD
      } : undefined
    });
  }
});

module.exports = router;
