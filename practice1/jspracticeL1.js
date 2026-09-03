// 1️⃣ Console & Basic Operations (5 Questions)

// QUES 1 FIVE WAY TO PRINT OR SHOW HELLO WORLD USING CONSOLE.LOg

// console.log('hello world');
// console.warn('hello world');
// console.error('hello world');
// console.info('hello world');
// console.table({name:"harsh",age:26});

// console.log(typeof"123");

// console.log(typeof 3);

// console.log(typeof null);  // important  type of null is object famous bug of javascript google it to know more about it 

// let a=10;
// let b=24;
// let c;
// c=a;
// a=b
// b=c;


// console.log(a,b);

// let a=10;
// let b=34;
// [a,b]=[b,a];
// console.log(a,b);

// use console.group() to organise logs into a group

console.group('aaj ka kaam');  // console.groupcollasped('aaj ak kaam');
console.log('workout');
console.log("study");
console.log("college");
console.log("gym");
console.groupEnd();

 // nested groups 
console.group('aaj ka kaam'); 
  console.group("today work");
    console.log('study');
    console.groupEnd();
console.log('workout');
console.log("study");
console.log("college");
console.log("gym");
console.groupEnd();



// 2️⃣ Variables & Data Types (5 Questions)

const obj={
    name:"aditya",
    age:20,
    email:'addnod@gmail.com',
};
obj.age=21;  // age is changed of const obj
console.log(obj);

const arr=[1,2,3,4]
arr.pop();
console.log(arr);




const obj1={
    name:"aditya",
    age:20,
    email:'addnod@gmail.com',
};

Object.freeze(obj1); // now we not able to modify the const obj1

obj1.email=('dsyugus@gmail.com') // no change the email of const obj

console.log(obj1);


let x='12';
console.log(Number(x));  // 3 ways to convert string to number(integer)
console.log(parseInt(x));
console.log(+'12');


// let str="javascript";
// console.log(str.includes("script"));

let str="javascript";
console.log(str.indexOf('script'));  // it gives index in case of true and gives -1 in case of false 


let strr="Aditya";
if(strr.indexOf('dgah')===-1){
    console.log(false);
}
else{
    console.log(true);
}

// let strr="Aditya";
// if(strr.search('dgah')===-1){
//     console.log(false);
// }
// else{
//     console.log(true);
// }


// undefined , null , nan -> read about them 

// ques 9->Create an array of 5 numbers and log the sum using .reduce().


var array=[3,5,6,7,4];
var answer=array.reduce(function(acc,val){
    return acc+val
},0)
console.log(answer);