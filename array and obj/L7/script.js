// array and object 
// var a=12;
// var b=32;

// craetion ->[]
// how to access 
// var c=[1,2,3,4,5,6,7];
// var arr=[9,0,7,3];

// console.log(arr[2]);

var arr2=new Array(); // or var arr=[]   // both are creation methods of array
arr2[0]=11;
arr2[1]=32;
arr2[2]=76;

// when you have to make blank array then use this method var arr[] or like this var arr[1,2,3,4,5]

// ek array jo 100 size ka ho 
// var arr=new Array(100)  // 100 size ka empty array    

var arr3 = new Array(30);

for(var i =0;i<30;i++){
    arr3[i]=i;
}

var arr5=[1,2.4,true,[],"aditya"] // valid in js 


// homogenous -> same type of value 
// in js array is not homogenous

var arr6=["a",12,function() {},[],NaN, undefined]


// Map filter reduce


// OBJECT 
// what is object-> in js object key value pairs ko hold krneka

// var obj={
//     // property:Value,

//     name: "harsh",
//     age: 26,
//     email:"test@gmail.com",

// };


var z ={
    name:"phone",
    color:"white",
    price: 10000,
    isavaliable:false,
}


// when you want to store the info of one entity then make object

// creation of obj 
//1)  var obj={}
//2) var obj2=new Object();

// how to acces an object

var obj={
    name:"aditya",
    age:20,
    email:"asgaxibj@gail.com"
}

obj.email;

obj.age;

// obj[] -> read about it 
 //  Find the most frequent element in an array.
let arr5=[3,4,1,3,4,6,7,3]
let obj={}; 

arr5.forEach(function(val){
    obj[val]===undefined?(obj[val]=1):obj[val]++

})

// obj.val object me val dudhega jo ki galat hai 
// obj[val]  // 1st val is equal to 3 and this 3 is not present in obj because obj is blank initially it show undefined according to our condition if undefined set it 1
//  // obj ke andar 
//  {
//     "3":1 
//      "4":
     
//      like that 
//  }