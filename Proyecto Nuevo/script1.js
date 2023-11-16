
/* Reproducción del video ... */ 


let video=document.getElementById("video");
let duracion= document.querySelector("#duracion");
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");



playBoton.addEventListener('click',()=>{
    video.play();
 
});

pauseBoton.addEventListener('click',()=>{
    video.pause();
    
});



/*duracion*/


window.addEventListener('load',()=>{

    duracion.textContent= transformacion(video.duration);

})

const transformacion =(tiempo)=>{

    let minutos = Math.floor(tiempo / 60);
    let segundos = (tiempo % 60);
    return `${minutos}:${segundos.toFixed(0).padStart(2,'0')}`;
}


let numero = 4.41
numero = numero.toFixed(2);


{}

