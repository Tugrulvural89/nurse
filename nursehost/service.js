const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const authMiddleware = require('./authMiddleware');
const multer = require('multer');
const path = require('path');

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

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });


app.use(bodyParser.json());
app.use(cors({
  origin: 'https://www.avrupadaisebasla.com' // Sadece bu kaynağa izin ver
}));

app.options('*', cors()); // Preflight istekleri işleme
// Statik dosyaları servis etme
app.use(express.static('public'));

app.post('/submit-form', authMiddleware, upload.single('cv'), async (req, res) => {
  const { name, email, tel, germanLevel, occupation, birthDate, isActive } = req.body;
  const cvPath = req.file ? req.file.path : null;


  try {
    const result = await pool.query(
        'INSERT INTO forms (name, email, tel, germanLevel, occupation, birthDate, isactive, cv) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [name, email, tel, germanLevel, occupation, birthDate, isActive, cvPath]
    );

    res.status(200).send('Form submitted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
