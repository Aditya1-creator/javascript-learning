
// rest parameter
// function abcd(a,b,c,...chacha){
//      console.log(a,b,c,chacha)
// }
// abcd(1,2,3,4,5,6,8,9,0)

//hoisting -> variables and functions me  js declaration wala part top pe move kar deta hai like var a top pe aa jata hai this is called hoisting

console.log(a)
var a=3;

abcde();
function abcde()
{                                  // function call phle hua but fuction define uske baad hua hai this is hoisting
    console.log('hello');
}
// iife(immdiately invoked funtion expresssion)

// (function xyz(){
//  var a=12;               // here a is private means a becomes private it wont be global
// })();

// var ans=(function abcdef(){
//     var a=50;
//     return a;     // iife function hai to return yahi hoga to store karne ke liye var ans liya 
// })();

// var ans =(function xyzz(){
//     var a=32;

//     return{
//         Set: function(val){
//             a=val;
//         },
//         get: function(){
//             console.log(a);
//         },
//     };
// })();

// ans.Set("76");
// ans.get();


var adi=(function adityalibrary(){
    // var x=0;   // not exposed globally it is a private variable
    return{
        imageeffect: function(){
            console.log('image effect')
        },

        mouseFollower: function(){
            console.log('follower')
        },
    };
})();

adi.imageeffect();    // output -> image effect








// hofs -> higher order function -> eek aisa function jo yaa return kare function nahito accept kare function in parameter , ya phir dono 

// function sde(){
//     return function(){
//         console.log('hehehe')
//     }
// }
// sde()();


function sde(){
    return function(){
        return function(){
           console.log('hehehe')
        }
    }
}
sde()()();      //or var ans=sde()(); 
                          // ans();

  
function tyg(val){
    val();

}

tyg(function(){
 console.log('hstuyysuug');
})



// call back function -> kisi function me jo function pass hota hai call karte wakt ussee call back fnc khte hai 

function ydiu(value){
                          // hofs because it is accepting function in parameter 
}

ydiu(function(){
    console.log('hgsafvjhvsj')    // function pass hua hai ydiu ko call karte time jo function bhega hai wahi hai call back and jisme bhej diya hamne value me bheja hai to wo function higher order hai 
})

// in easy lang argument me pass hone wala function call back and parameter me pass hone wala higher order


// first class function -> function ko value ki tarah yse kar skte ho 

var b=function(){
                       // variable me function store ho skta hai 
}


// **Pure function:**

// - Given the same input, always returns the same output.
// - No side effects (doesn't change anything outside itself).


function add(a, b) {
    return a + b;
}
// Pure: add(2, 3) is always 5. Nothing outside changes.


// **Impure function:**

// - Output may vary, OR it changes something outside (modifies a global variable, logs to

let total = 0;
function addToTotal(n) {
    total += n;       // side effect — changes outer variable means total is outside function scope initially but we modified the total so this is impure function
    return total;
}  


// global scope amd local scope-> read about it


var a=5;  // global
function uydeug(){

}

function gsu(){
    var d=78 // local
}

// closures  -> eek concept hai jisme function return katra hai ek aur function and return function me use karte ho parent function ka koi data 
function xyzc (){
    var g=9;
    return function(){
        console.log(g)
    }
}
var ans1=xyzc();
ans1();

// xyzc()();


