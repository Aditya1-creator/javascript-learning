// DOM - Document object model
   // it is frontend ki js

// 4 pillers of dom
//   1) selection of html 
//   2) changing html
//   3) changing CSS
//   4) Event listener

// var h1=document.querySelector('h1')
// h1.innerHTML="erhiheiuh"
// //console.log(h1);

// h1.style.color="red"
// h1.style.backgroundColor="yellow"    // backgroung-color(wrong way ) write in camel case    



// // h1.addEventListener('click',function(){
// //     console.log("clicked on h1")
// // })

// // h1.addEventListener('doubleClick',function(){
// //     console.log(" doubleclick on h1 ")
// // })

// h1.addEventListener('click',function(){
//    h1.innerHTML="KOHLI"
//   //console.log(h1);

//   h1.style.color="blue"
//   h1.style.backgroundColor="red" 
// })


// // var box = document.querySelector('#box')
// // or 
// var box=document.getElementById('box')  // selecting by Id

// box.innerHTML='changed'

// // var ans=document.querySelectorAll('h1')   // selecting ALL
// // console.log(ans[0]);
// // ans[0].innerHTML='changed h0'

// // ans[1].innerHTML='changed h1'


// var box1=document.querySelector('#box1')
//  box1.innerHTML='changed' 

//   box.textContent='<h1>changed<h1>'
//   box.innerHTML='<h1>changed<h1>'


//   // event listner

// //  var button= document.querySelector('button')
// //  var box1=document.querySelector('#box1')


// //  button.addEventListener('click',function(){
// //     box1.style.backgroundColor='red'
// //     console.log("helloo")
// //  })   // on clicking button hello print on console and on clicking button box1 bgc chanhges to red 


// var button= document.querySelector('button')
//  var box1=document.querySelector('#box1')

//  function chnagebox1color(){
//     box1.innerHTML="running"
//     box1.style.backgroundColor="white"
//  }


// var button= document.querySelector('button')
//  var box1=document.querySelector('#box1')


//  button.addEventListener('click',chnagebox1color)  // if you do like this chnagebox1color() function automatically call without clicking on button 
  


var btn=document.querySelector('button')
var h3=document.querySelector('h3')
var flag=0


btn.addEventListener('click',function(){
   if( flag ===0){
       h3.innerHTML='FRIENDS'
      h3.style.color='green'
       btn.innerHTML='remove friends'
       console.log('friendship done')
       flag=1
   }
   else {
      h3.innerHTML='stranger'
     h3.style.color='red'
     btn.innerHTML='add friends'
   console.log('friendship broke')

   flag=0;
   }
  
})




