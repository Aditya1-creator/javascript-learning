// hof call bacck and closure 

function abcddd(val){   // hof jo function accept karte hai as an argument are hof function yaa phir return kare eek aur function
  val();
}
abcddd(function(){
    console.log("heyyy")      // jo function aa bhejte ho callback
})

function abcdd(){      // hof (return kar raha hai eek aur function )
  return function(){
    console.log("hdsgsyuy")
  }
}

abcdd()();


// closures
function xxyz(){
  let s=19;
  return function(){
    console.log(s)
  }
}
xxyz()();



// 5️⃣ JavaScript Advanced HOFs, Callbacks, and Closures (4 Questions)

// Ques 1)Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).
  
function caller(fn){
    setTimeout(fn,3000);
}
caller(function(){
  console.log('heyy')
})


// Ques 2)Implement your own version of .map() as a higher-order function

// .map 

// var arr=[1,2,3,4,5];
// var arr1=arr.map(function(value){
//   return value+2;
// })
// console.log(arr1);

var arr=[1,2,3,4,5];
 function mapkicopy(arr,fn){
var arr1=[];
for(var i=0;i<arr.length;i++){
   arr1.push(fn(arr[i]))
}
return arr1;
}

var ans=mapkicopy(arr,function(val){
    return val +2;
});
console.log(ans);




//  ques 3). Write a function that uses closures to create a counter.
function counter(){
  let count =0;
  return function(){
    count++;
    console.log(count);
  }
}
// counter()();   // gives alwaya 1 output in both cases because everytime count set to 0 again
// counter ()();
var ans=counter();   //yaha par return function baar baarr chal raha hai thats why counter increasing 1 ,2  ,3, 4  
ans();  // 1
ans();   //2 
ans();   //3 



// Ques 4.) Implement a function that limits how many times another function can be called (Closure + HOF).
  

function limitor(fn,limit){
    var total=0;

    return function(){
        if(total<limit){
          total++;
          fn();
        }
        else{

            console.log("free trial ended kidooo")
        }
       
        
    };
}


var ans=limitor(function(){
console.log("enjoy free subscription")
},3);


ans();
ans();
ans();
ans();
