var express = require('express');
var router = express.Router();

var controller = require('../controllers/actuatorsController');
router.get('/', controller.index)
    .get('/toggleLED', controller.ledToggle)
    .get('/turnonLED', controller.ledTurnOn)
    .get('/turnoffLED', controller.ledTurnOff)
    .get('/ledstate', controller.ledGetState);

module.exports = router;
