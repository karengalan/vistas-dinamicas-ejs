const express = require('express');
const router = express.Router();

const {home,menu,detalle} = require('../controllers/indexController')

/* GET home page. */
router.get('/', home );
router.get('/menu', menu ); /* Permite ver todo el menu */
router.get('/detalle/:id', detalle );

module.exports = router;
