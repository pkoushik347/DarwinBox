console.log("hi")
var stud = {
    "id" : 347,
    "name" : "punny"
}
console.log(stud.name);


function greet(user){
    return `Hello ${user}`;
}
var ksk = greet("Koushik");
console.log(ksk);
// ksk.substring()

function valid(user,pass){
//code
return user.endsWith("darwinbox.io") && user.length >= 14;
}
val = valid("koushik.p@darwinbox.io","12345678");
console.log(val);


var arr = [10,20,30,40];
//for
for(let i = 0; i < arr.length; i++)
    console.log(i+"->", arr[i]);
//forEach like enum
arr.forEach(function(ele, key){
    console.log(key+"->" ,ele);
})
//for-in
var jsk = {
    id : 1,
    name : "kskgpt",
    email : "ksk@gmail.com",
}
for(let key in jsk){
    console.log(key,"->",jsk[key]);
}
//for-of
var arr2 = ["val1","val3",{id : 1, name : "kskgpt"},10,20];
for(var ele of arr2){
    console.log(ele);
}
//while
var i = 1
while(i<=5){
    console.log(i);
    i += 1;
}
i += 1
//do while
do{
    console.log(i);
    i += 1;
}while(i<=11);


const greetings = function(usr){
    console.log("hello",usr,usr.length);
}
greetings("koushik pasumarthi");


const myobj = {
    name : "redit",
    age : "347",
    work : function(usr){
        console.log(`hey ${usr} i am ${myobj.name} my age is ${myobj.age}`);
    }
}
myobj.work("darwin");


console.log("\n");
//json of array
const org = {
    koushik : [1, 3, 20],
    sahithi : [2, 2, 34],
    yashaswi : [3, 4, 347],
    nag : [4,5,12],
    vinay : [5,7,27]
}
for(ele in org){
    // console.log(ele);
    if (org[ele][1] >= 4){
        console.log(ele,"of age",org[ele][0]);
    }
}


console.log("\n");
//array of json
const org1 = [
    {
        id : 1001,
        name : "koushik",
        age : 30,
        level : 5,
        sal : 10000
    },
    {
        id : 1002,
        name : "koushik2",
        age : 31,
        level : 6,
        sal : 10000
    },
    {
        id : 1003,
        name : "koushik3",
        age : 34,
        level : 7,
        sal : 10000
    },
    {
        id : 1004,
        name : "koushik4",
        age : 77,
        level : 8,
        sal : 10000
    },
    {
        id : 1007,
        name : "koushik7",
        age : 43,
        level : 7,
        sal : 10000
    },
]
for(ele in org1){
    // console.log(org1[]);
    if(org1[ele].level > 6){
        console.log(org1[ele].name,"of age",org1[ele].age);
    }
}