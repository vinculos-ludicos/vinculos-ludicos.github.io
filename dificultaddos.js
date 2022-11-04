function shuffle()
{
    const img=document.getElementById("img");
    let randomNumber=Math.floor(Math.random() * 6) +1 ;
    img.setAttribute("src" , `${randomNumber}.png`);
    
}

function anim()
{
    setTimeout(shuffle,2000);
    const img = document.getElementById("img");
    img.setAttribute("src","rollingdice.gif");
    var puntero=document.getElementById('siguiente');
}
function prenda(){
  window.location.href="./prendados.html";
  }

