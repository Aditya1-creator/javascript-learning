// miniproj 1.

var btn=document.querySelector('button')
var body=document.querySelector('body')

btn.addEventListener('click',function(){

  var img=document.createElement('img')
  img.setAttribute('src','https://images.unsplash.com/photo-1786999100475-7fce5e9b60c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8')
  body.appendChild(img)

  
  setTimeout(function() {
    img.setAttribute('src','');
}, 2000);


})

