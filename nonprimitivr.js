var person={
    name:"surekha",
    age:23,
    onsite:true
}
person.gender="F";
person["Salary"]=760000;

console.log(person);
console.log(person.gender);
console.log(person["onsite"]);
console.log(person["Salary"])



var students=["Sureka","siva","ajay","shivaji"];
console.log(students);
console.log([students[2]]);
console.log(students.length);

console.log(typeof students);





function hi(){
    console.log("welcome dear")
}
 hi();

 function hi(name){
    console.log("welcome dear" , name)
}
 hi("Surekha")

function sum(n1,n2){
    console.log(n1+n2);
}
sum(2,3);
 

function sum(n1,n2){
    return n1+n2;
}
var result=sum(2,7);
console.log(result)