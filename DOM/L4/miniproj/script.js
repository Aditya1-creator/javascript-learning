// image generation 
// var btn=document.querySelector('button')
// var body=document.querySelector('body')

// btn.addEventListener('click',function(){
//  var img=document.createElement('img')
//  img.setAttribute('src','https://images.unsplash.com/photo-1787240663846-598e1033a919?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// )
// img.style.height='200px'
// body.appendChild(img);

// })

//  mini proj 2

btn.addEventListener('click', function () {

    var x = Math.random() * 100
    var y = Math.random() * 100

    var images = [
        './img1.png',
        './img2.png',
        './img3.png',
        './img4.png'
    ]

    var randomIndex = Math.floor(Math.random() * images.length)

    var img1 = document.createElement('img')

    img1.setAttribute('src', images[randomIndex])

    img1.style.height = '200px'
    img1.style.position = 'absolute'
    img1.style.left = x + '%'
    img1.style.top = y + '%'

    body.appendChild(img1)
})
