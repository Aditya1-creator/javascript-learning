// JSON DATA TO FRONTEND
// EVENT BUBBLING 
// LOCAL STORAGE MANAGE

// foreach is a higher order function

// var arr=[10,20,30,40,50]  

// arr.forEach(function(){   
//     console.log('hello')
// })

// var arr1=['adi','hello','nice']
// arr1.forEach(function(val,idx){   
//     console.log(val,idx)
// })

// var arr2=['adi','hello','nice']
// arr2.forEach(function(idx,val){   
//     console.log(idx,val)
// })

// array of objects 

// var arr=[{
//    user:'aditya',
//    age:20
// },
// {
//     user:'ram',
//     age:19
// },
// {
//     user:'shy',
//     age:18
// }

// ]

// console.log(arr[0].age)

// console.log(arr[2].age)
// arr.forEach(function(val){

// console.log(val.user)

// })

// adding age of all users 

// var sum=0
// arr.forEach(function(val){

// sum=sum+val.age


// })
// console.log(sum)

var arr=[{
   user:'aditya',
   age:20,
   traveller:true,
   isstatus:"strangers",
   img:'https://plus.unsplash.com/premium_photo-1788386987048-f5d95c703b09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D'
},
{
    user:'ram',
    age:19,
    traveller:true,
    isstatus:"strangers",
   img:'https://images.unsplash.com/photo-1788094666586-0cfc7db6fb1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
},
{
    user:'shy',
    age:18,
    traveller:true,
    isstatus:"strangers",
   img:'https://images.unsplash.com/photo-1787639231925-a6fe3006ff77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
}

]

function hero(){
    var sum=''
   arr.forEach(function(elem,idx){
    sum=sum+`<div class="card">
        <img src="${elem.img}" alt="">
        <h1>${elem.user} ${elem.age}</h1>
        <h4>${elem.traveller}</h4>
        <h5>${elem.isstatus}</h5>
        <BUtton id=${idx}>Add friends</BUtton>

        
        </div>`
})
var main=document.querySelector('#main')
main.innerHTML=sum
}
hero();

main.addEventListener('click',function(dets){
  var goldenvalue=(arr[dets.target.id])    // on clicking button we got id and then arr[id]  we got the respective object          
   
  if(goldenvalue.isstatus=='strangers'){
      goldenvalue.isstatus='friends'
  }
  else{
    goldenvalue.isstatus='strangers'
  }
  
  hero()
                                     
})






