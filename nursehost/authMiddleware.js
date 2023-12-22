// authMiddleware.js
require('dotenv').config();
const authMiddleware = (req, res, next) => {
  const apiSecretKey = process.env.REACT_APP_API_SECRET_KEY; // .env dosyasından alınan gizli anahtar
  const apiKey = req.headers['x-api-key'];
  console.log(apiKey);
  console.log(apiSecretKey);
  if (apiKey && apiKey === apiSecretKey) {
    next(); // Anahtar doğruysa, bir sonraki middleware'e geç
  } else {
    res.status(401).send('Yetkilendirme başarısız');
  }
};

module.exports = authMiddleware;
