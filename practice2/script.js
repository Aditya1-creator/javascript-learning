// Map filter reduce 
// var arr=[1,2,3,4];

// //  var ans= arr.map(function(value){
// //     return 1;
// // })

//  var ans= arr.map(function(value){
//     return 14;
// })

// map eek naya array banata hai and us array mein har baar element leke aata hai jp map ke andar se return hoga 


// FOR EACH IN ARRAY
// (return is not allowedd in for each)

// var arr=[1,2,3,4];
// arr.forEach(function(value){
//     console.log(value);
//     console.log('hello');

// })


// 3️⃣ Loops (5 Questions)


// let i;
// for(i=10;i>=1;i--){
//     console.log(i);
// }

// let j=10;
// while(j>=1){
//     console.log(j)
//     j--;
// }


// var i=3;
// while(i<=30){
//     console.log(i);
//     i+=3;
// }

// let sum=0;
// let i=1;
// while(i<=100){
//     sum=sum+i;
    
//     i++;
// }
// console.log(sum);

var sum=0;
for(let j=1;j<=100;j++){
     sum=sum+j;
}
console.log(sum);

 // Use a for...of loop to iterate over the string "JavaScript".

 var str="javascript";

 for(var i of str){
    console.log(i);    // for of loop 
 }


// 4️⃣ Arrays (5 Questions)  (using js in build function)
  // 16. Remove duplicate values from an array.

    var arr=[1,2,2,3,5,5,6,6,6,6,7];

    // * IMPORTANT-> var arr2=arr it is not copy arr ki original value chali gayi change in arr2 will reflect in arr also (array pass by reference hota hai)


    //var arr2=[...arr];  // Pass by Value->Copy of variable is passed


    var ans5 =[...new Set(arr)]  //set removes duplicates and  ... -> coverts set into array
    console.log(ans5);
