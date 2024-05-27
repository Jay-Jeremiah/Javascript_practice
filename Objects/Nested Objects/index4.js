const owner = {
    Name: "John",
    age: 20,
    myCars: {
        car1:'Ford',
        car2:'Audi',
        car3:'Benz'
    }
};

document.getElementById('demo').innerHTML = owner.Name + " " + "has" + " " + "a" + " " + owner.myCars.car3;