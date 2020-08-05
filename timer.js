

var t=document.getElementById("p1");
let m=prompt("Enter minutes");
let s=prompt("Enter seconds");
m=m*60;
let c=Number(s)+Number(m)
console.log(c);
s=c%60>9?c%60:"0"+c%60
    m=Math.floor(c/60)>9?Math.floor(c/60):"0"+Math.floor(c/60);
   
    t.innerHTML=m+":"+s;


var b= document.getElementById("b2")
var b2=document.getElementById("b1")   

function change()
{

    var t=document.getElementById("p1");
    
     s=c%60>9?c%60:"0"+c%60
    m=Math.floor(c/60)>9?Math.floor(c/60):"0"+Math.floor(c/60)
   
    t.innerHTML=m+":"+s;
    if(c>0){
    c--;}
}

 let r
 
b2.onclick=function start(){
     r=setInterval(change,1000);
}

b.onclick=function stop(){
    clearInterval(r);
}

