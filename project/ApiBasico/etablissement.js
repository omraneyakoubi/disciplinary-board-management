const express = require('express');
const router = express.Router();
const conexion = require('./config/conexion');

// get all members of the council
router.get('/getetab', (req, res) => {
  const sql = 'SELECT * FROM etablissement';
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
  const sql = 'SELECT * FROM etablissement WHERE id = ?';
  conexion.query(sql, [id], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else if (rows.length === 0) {
      res.status(404).send('etablissement not found');
    } else {
      res.json(rows[0]);
    }
  });
});

// add a new member of the council
router.post('/', (req, res) => {
  const { nom,adresse,tel,email} = req.body;
  const sql = 'INSERT INTO etablissement (nom,adresse,tel,email) VALUES (?, ?, ?,?)';
  const values = [nom,adresse,tel,email];
  conexion.query(sql, values, (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else {
      res.json({ status: 'etablissement Member added' });
    }
  });
});



// delete a etablissement of the council by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  let sql = `DELETE FROM etablissement WHERE id = '${id}'`;
  conexion.query(sql, (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
      return;
    }
    res.sendStatus(204);
  });
});


// update a etablissement of the council by id
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { nom,adresse,tel,email} = req.body;

  let sql = `UPDATE etablissement SET 
              nom = '${nom}',
              adresse = '${adresse}',
              tel='${tel}',
              email='${email}'
            
             
           

              WHERE id = '${id}'`

  conexion.query(sql, (err, rows, fields) => {
      if (err) throw err
      else {
          res.json({ status: 'etablissement modifier avec succ' })
      }
  })
})

module.exports = router;
