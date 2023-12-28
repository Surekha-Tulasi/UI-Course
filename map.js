//want to transfer the data from one place to anothor place

const students=[
    {name:"Surekha",age:25,gender:"Female"},
    {name:"Siva",age:30,gender:"Male"},
    {name:"Anna",age:35,gender:"Female"},
    {name:"Su",age:40,gender:"male"},

]

var b=students.filter((a)=>a.age>30).map((a)=>a.name);
console.log(b);