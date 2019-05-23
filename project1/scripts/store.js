let salon = {
    name:"Pretty Pups",
    phone:"843-555-6678",
    address:{
        street:"Wolfe St",
        number:"420",
    },
    workingHours:{
        opens:"1100am",
        closes:"800pm"
    },
    pet:[]

};

let {name,phone,address:{street,number}}=salon;
document.getElementById('info').innerHTML=`<h2> ${name} is located at ${number},${street}. <br> Call us: ${phone} <br>  Our hours of opperation: ${salon.workingHours.opens} to ${salon.workingHours.closes} `;

function Pet(name,age,serviceType,ownerName,contactPhone){
    this.name = name;
    this.age = age;
    this.serviceType - serviceType;
    this.ownerName = ownerName;
    this.contactPhone = contactPhone;

    this.ownerContact = function()
    {
        console.log(" The owner is "+this.ownerName, "and to contact them, call"+this.contactPhone);
    }

}

var pet1 = new Pet("Rori",2,"Nails trimmed","Paul","8438791575");
var pet2 = new Pet("Jovi",1,"Nails trimmed and Full Wash","Ricky","8435557756");

salon.pet.push(pet1);
salon.pet.push(pet2);

pet1.ownerContact();
pet2.ownerContact();

alert("We have "+salon.pet.length + "current visitors.");

document.getElementById('owners').innerHTML=`<h2>Here are the current visitors: <br> ${pet1.name} - Owner: ${pet1.ownerName} <br> ${pet2.name} - Owner: ${pet2.ownerName} <br>`;

document.getElementById('petInfo').innerHTML=`<h2> These are the services your pet will receive <br> ${pet1.name} - ${pet1.serviceType} <br> ${pet2.name} - ${pet2.serviceType}`;