function Tofee(name){
    this.name=name;
    this.price=10;
}

let t1=new Tofee("alpha");
let t2=new Tofee("dairy");

// jab bhi constructor banaoge aur kuch aisa mil gaya jo
// ki sabmein same hai to use kabhi bhi direct constructor
// mein banana galat tareeka hota hai, par sahi tareeka hai
// prototype ka use karna kyuki prototype mein save karne par
// jitne bhi new ke saath instance banaoge wo saare instance
// by default tumhaari prototype ki value ko hold karenge

 function Tofeee(name){
    this.name=name;
   
}

Tofeee.prototype.price=3; // check price it is in  tofeee.prototype
let t3=new Tofeee("alpha");
let t4=new Tofeee("dairy");

function Human(name,age,isHandsome){
this.name=name;
this.age=age
this.isHandsome=isHandsome


}
Human.prototype.sayHello=function(){
    console.log('helo')
}

let t5=new Human("'adi'",20,"yes")
console.log(t5)


// sabse phle property ko aapke object me search karenge nhi mila to prototype me dhundte hai



function A(name){
  this.name=name
  this.price=10;

}
A.prototype.price=100;                    
// sabse phle property ko aapke object me search karenge nhi mila to prototype me dhundte hai

let x=new A("kacha aam");

// every thing in js is object 

// function Choco(name){
//     this.name=name;
//     this.printMyname=function(){
//         console.log("kachaaam ")
//     }

// }

// let y= new Choco("kachaaam");
// let z= new Choco("mangobite");

// y.printMyname();
// z.printMyname();     // both gives kachaaam because it is hardcoded in printmyname   


function Choco(name,price){
    this.name="#"+name;
    this.price=price
    this.printMyname=function(){
        // console.log(name)
        console.log(this.name)
    };
    this.printMyprice=function(){
         console.log(price)
    };

}

let y= new Choco("kachaaam");
let z= new Choco("mangobite");

y.printMyname();
 z.printMyname();    //now it will give kachaaam and mangobite because in printmyname we pass name

 y.printMyprice();
 z.printMyprice();  


 function Employee(name,age,id){
    this.name=name;
    this.age=age;
    this.id=id;


 }

 Employee.prototype.printdetails=function(){
    console.log(`${this.name} is my name and i am ${this.age} years old and my id is ${this.id}`);
 };

 let ans =new Employee("aditya",20,2020);
 let ans1= new Employee("www",29,34689)
 ans.printdetails();
 ans1.printdetails();