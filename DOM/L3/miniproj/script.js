var btn=document.querySelector('#downloadBtn')
var percent=document.querySelector('#percentage')

var grow=0
btn.addEventListener('click',function(){
    var whenStop=setInterval(function(){

           grow++ 
           
      percent.innerHTML=grow+'%'
                        // console.log(grow++)
    },100)

    setTimeout(function(){
      clearInterval(whenStop)
      btn.innerHTML='downloaded'
      btn.style.opacity=0.5
    },100*100)
})

//we can also use if(grow<=100){}  here


       