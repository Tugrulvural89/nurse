// server.js
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const authMiddleware = require("./authMiddleware");

const app = express();
const port = 3020;

require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});


app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:4000' // Sadece bu kaynağa izin ver
}))



app.post('/submit-form', authMiddleware,  async (req, res) => {
  const { name, email, tel, germanLevel, occupation, birthDate, isActive } = req.body;
  try {
    console.log(name);
    console.log(email);
    console.log(tel);
    console.log(germanLevel);
    console.log(occupation);
    console.log(birthDate);
    console.log(isActive);
      await pool.query(
      'INSERT INTO forms (name, email, tel, germanLevel, occupation, birthDate, isactive) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [name, email, tel, germanLevel, occupation, birthDate, isActive]
    );
    res.status(200).send('Form submitted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));