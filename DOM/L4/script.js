// getattribute and setattribute 
// creating an element
// event (mouse event, scroll event , double click, wheel events ...etc)


var h=document.querySelector('h1')
var att=h.getAttribute('id')
console.log(att);

h.setAttribute('id','hero1')
h.setAttribute('class','hero22')

var img=document.querySelector('#img1')
console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));

img.setAttribute('src','https://plus.unsplash.com/premium_photo-1787303328188-87352d89bfa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8')

//  var img1=document.querySelector('#img1')
//   var img2=document.querySelector('#img2')
//   var btn=document.querySelector('button')

//   btn.addEventListener('click',function(){
//     var img1src=img1.getAttribute('src')
//     var img2src=img2.getAttribute('src')

//     img1.setAttribute('src',img2src)
//     img2.setAttribute('src',img1src)

//   })


// creating an element
var h1=document.createElement('h1');
h1.innerHTML='hello from js '
console.log(h1);

var body=document.querySelector('body')
body.appendChild(h1)

var img=document.createElement('img')
img.setAttribute('src','https://images.unsplash.com/photo-1785294476332-642cbb69e90d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D')

img.style.height='200px'

body.appendChild(img) 

// explore differnt event like click , dblclick , mousewheel , mouse move ets 


var box=document.querySelector('#box')
var grow=0;
box.addEventListener('mousemove', function(dets){
  grow++
  console.log(grow)
  console.log(dets);
    
})





























