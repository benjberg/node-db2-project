const express = require('express');
const carRoutes = require('./carRouter.js');
const server = express();
server.use(express.json());
server.use('/api/cars', carRoutes);
server.get('/', (req,res) => {
    res.json({message: 'server up'})
})


module.exports = server;