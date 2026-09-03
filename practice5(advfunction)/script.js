//ques 1.) 

// function abc(fn,time){
//     setInterval(fn,time);
// }

// abc(function(){
//     console.log("hiii")
// },2000)



//ques 2.) 

function greet(greeting){
    return function(name){
        console.log(`${greeting}${name}`);

    }
}

var ans=greet("hello ");
ans('adi');
ans('adityaa ');

var spanish=greet("hola ")

spanish("aditya ");


function greetsetup(greeting){
   return function(name){
    console.log(`${greeting} ${name}`)

   }
}
var india=greetsetup("namaste")
india("aditya")
// greetsetup("namaste")("dsjkbk");

var england=greetsetup("hello")
england("aditya")


// ques 3.) 
function onlyoncecaller(cb){
    let executed=false;
    return function(){
        if(!executed){
            executed=true;
            cb();
        }
        else{
          console.log("you are trying to run 2nd time ")
        }
    }
}

var newfnc=onlyoncecaller(function(){
    console.log("bhai")
})

newfnc();
newfnc();
newfnc();     // only executed once 



// ques 4.) 

