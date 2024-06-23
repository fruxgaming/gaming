const boton = documen.querySelector('button');
const color = document.getElementById('color');

function generarColorAleatorio(){
    let digitos='0123456789ABCDEF';
    let colorHex= '#';

    for(let i=0; i < 6 ; i++){
        let indiceAleatoio = Math.floor(Math.random()*16);
        colorHex += digitos[indiceAleatorio];
    }
    return colorHex;
}

    boton.addEventLstener('click' ,function(){
        let colorAleatorio = generarColorAleatorio();
        // Actualizar el texto.
        color.textcontent = colorAleatorio;
        //Actualizar el color de fondo.
        document.body.style.backgroundColor= colorAleatorio;
});