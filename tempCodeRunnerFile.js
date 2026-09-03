function greet(greeting){
    return function(name){
  console.log(`${greeting}${name}`)
    }
}

var ans=greet(function(){
    console,log("hello")
})
ans("adi");