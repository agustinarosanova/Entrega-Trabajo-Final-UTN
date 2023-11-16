
let cajasoltar_1= document.getElementById("cajasoltar_1");

let img1= document.getElementById("imagen1");


img1.addEventListener('dragstart',(evento)=>{
    evento.dataTransfer.setData("Text","../images/rompe2.png")
})


cajasoltar_1.addEventListener("dragover", (evento)=>{
    evento.preventDefault()
})

cajasoltar_1.addEventListener('drop',(evento)=>{
    evento.preventDefault();
    let data_img1= evento.dataTransfer.getData('Text');
    cajasoltar_1.innerHTML=`<img id="imagen1" src="${data_img1}"/>`;
})

img1.addEventListener('dragend',(evento)=>{

    img1.style.display="none"
    
})

//------

let cajasoltar_2= document.getElementById("cajasoltar_2");

let img2= document.getElementById("imagen2");

img2.addEventListener('dragstart',(evento)=>{
    evento.dataTransfer.setData("Text","../images/rompe1.png")
})


cajasoltar_2.addEventListener("dragover", (evento)=>{
    evento.preventDefault()
})

cajasoltar_2.addEventListener('drop',(evento)=>{
    evento.preventDefault();
    let data_img2= evento.dataTransfer.getData('Text');
    cajasoltar_2.innerHTML=`<img id="imagen2" src="${data_img2}"/>`;
})

img2.addEventListener('dragend',(evento)=>{

    img2.style.display="none"
    
})

//---

let cajasoltar_3= document.getElementById("cajasoltar_3");

let img3= document.getElementById("imagen3");

img3.addEventListener('dragstart',(evento)=>{
    evento.dataTransfer.setData("Text","../images/rompe3.png")
})


cajasoltar_3.addEventListener("dragover", (evento)=>{
    evento.preventDefault()
})

cajasoltar_3.addEventListener('drop',(evento)=>{
    evento.preventDefault();
    let data_img3= evento.dataTransfer.getData('Text');
    cajasoltar_3.innerHTML=`<img id="imagen3" src="${data_img3}"/>`;
})

img3.addEventListener('dragend',(evento)=>{

    img3.style.display="none"
    
})




let botonReinicia= document.getElementById('botonReinicia');

botonReinicia.addEventListener('click',()=>{
    window.location.reload();
    
});