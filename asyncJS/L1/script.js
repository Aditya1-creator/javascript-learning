//javascript  me ho bhi code likhoge wo do type ka ho skta hai synchronous and async
// koi code synchronous ho skta hai aur koi async 

console.log("heyy");  // synchronous 

setTimeout(function(){
    console.log('heyy');    // it is async code 
})


console.log("heyy");
setTimeout(function(){
 console.log('HEY A2')

},1000)

console.log('hey a1')


// hamare code me sbse phle  