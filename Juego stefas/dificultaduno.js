function shuffle()
{
    const img=document.getElementById("img");
    let randomNumber=Math.floor(Math.random() * 6) +1 ;
    img.setAttribute("src" , `${randomNumber}.png`);
    
}


function prenda(){
  window.location.href="./prendauno.html";
  }

  const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};

function anim()
{
    setTimeout(shuffle,2500);
    const img = document.getElementById("img");
    img.setAttribute("src","rollingdice.gif");
    var puntero=document.getElementById('siguiente');

    const sonido = cargarSonido("./dado.mp3");
    sonido.play();}
