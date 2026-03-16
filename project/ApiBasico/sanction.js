const express = require('express');
const router = express.Router();
const conexion = require('./config/conexion');

// get all members of the council
router.get('/getsanc', (req, res) => {
  const sql = 'SELECT * FROM sanction';
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
  const sql = 'SELECT * FROM sanction WHERE id = ?';
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
  const { nomprenom, sanction, date } = req.body;
  const sql = 'INSERT INTO sanction (nomprenom,sanction,date) VALUES (?, ?, ?)';
  const values = [nomprenom, sanction, date];
  conexion.query(sql, values, (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else {
      res.json({ status: 'Member added' });
    }
  });
});



// delete a sanction of the council by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  let sql = `DELETE FROM sanction WHERE id = '${id}'`;
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
  const { nomprenom, sanction, date } = req.body;

  let sql = `UPDATE sanction SET 
  nomprenom = '${nomprenom}',
  sanction = '${sanction}',
  date='${date}'
             
             
           

              WHERE id = '${id}'`

  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err
    else {
      res.json({ status: 'sanction  modifier avec succ' })
    }
  })
})





module.exports = router;
