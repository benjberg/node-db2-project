const express = require('express');
const db = require('./carDB.js');
const router = express.Router();

router.get('/', (req, res) => {
    db.getCars().then(cars => {
        res.status(200).json({ data: cars})
    })
})

router.get('/:id', (req,res) =>{
    const id = req.params.id;
    db.getCarsById(id).then(cars =>{
        if(cars){
            res.status(200).json({ data: cars})
        } else {
            res.status(404).json({message: 'car could not be found'})
        }
    })
})

router.post('/', (req,res) =>{
    const newCar = req.body;
    db.insert(newCar).then(car => {
        if(car) {
            res.status(200).json({data: car})
        } else {
            res.status(500).json({message: 'error adding car'})
        }
    })
})

router.
module.exports = router;