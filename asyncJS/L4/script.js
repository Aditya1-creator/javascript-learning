function getusrinfo(){

    return new Promise((res, rej) => {
        setTimeout(function(){
             res({id:1,name:"adi"})
        },1000)
       
    })
}

function getuserpics(id){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(['pic 1','pic 2'])
        },3000)
        
    })
}

getusrinfo().then(function(data){
   console.log(data);
   return getuserpics(data.id);

})
.then(function(data){
    console.log(data);
})



// fetch -> url pe jaake data le ke aata hai 

// fetch-> fetch hamesha eek promise banata hai so .then

var btn=document.querySelector('button');
btn.addEventListener("click",function(){
 fetch("https://api.github.com/users/Aditya1-creator")
.then( rawdata=>rawdata.json())           // fetch hame raw data lake deta so raw data ko readable me hum convert karte hai ->rawdata=>rawdata.json()
.then((data)=>{                           // =>rawdata.json -> return immediatlyanother way is =>{ return rawdata.json }(arrow ke badd no curly braces and curly braces ka difference )
    console.log(data)                    // this is readable data 
})

});


