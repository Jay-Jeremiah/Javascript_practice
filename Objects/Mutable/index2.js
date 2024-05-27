const registration = {
    Name: "Katumba",
    Campus: "Main Campus",
    Course: "BSIT",
    Faculty: "Faculty of Engineering,Design and Technology",
};

// objects can be copied 
//copied objects are referred to as mutable objects
const x = registration;


// mutable objects can be changed but will affect the original cbject
x.Course = "BSCS";

document.getElementById('demo').innerHTML = registration.Name + " " + "studies" + " " + registration.Course + " " + "at" + " " + registration.Faculty;

