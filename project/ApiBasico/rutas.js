const router = require('express').Router()
const conexion = require('./config/conexion')
const express = require('express');
const bodyparser=require('body-parser')









//---------- agregamos rutas--------
//get equipos
router.get('/', (req, res) => {
    let sql = 'select * from tb_equipo'
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })

})
//get all etuds
router.get('/etudiant', (req, res) => {
    let sql = 'select * from etudiantconv'
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })

})

// get un equipo
router.get('/:id', (req, res) => {
    const { id } = req.params
    let sql = 'select * from tb_equipo where id_equipo = ?'
    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})
// get date

router.get('/reunion', (req, res) => {
    const { date } = req.body;
    let sql = `select (date)from tb_equipo where date ='${date}'` 
    conexion.query(sql, [date], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})


//agregar equipo
router.post('/', (req, res) => {
    const { date,emplacement } = req.body;

    const sql = 'INSERT INTO tb_equipo(date,emplacement) VALUES (?, ?)';
    const values = [date,emplacement];

    conexion.query(sql, values, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.json({ status: 'equipo agregado' });
        }
    });
});


//insertion etudu
router.post('/addetud', (req, res) => {
    const { nomprenom,cin,genre,email,numtel,nivetud,classe,objet,rapport,quest,conv,id_equipo } = req.body;

    const sql = 'INSERT INTO etudiantconv (nomprenom,cin,genre,email,numtel,nivetud,classe,objet,rapport,quest,conv,id_equipo) VALUES (?, ?,?, ?,?, ?,?, ?,?, ?,?, ?)';
    const values = [nomprenom,cin,genre,email,numtel,nivetud,classe,objet,rapport,quest,conv,id_equipo];

    conexion.query(sql, values, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.json({ status: 'etudiant ajouter avec succ' });
        }
    });
});


//delete etudu
router.delete('/etud/:id', (req, res) => {
    const { id } = req.params;
    let sql = `DELETE FROM etudiantconv WHERE id = '${id}'`;
    conexion.query(sql, (err, rows, fields) => {
      if (err) throw err;
      else {
        res.sendStatus(204);
      }
    });
  });
//get  etudu
// get un etud
router.get('/etud/:id', (req, res) => {
    const { id } = req.params
    let sql = 'select * from etudiantconv where id_equipo = ?'
    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})


//eliminar 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    let sql = `DELETE FROM tb_equipo WHERE id_equipo = '${id}'`;
    conexion.query(sql, (err, rows, fields) => {
      if (err) throw err;
      else {
        res.sendStatus(204);
      }
    });
  });

//modificar
router.put('/edit/:id', (req, res) => {
    const {id}=req.params
    console.log("msgdate",req.body.date)
    console.log("msgemplacement",req.body.emplacement)
  
    let sql = `UPDATE tb_equipo SET 
               
                date = '${ req.body.date}',
                emplacement='${ req.body.emplacement}'
                WHERE id_equipo = ${id}`

    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err
        else {
            res.json({ status: 'equipo modificado' })
        }
    })
})
//----------------------------------



module.exports = router;