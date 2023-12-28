//1.named function

function sayHi(name){
    console.log("welcome:"+name);

}
sayHi("Surekha")

//2.anonymous function > means no name is there for function

function(name){
    console.log("welcome:"+name);
}

//here we need to call function without name that y we added this function to one varabile ,then we  call the function by using varaible name

var a = function (name) {
  console.log("welcome:" + name);
};
a("Siva");

//3.Arrow function ()=>{}

(name)=>{
    console.log("welcome:" + name);
}
//here we need to call function without name that y we added this function to one varabile ,then we  call the function by using varaible name

var b=(name)=>{
    console.log("welcome:" + name);
}
b("Siv");

