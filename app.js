require('dotenv').config();
const express = require('express');
const transporter = require('./config/nodemailer');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/send-email', (req, res) => {
    transporter.sendMail({
        to: 'some@mail.com',
        html: `
        <h1>Bienvenido a nuestro sitio web</h1>`,
    })
    .then(() => res.send({ message: 'Email sent'}))
    .catch(err => res.status(500).send({ message: 'Error sending email' }));
});

app.listen(PORT, () => console.log('server running on port ' + PORT));

