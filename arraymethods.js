const students=["Sureka","siva","ajay","shivaji"];

//used to const so unable to redeclare or reassign or del so that i am using array methods to change the aray

students.push("Tata");
//added end of the array Tata
console.log(students);
//[ 'Sureka', 'siva', 'ajay', 'shivaji', 'Tata' ]

students.pop();
//automatically last one in array will be delete
console.log(students);
//[ 'Sureka', 'siva', 'ajay', 'shivaji' ]

students.unshift("Tulasi");
//added Start of the array Tulasi
console.log(students);
//[ 'Tulasi', 'Sureka', 'siva', 'ajay', 'shivaji' ]


students.shift();
//Removed Start of the array Tulasi
console.log(students);
//[ 'Sureka', 'siva', 'ajay', 'shivaji' ]