// call back
function getdetails(name,callback){
    setTimeout(function(){
        console.log("sending req to www...")
    },1000)

       setTimeout(function(){
        console.log("fetching data")
    },2000)

       setTimeout(function(){
        callback();
    },5000)

}
getdetails("aditya",function(){
 console.log("data saved ")
})

// koi function ko chalate waqt ye bata dena kaam karne ke baad kon sa function chalanana hai

// function stepone(cb){
//  console.log("step 1");
//  cb();
// }

// function steptwo(cb){
//  console.log("step 2");
//  cb();
// }

// function stepthree(cb){
//  console.log("step 3");
//  cb();
// }

// stepone(()=>{
//     steptwo(()=>{
//         stepthree(()=>{
//             console.log("all callback called")       // callback hell
//         });
//     });
// });


// to solve callback hell we have promises

// server ka code jab bhi server ke liye hoga ususally wo async nhi hoga par nab bhi request kahi aur jaayegi wo kab tak response laayegi ka koi bharosa nhi hai 
//hame jab nhi pata ye code kab chalega we use promice for thia 

// promice-> 1)resolve 2)reject

// for ex we have a promise code and ye code kahi kisi server ke koi data la raha hai(hame nhi pata data kab aayega )
// agar data sahi aa gaya and everything went well then resolve 
// hamamra code galat chala then reject 
// agar resolve chala tab -> then chalta hai
// agar reject chala tab -> catch chalta hai

const pr=new Promise(function(res,rej){
    console.log("insta se data lao");
    console.log("insta me data collect ho raha hai");
    console.log("insta me data collect me error aaya");
    rej();        // reject me catch chalta and resolve me then chalta hai
});

pr.then(function(){
    console.log("resolved");
}).catch(function(){
    console.log("rejected");
});

function stepone(){
    return new Promise(function(res,rej){
     console.log("step 1");
     res();
    });


}

function steptwo(){
     return new Promise(function(res,rej){
     console.log("step 2");
     res();
});

}

function stepthree(){
  return new Promise(function(res,rej){
     console.log("step 3");
     res();
  });

}
stepone()
.then(steptwo)
.then(stepthree)
.then(function (){
    console.log("all steps done")
});