const jwt = require('jsonwebtoken');
const User = require('../models/users');

async function authMiddleware(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token is required');
  
  jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(403).send('Invalid token');
    req.userId = decoded.id;

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).send('User not found');

    req.user = user; // Attach user to request
    next();
  });
}

module.exports = authMiddleware;
