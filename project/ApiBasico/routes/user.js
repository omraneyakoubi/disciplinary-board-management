const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const { Promise } = require('es6-promise');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_basico"
});

// Register route
router.post('/add', async function (req, res, next) {
  try {
    const { nom, prenom, Nom_Etablissement, email, role, mdp } = req.body;
    if (!mdp) {
      return res.status(400).send({ status: 0, error: 'Password is required' });
    }
    const hashed_password = await bcrypt.hash(mdp.toString(), 10);
    const checkEmail = `SELECT email FROM users WHERE email = ?`;

    con.query(checkEmail, [email], (err, result, fields) => {
      if (err) {
        res.send({ status: 0, error: err });
      } else if (result.length > 0) {
        res.send({ status: 0, error: 'Email already exists' });
      } else {
        const sql = `INSERT INTO users (nom, prenom, Nom_Etablissement, email, role, mdp) VALUES (?, ?, ?, ?, ?, ?)`;
        con.query(sql, [nom, prenom, Nom_Etablissement, email, role, hashed_password], (err, result, fields) => {
          if (err) {
            res.send({ status: 0, error: err });
          } else {
            const token = jwt.sign({ data: result }, 'secret');
            res.send({ status: 1, data: result, token: token });
          }
        });
      }
    });
  } catch (error) {
    res.send({ status: 0, error: error });
  }
});

// Login route
// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }

  const sql = `SELECT * FROM users WHERE email = ?`;

  try {
    const results = await new Promise((resolve, reject) => {
      con.query(sql, [email], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });

    if (results.length === 0) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    const user = results[0];

    const passwordMatch = await bcrypt.compare(password, user.mdp);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    const payload = { id: user.id, username: user.username, email: user.email, role: user.role };
    const token = jwt.sign(payload, 'secret', { expiresIn: '10m' });

    res.json({ status: 1, token, role: user.role });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
});




router.delete('/:id', (req, res) => {
  const { id } = req.params;
  let sql = `DELETE FROM users WHERE id = '${id}'`;
  // Change "conexion" to "con" in the query execution
  con.query(sql, (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
      return;
    }
    res.sendStatus(204);
  });
});

// update a user by id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nom, prenom, nom_etablissement, email, mdp, role } = req.body;

  let sql = `UPDATE users SET 
              nom = '${nom}',
              prenom = '${prenom}',
              Nom_Etablissement = '${nom_etablissement}',
              email = '${email}',
              mdp = '${mdp}',
              role = '${role}'
              WHERE id = '${id}'`;

  con.query(sql, (err, rows, fields) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal server error');
      } else {
        res.json({ status: 'User updated' });
      }
  });
});

// Get all users
router.get('/', (req, res) => {
  const sql = `SELECT * FROM users`;

  con.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.json({ status: 1, data: results });
  });
});

//get user
router.get('/user', (req, res) => {
  const { id } = req.body
  let sql = 'select * from users where id = ?'
  conexion.query(sql, (err, results)  => {
      if (err) throw err;
      else {
        res.json({ status: 1, data: results });
      }
  })
})

module.exports = router;
