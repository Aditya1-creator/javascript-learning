/*   functions in js 
function is a block of code which you can reuse and run at any point of time   */


// function greet(){
//     console.log('hello world');   //function statement

// }


// greet(); // function call


function greet(strange){
    console.log(strange);
}
greet('hey');
greet('hello');
greet('hay');
greet('gtsy');
greet('tbh');
      

// function abcd(a,b,c,d){
//     console.log(a,b,c,d);
// }

// abcd(1,3,4,5);


// function abcd(a,b,chacha){
//     console.log(a,b,chacha);
// }

// abcd(1,3,4,5);

// function abcd(a,b,c){
//     console.log(a,b,c,d);
// }

// abcd(1,3,4,5);

// function abcd(a,b,c,d){     // a,b,c,d is function parameter
//     console.log(a,b,c,d);
// }

//     abcd(1,3,4);     // 1,3,4, is function argument


function abc(){
 // function statement
}

var abcde=function(){
    //function expression
}


// function(){
//     //annonymous function
// }

var arr=[1,2,3,4];
arr.forEach(function(){         //annonymous function
               
})

// ()=>{
//      // fat arrow function
// }

// let x= ()=>{

// }                you can remove () fat  if you want if one argument is pass
// x(7);





// function xyz(){
//     return 12;
// }


// var ans =xyz();     // 12 leke yaha aa ja aur 12 yaha aaya to store to hoga

// console.log(ans);


// fat arrow with implicit return

// var y=()=>8      // automatically return
// var ans1=y();   



// rest parameters => ... 
function abcd(a,b,c,...rest){
    console.log(a,b,c,...rest)
}
 abcd(1,2,3,4,5,5,7,8,9,11);

// hoisting

console.log(a);
var a=12;   // in js it look like this var a ; and a=12
                                     //  and and only var a goes to top means declared variables in js goes to top





