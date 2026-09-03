
// read about methods in js 

// math.random()  give random number between 0 to 1(excluding)


// var num =Math.random();
// var num=Math.random()*10;

// var num =Math.random()*100;
// var num2=Math.floor(num)
// console.log(num2);



// var num3=Math.floor(Math.random()*100)

// console.log(num3);

// var a=19
// console.log(`helllo ${a+10}`)

//RANDOM COLOR GENERATOR


// var btn=document.querySelector('button')
// var box=document.querySelector('#box')

// btn.addEventListener('click',function(){
//     var c1=(Math.floor(Math.random()*256));
//     var c2=(Math.floor(Math.random()*256));

//     var c3=(Math.floor(Math.random()*256));

//     box.style.backgroundColor=`rgb(${c1},${c2},${c3})`


// })



//var arr=['rcb','mi','csk','kkr','dc','rr','srh','lsg','pbks','gt']
// console.log(arr.length);
// console.log(arr.length-1)  // last element ka index

// var num=Math.floor(Math.random()*arr.length)

// console.log(arr[num]);


// var arr = ['rcb','mi','csk','kkr','dc','rr','srh','lsg','pbks','gt']

// var btn = document.querySelector('#bt')
// var h1 = document.querySelector('h1')

// btn.addEventListener('click', function(){
//     var num = Math.floor(Math.random() * arr.length)
//     var winner = arr[num]
//     h1.innerHTML = winner
// })


var arr4=[
  {
    team:"rcb",
    pricol:'red',
    seccol:'green'
  },
  {
    team:"mi",
    pricol:'blue',
    seccol:'white'
  },

  {
    team:"csk",
    pricol:'yellow',
    seccol:'black'
  },

  {
    team:"gt",
    pricol:'purple',
    seccol:'golden'
  }

]

// console.log(arr);
// console.log(arr4[2].pricol);


var btn=document.querySelector('#bt')
var h1=document.querySelector('h1')

btn.addEventListener('click',function(){
    var num=Math.floor(Math.random()*arr4.length)
    var winner=arr4[num]
    h1.innerHTML=winner.team   // winner is an object
    h1.style.backgroundColor=winner.pricol
    //h1.style.backgroundColor=winner.seccol
})
