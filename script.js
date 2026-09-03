// // // var ans=(function abcdef(){
// // //     var a=50;
// // //     return a;     // iife function hai to return yahi hoga to store karne ke liye var ans liya 
// // // })();


// // (function xyz(){
// //  var a=12;  
// //  console.log(a);             // here a is private means a becomes private it wont be global
// // })();


// // function sde(){
// //     return function(){
// //         return function(){
// //            console.log('hehehe')
// //         }
// //     }
// // }
// // //sde()()(); 
// // var ans=sde()();
// // ans();


// // var obj={
// //     name:"aditya",
// //     age:20,
// //     email:"asgaxibj@gail.com"
// // }

// // obj.email;

// // console.log(obj.age);


// function xyz(){
//     return 12;
// }


// var ans =xyz();     // 12 leke yaha aa ja aur 12 yaha aaya to store to hoga

// console.log(ans);


// (function xyz(){
//     var a=10;
//     console.log(a);
// })();




// function xyz(){
//     return function(){
//         return function(){
//             console.log("ceg");
//         }
        
//     }
// }

// var x=xyz()();
// x();


// function xyz(val){
// var a=val();
// console.log(a)
// }



// xyz(function(){
//    return a=10;
// })


// . Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).



//  function xyz(val){
//     setTimeout(val,3000)
//  }

//  xyz(function(){
//   console.log("hdhj")
//  })


// 22. Implement your own version of .map() as a higher-order function.
// var arr=[1,2,3,4,5];
//  function mapkicopy(arr,fn){
// var arr1=[];
// for(var i=0;i<arr.length;i++){
//    arr1.push(fn(arr[i]))
// }
// return arr1;
// }

// var ans=mapkicopy(arr,function(val){
//     return val +2;
// });
// console.log(ans);


// 23. Write a function that uses closures to create a counter.

// function counter(){
//     var count=0;
//     return function(){
//         console.log(count)
//          count ++;
         
        
//     }
// }

// var ans=counter();
// ans();
// ans();
// ans();



// implement a function that limits how many times another function can be called (Closure + HOF).



// function limitor(fn,limit){
//     var total=0;

//     return function(){
//         if(total<limit){
//           total++;
//           fn();
//         }
//         else{

//             console.log("free trial ended kidooo")
//         }
       
        
//     };
// }


// var ans=limitor(function(){
// console.log("enjoy free subscription")
// },3);


// ans();
// ans();
// ans();
// ans();



// function xyz(val,int){
//   setInterval(val,int)
// }

// xyz(function(){
//     console.log("hdh")
// },2000)

// function greet(greeting){
//     return function(name){
//         greeting();
//   console.log(`${name}`)
//     }
// }

// var ans=greet(function(){
//     console.log("hello")
// })
// var ans1=greet(function(){
//     console.log("hola")
// })
// ans1("adii");
// ans("adiii")

// function xyz(){
//     let x=false;
//     return function(){
//         if(!x){
//           x=true;
//           console.log("hdh")
//         }
        

//     }
// }

// var ans=xyz();
// ans();
// ans();

// function turnon(){
//     box.style.backgroundColor='yellow'
// }
// var box=document.querySelector('#box')
// var button=document.querySelector('button')

//     button.addEventListener('click',turnon)

// var arr4=[
//   {
//     team:"rcb",
//     pricol:'red',
//     seccol:'green'
//   },
//   {
//     team:"mi",
//     pricol:'blue',
//     seccol:'white'
//   },

//   {
//     team:"csk",
//     pricol:'yellow',
//     seccol:'black'
//   },

//   {
//     team:"gt",
//     pricol:'purple',
//     seccol:'golden'
//   }

// ]


// var box=document.querySelector('#box')
// var btn=document.querySelector('button')
// var teamName=document.querySelector("#h")


// btn.addEventListener('click',function(){
//   var num=Math.floor(Math.random()*arr4.length)
//   var winner=arr4[num];
//   teamName.innerHTML=winner.team
//   box.style.backgroundColor=winner.pricol
// })

var btn =document.querySelector('button')
var h3=document.querySelector('h3')
var flag=0;
btn.addEventListener('click',function(){
  if(flag==0){
     flag++
  h3.innerHTML='friends'
  h3.style.color='green'
  btn.innerHTML='remove friends';
  }
 
  
  else{
    h3.innerHTML='stranger'
     h3.style.color='red'
     btn.innerHTML='add friends'
     flag=0
  }
  
})











        
