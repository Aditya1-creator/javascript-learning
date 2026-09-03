//  ques1
var arr=[1,2,2,2,3,3,4,4,4,4,5,6,7,1]
var ans=[...new Set(arr)]   // ...-> spread operator  
console.log(ans);           // //set removes duplicates and  ... -> coverts set into array

// Ques 2) Find the second largest number in an array.

var arr2=[1,2,3,4,5,6,7,8,8,9,8]

// unique [1,2,3,4,5,6,7,8,9]  (by using new set)
// sorting (in decending order)
// 1st arr[1] will be the ans 



// sort function ->
// var ans=arr.sort(function(a,b){
//     return a-b; (sorted in asending order )
// })
// var ans =arr.sort(function(a,b){
//     return b-a; (sorted in decending order )
// })


var ans1=[...new Set(arr2)]
var sol=ans1.sort(function(a,b){
    return b-a;
})
console.log(sol);
console.log(sol[1]); // 2nd highest



// var sol=[...new Set(arr2)].sort(function(a,b){
//     return b-a;
// })
// console.log(sol);
// console.log(sol[1]); // 2nd highest



// console.log([...new Set(arr2)].sort(function(a,b){
//     return b-a;
// })[1]);    // gives 2nd highest 



// ques 3) . Sort an array in descending order.
// fat arrow function   

var arrr=[3,6,4,7,6,7,9]
var anss =arrr.sort((a,b)=>b-a);
console.log(anss);


// ques 4). Reverse an array without using .reverse().

var arr4=[1,2,3,4,5,6,7,8,9,98];
var arrr4=[];
for(var i=arr4.length-1;i>=0;i--){
    arrr4.push(arr4[i]);
}
console.log(arrr4);


// ques 5). Find the most frequent element in an array.
let arr5=[3,4,1,3,4,6,7,3]
let obj={}; 

arr5.forEach(function(val){
    obj[val]===undefined?(obj[val]=1):obj[val]++;   // ternary operator

    /* if(obj[val]===undefined){
        obj[val]=1;       
       }
    else{
        obj[val]++;
    }
        */


    // obj.val will search val in object jo ki galat hai 
    // {
    //     val:""  // ye galat hai 
    // }
   
    // obj[val]  
    // {
    //     "3":1

    //     like that 
    // }



});
console.log(obj);



