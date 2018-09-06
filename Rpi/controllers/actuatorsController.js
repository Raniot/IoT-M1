var gpio = require('../gpio/gpio');
var led = 'Off';

module.exports.index = (req, res) => {
    res.render('actuators', { title: 'Actuators', ledState: led });
}

module.exports.ledTurnOn = (req, res) => {
    try {
        gpio.ledOn();
        res.render('actuators', { title: 'Actuators', ledState: gpio.ledGetState()});   
    } catch (error) {
        led = 'On';
        res.render('actuators', { title: 'Actuators', ledState: led});  
    }
}

module.exports.ledTurnOff = (req, res) => {
    try {
        gpio.ledOff();
        res.render('actuators', { title: 'Actuators', ledState: gpio.ledGetState()});   
    } catch (error) {
        led = 'Off';
        res.render('actuators', { title: 'Actuators', ledState: led});
    }
}

module.exports.ledToggle = (req, res) => {
    try {
        gpio.ledToggle();
        res.render('actuators', { title: 'Actuators', ledState: gpio.ledGetState()});   
    } catch (error) {
        if(led == 'Off')
            led = 'On'
        else
            led = 'Off'
        res.render('actuators', { title: 'Actuators', ledState: led});
    }
}

module.exports.ledGetState = (req, res) => {
    try {
        res.render('actuators', { title: 'Actuators', ledState: gpio.ledGetState()});   
    } catch (error) {
        res.render('actuators', { title: 'Actuators', ledState: led});
    }
}