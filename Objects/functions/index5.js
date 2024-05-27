const person = {
    firstName: 'John',
    lastName: 'Doe',
    id: 5566,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
    // this means refers person then the property
};

document.getElementById('demo').innerHTML = person.fullName();