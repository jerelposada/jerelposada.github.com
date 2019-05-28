console.log("hola mundo desde java scripts");
// para manipular el dom llamamos el 
//objeto document
//let links= document.querySelectorAll("td");
//console.log(links);

/*

este es un bloque de comentario

*/



/*celdas.forEach(function(td)
{
    td.addEventListener('click',function()
    {
        console.log("clik");
    });
});*/

/*let content= document.querySelector('.content');

links.forEach(function(links)
{
    links.addEventListener('clik',function()
    {
        console.log(" imprime una cara feliz");
    });
});

/*let iconos =document.querySelectorAll("i");
iconos.forEach(function(icono)
{
    icono.classList.remove("fas");
    icoco.classList.add("fas");
});*/

let links= document.querySelectorAll(".close");

links.forEach(function(links)
{
    links.addEventListener("click",function(ev)
    {
        ev.preventDefault();
        let content=document.querySelector('.content');

        // a continuacion vamos a quitarles las clases a la animacion

        content.classList.remove("heartBeat");
        content.classList.remove("animated");

        // a continuacion vamos agregar las clases de animacion
        content.classList.add("animated");
        content.classList.add("fadeOutUp");

        setTimeout(function()
        {
            location.href ="/restaurant";
        },600);
        

        return false;
    });
});