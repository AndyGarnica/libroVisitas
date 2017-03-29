var mostrarTexto = document.getElementById("text");
function obtenerTextPreview(){
  var area = document.getElementById("textoArea").value;

  mostrarTexto.innerHTML= area;
  return mostrarTexto.innerText;
}

function enviar(){

  var textoCopia=mostrarTexto.cloneNode();
  textoCopia.removeAttribute("id");
  var obtenCopia=document.getElementById("contenedorNuevosArticulos");
  textoCopia.innerText=mostrarTexto.innerText
  obtenCopia.appendChild(textoCopia);
  document.getElementById("textoArea").value="";
  mostrarTexto.innerText="";
  mostrarTexto.style="";
}




function textoGrande(){
  document.getElementById("text").style.fontSize = "xx-large";
 }
function textoChico(){
  document.getElementById("text").style.fontSize = "small";
 }
 function textoMediano(){
  document.getElementById("text").style.fontSize = "medium";
 }
 function cambiaColor(){
 	var color=prompt("Introduce codigo RGB para cambiar el color de fuente");
 	var text = document.getElementById("text").style.color = color;

 	return text.innerText;
 }
 function colorFondo(){
 	var color=prompt("Introduce codigo RGB para cambiar el color de fondo");
 	var text = document.getElementById("text").style.backgroundColor = color


 	return text.innerText;
 }
 function alinearIzquierda(){
 	document.getElementById("text").style.textAlign ="left";
 }
function alinearDerecha(){
 	document.getElementById("text").style.textAlign="right";
 }
function alinearCentro(){
 	document.getElementById("text").style.textAlign="center";
 }
function alinear(valor){
  operacion = valor;
  switch(operacion){
    case 1:
    document.getElementById('vincular').style.textAlign = 'left';
    break;
    case 2:
    document.getElementById('vincular').style.textAlign = 'center';
    break;
    case 3:
    document.getElementById('vincular').style.textAlign = 'right';
    break;
  }
}

function textoColor(){
  var elegirColor = prompt('Elija color de texto');
  document.getElementById('vincular').style.color = elegirColor;
}

function fondoColor(){
  var fondo = prompt('Elija un color de fondo');
  document.getElementById('vincular').style.backgroundColor = fondo;
}
