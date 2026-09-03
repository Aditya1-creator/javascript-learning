// what is web api read about it 

// setTimeout-> delay  

// setInterval->


// console.log('hello1')
// setTimeout(function(){
// console.log('hello2')
// },3000)

// console.log('hello3')

var btn=document.querySelector('button')
var h3=document.querySelector('h3')
var flag=0;

btn.addEventListener('click',function(){
        if(flag==0){
          h3.innerHTML='req sending'
         h3.style.color='gold'
         btn.innerHTML='adding'
        setTimeout(function(){
             h3.innerHTML='friends'
             h3.style.color='green'
             btn.innerHTML='remove friends'
             },3000) 
         flag++
        }
       
        else{
          h3.style.color='red'
            h3.innerHTML='request removing'
            btn.innerHTML='removing ..'
          
          setTimeout(function(){
          h3.style.color='red'
          h3.innerHTML='strangers'
          btn.innerHTML='add friend'
        },2000)
          
          flag=0;
        }
                                    // after 3 sec friend will show 
  
})

// hw->extend the features of that above mini project - use flag concept so that remove button also works 



// setInterval -> controlled loop 

// setInterval(function(){
//  console.log('hello')
// },1000)

// var a=0
// setInterval(function(){
//     a++
//     console.log(a)
// },1000)

// how to stop ineterval

// var i=0
// var stop=setInterval(function(){
//     i++
//     console.log('hello')
// },100)

// setTimeout(function(){
//   clearInterval(stop)
// },4000)    // stops at 4th second








