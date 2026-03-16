require('./config/conexion');
//const nodemailer = require("nodemailer");
const express = require('express');
const cors = require('cors');
const memberRoutes = require('./member');
const indexRouter = require('./routes/index');
var emailRouter = require('./routes/emailRouter');
const sanctionrouter=require('./sanction');
const etablissementrouter=require('./etablissement');
var emailuser = require('./routes/mailuser');

const port = process.env.PORT || 3000;
// express
const app = express();

// allow CORS
app.use(cors());

// parse JSON
app.use(express.json());

// set port
app.set('port', port);

// routes
app.use('/api', require('./rutas'));
app.use('/member', memberRoutes);
app.use('/', indexRouter);
app.use('/api/mailer',emailRouter);
app.use('/sanction', sanctionrouter);
app.use('/etablissement', etablissementrouter);
app.use('/user/mail',emailuser);





// start express
app.listen(app.get('port'), (error) => {
    if (error) {
        console.log('Error al iniciar el servidor: ' + error);
    } else {
        console.log('Servidor iniciado en el puerto: ' + port);
    }
});
