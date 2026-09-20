   // problem - agar tumhe kai sare object create karne ho to tum sarree objects ko alag alag variable me stire karoge iss se aacha hoga tum eek class banao jo naye naye object banaegi aur wo har object apna data hold karega and last me jitne bhi methods honge wo data share karenge 
  
  // old way 
  // constructor function (first letter capital in constructor function name )

  function Cupcake(){
     this.name ="chocolate"
  }


  let cake=new Cupcake()
  console.log(cake);

  function Ghar(){
    this.room=3
    this.kitchen=1
    this.bathroom=2
  }

  let ghar=new Ghar();
  console.log(ghar);

  let ans=new Ghar();
  console.log(ans)

  function Toffee(){
    this.flav="vanilla"
    this.price=2.40
    this.exp="12-12-1212"
  }

  let t1=new Toffee();
  let t2=new Toffee();

  function Cake(flavor,price,taste){
    this.flav=flavor;
    this.price=price;
    this.taste=taste;
  }


  let c1=new Cake("choco",10,"good taste");
  let c2=new Cake("vanilla",100,"bad ");


// agar function ko call karte time ager tumne "new" ka use kar liya to turant man me eek blank object banao 

// and jab bhi function me " this " ko dekho turunt us blank object ko yaad karke us jagah rakhdo 

// this is old way to make objects in js with the help of constructor function because there were no class concept in js at that time 


// new way- class way 


    // har class banate he phli chiz jo bante hai wo naam  constructor hai 
  
// class Tofee{

//     constructor(){
//         this.flav="vcanilla";
//        this.price=10;
//        this.taste="good";
//     }
// }

// let t3=new Tofee();
// console.log(t3);

class Tofee{

    constructor(flavor,price,taste){
        this.flav=flavor;
       this.price=price;
       this.taste=taste;
    }
}

let t3=new Tofee("choco choco",1000,"sweet");
let t4=new Tofee("lava",1000,"salty");