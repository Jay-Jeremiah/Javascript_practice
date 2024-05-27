const Car = {
    Name: 'Audi',
    Model: 'V20',
    color: 'white'
};

// we can a property using a delete keyword

delete Car.Model;

document.getElementById('demo').innerHTML = Car.Name + " " + "is" + " " + "of" + " " + Car['Model'] + " " + "model.";

