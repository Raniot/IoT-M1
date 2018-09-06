var gpio = require('../gpio/gpio');

module.exports.index = (req, res) => {
    try {
        var hum = gpio.humidityRead();
        var temp = gpio.temperatureRead();
        var pirData = gpio.pirRead();   
    } catch (error) {
        hum = 27;
        temp = 25; 
        pirData = 1;
    }

    res.render('sensors', { title: 'Sensors', humidity: hum, temperature: temp, pir: pirData });
};