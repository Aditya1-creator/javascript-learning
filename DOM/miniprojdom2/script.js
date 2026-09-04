// proj 2 (custom cursor)
var main=document.querySelector('#main')
var cursorr=document.querySelector('#cursor')

main.addEventListener('mousemove',function(dets){
 cursorr.style.left=dets.x+"px"
 cursorr.style.top=dets.y+"px"

})