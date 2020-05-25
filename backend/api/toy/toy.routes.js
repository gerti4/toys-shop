'use strict';

const express = require('express');
const {getToys,getToy,removeToy,updateToy,addToy} = require('./toy.controller')

const router = express.Router();



router.get('/',getToys)
router.get('/:id',getToy)
router.delete('/:id',removeToy)
router.put('/:id',updateToy)
router.post('/',addToy)


module.exports = router;

