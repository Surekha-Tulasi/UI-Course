var students = [
  "Sureka",
  "siva",
  "ajay",
  "shivaji",
   person=
  {
    name: "surekha",
    age: 23,
    onsite: true,
  },
];

for(i=0;i<students.length;i++){
    console.log(students[i]);
}

//for of is for arrays
for (s of students) {
  console.log(s);
}


//for in is for objects and need to used bracket notattion,if use .noatation undefined will ome
for (siva in person){
    console.log(person[siva]);
}