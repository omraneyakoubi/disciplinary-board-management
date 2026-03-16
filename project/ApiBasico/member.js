const express = require('express');
const router = express.Router();
const conexion = require('./config/conexion');

// get all members of the council
router.get('/getmbr', (req, res) => {
  const sql = 'SELECT * FROM membres_de_conseil';
  conexion.query(sql, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else {
      res.json(rows);
    }
  });
});

// get a member of the council by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM membres_de_conseil WHERE id = ?';
  conexion.query(sql, [id], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else if (rows.length === 0) {
      res.status(404).send('Member not found');
    } else {
      res.json(rows[0]);
    }
  });
});

// add a new member of the council
router.post('/', (req, res) => {
  const { nom, prenom ,tel,email,mdp,etablissement} = req.body;
  const sql = 'INSERT INTO membres_de_conseil (nom, prenom,tel,email,mdp,etablissement) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [nom, prenom,tel,email,mdp,etablissement];
  conexion.query(sql, values, (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else {
      res.json({ status: 'Member added' });
    }
  });
});



// delete a member of the council by id
// delete a member of the council by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  let sql = `DELETE FROM membres_de_conseil WHERE id = '${id}'`;
  conexion.query(sql, (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
      return;
    }
    res.sendStatus(204);
  });
});


// update a member of the council by id
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { nom, prenom ,tel,email,mdp,etablissement} = req.body;

  let sql = `UPDATE membres_de_conseil SET 
              nom = '${nom}',
              prenom = '${prenom}',
              tel='${tel}',
              email='${email}',
              mdp='${mdp}',
              etablissement='${etablissement}'
             
           

              WHERE id = '${id}'`

  conexion.query(sql, (err, rows, fields) => {
      if (err) throw err
      else {
          res.json({ status: 'membre modifier avec succ' })
      }
  })
})

module.exports = router;
