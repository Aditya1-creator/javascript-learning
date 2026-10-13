// 1. Simulate a food delivery

// task : create a function orderfood that returns a promise. it should resolve after 2 second with " pizza delivered"

// bonus : add a chance to reject with " delivery failed"

function orderfood(){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            let chance=Math.random()<0.7;
            if(chance){
                 res();
            }
            else rej();
           
        },2000);
        
    });
}

orderfood().then(()=>{
    console.log("pizza delivered... ")
})
.catch(()=>{
    console.log("failed")
})


// 2. chained promises

function getuser(){
    return new Promise((res,rej)=>{
        setTimeout(function(){
        res({id:1,name:"aditya"});
        },1000)
         
    })
}
function getposts(userId){
        return new Promise((res,rej)=>{
            setTimeout(function(){
                res(["title 1" ,"title 2"]);
            },1000)
         
    })
}
function getcomments(postid){
    return new Promise((res,rej)=>{
        setTimeout(function(){
           res(["greet","hello","hiii"])
        })
       
    })
}
getuser().then(function(data){
    console.log(data)
    return getposts(data.id)
})
.then(function(titles){
    console.log(titles);
    return getcomments("ksd")
})
.then(function(cmnt){
    console.log(cmnt);
})
.finally(function(){
    console.log("all data fetched");
});



// 3. Fake api delay

// task : write a function fakeapicall(endpoint) that: 1) accept a string like " user " or " posts" 
                                                     //  2) resolves with some dummy data after a random delay(1-3 sec)

function fakeApicall(endpoints){
   const data= {users:["aditya ","harsh","rahul"],
                posts:["great ","nice","lets go"]};

    let delay=Math.random()*2000 +1000  // 1-3 sec range
    return new Promise(function(res,rej){
        setTimeout(function(){
          res(data[endpoints])
        },delay)
    })
}

fakeApicall("posts").then(function(data){
    console.log(data)
});
