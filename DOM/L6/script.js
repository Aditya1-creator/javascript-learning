// local storage 
// session storage 
// cookie
// window object 
// child nodes
// class list

// ( explore these topics by your own )


var btn=document.querySelector('button')
btn.addEventListener('click',function(){

 location.href='https://google.com'
//   location.reload();

})

var btn1=document.querySelector('#btn1')
var btn2=document.querySelector('#btn2')

btn1.addEventListener('click',function(){
history.back();

})

btn2.addEventListener('click',function(){
history.forward();

})


// local storage and session storage 
localStorage.setItem("user", 'adii')
// localStorage.clear()
localStorage.getItem('user')

localStorage.setItem("player", 'kohli')
localStorage.removeItem('user')

localStorage.getItem('user')

var arr=[10,2,3,4,5]
localStorage.setItem('array',arr)

var obj={
    user:'adi',
    age:26
}
localStorage.setItem('userr',obj)  // it do not handle object well

var arr1=[
    {
    user:'adi',
    age:26
},
    {
    user:'ram',
    age:20
}
]
var newusers=JSON.stringify(arr1)   // it stringify(in string form ) the object data(json data ) so this way we handle the object in local storage

console.log(newusers)
localStorage.setItem('userrr',newusers)

var user=JSON.parse(newusers)  // it convert the stringfy data to json/ object data form again  


// we can not save object data directly in local storage so we use json.stringfy to converty it into a string 

// and we use json.parse to agin convert from string to json form 

sessionStorage.setItem('hero','adi')

document.cookie='user=adi'

// class list 

var div=document.querySelector('div')

div.classList.add('circle')

// div.classList.remove('circle')

// explore classlisty.toggle

// HW- make a web page with a feature of light and dark mode with the help of classlist and localstorage 