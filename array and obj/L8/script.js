// FOR EACH IN ARRAY
// (return is not allowedd in for each)

var arr3=[1,2,3,4];
arr3.forEach(function(value){
    console.log(value);
    console.log('hello');

})


// Map 
// var arr=[1,2,3,4];

// //  var ans= arr.map(function(value){
// //     return 1;
// // })

//  var ans= arr.map(function(value){
//     return 14;
// })

// var arr=[1,2,3,4,5];
// var arr1=arr.map(function(value){
//   return value+2;
// })
// console.log(arr1);

// map eek naya/blank array banata hai and us array mein har baar element leke aata hai jp map ke andar se return hoga


// filter 

var arr=[1,2,3,4];
// var ans=arr.filter(function(value){
//     return true;
// })

// var ans=arr.filter(function(value){
//     return false;
// })

var ans=arr.filter(function(value){
    return value>2;
})


// REDUCE -> bade se array ko single value me reduce kar skte hai 
var arr1=[1,3,4,5]
var ans4= arr1.reduce(function(accumlator,key){
    
    return accumlator+key;
},0)   // 0 is the intial value of accumalator 