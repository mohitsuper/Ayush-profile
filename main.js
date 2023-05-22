console.log('Hello World!');

var main = document.querySelector('#main');
   var imga= document.querySelector('#page>img');

main.addEventListener("mousemove",function(dets){
  imga.style.top = dets.y*0.05  + "px";
    imga.style.left = dets.x*0.05 + "px";
        console.log(dets.x);

})