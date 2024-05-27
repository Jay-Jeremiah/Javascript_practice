// functions can be included in objects

const person = {
    firstName: "Harry",
    lastName: "Jay",
    id: "S23B13/023",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById('demo').innerHTML = person.fullName();