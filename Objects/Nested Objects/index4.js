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

document.getElementById('demo2').innerHTML = owner['Name'] + " " + "also has an" + " " + owner['myCars']['car2'];


// display the object
document.getElementById('demo3').innerHTML = owner