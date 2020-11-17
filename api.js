const bodyParser = require('body-parser');
const express = require('express'); 
const db = require('./db/db'); 
const app = express(); // Inicia express 
app.use(bodyParser.json()); app.use(bodyParser.urlencoded({ extended: false }));
// get horario 
app.get('/api/horario', function(req, res){  
    res.status(200).send({    success: 'true',    message: 'Horario conseguido satisfactoriamente',    horario: db.horario  }) 
}); 
// Post horario

app.post('/api/horario', function(req, res){
        if(!req.body.title) 
        { return res.status(400).send({ 
                success: 'false', 
                message: 'title es necesario'     
             }); } 
             else if(!req.body.description) { 
                return res.status(400).send({
                            success: 'false',
                            message: 'description es necesario'      
                        }); }   
            const hora = {     
                id: db.horario[db.horario.length-1].id + 1,
                title: req.body.title,
                description: req.body.description}   
                db.horario.push(hora);   
                return res.status(201).send({
                        success: 'true',
                        message: 'Horario añadido',
                        hora   })  
                    });
const PORT = 5000; app.listen(PORT, function(){  console.log(`servidor corriendo en puerto ${PORT}`) });

