var num = 100;

addEventListener("message", updateNum);

function updateNum(evt){
        num = evt.data;
}

setInterval(function(){
        postMessage(Math.round(Math.random()*num));
},100);

