
    var A1 = document.getElementById('anuncio1');
    var A2 = document.getElementById('anuncio2');
    var A3 = document.getElementById('anuncio3');
    var A4 = document.getElementById('anuncio4');
    var A5 = document.getElementById('anuncio5');
    var A6 = document.getElementById('anuncio6');
    var A7 = document.getElementById('anuncio7');
    var A8 = document.getElementById('anuncio8');
    var A9 = document.getElementById('anuncio9');
    var A10 = document.getElementById('anuncio10');
    var select = document.getElementById('cifrado');

    var precio = 0;
    

  A1.style.display = "none";
  A2.style.display = "none";
  A3.style.display = "none";
  A4.style.display = "none";
  A5.style.display = "none";
  A6.style.display = "none";
  A7.style.display = "none";
  A8.style.display = "none";
  A9.style.display = "none";
  A10.style.display = "none";
  
function mostrarLabel(){
	var valorSeleccionado = select.value;
  if(valorSeleccionado == '1'){
      precio = 45;
        A1.style.display = "block";
  		
          A2.style.display = "none";
          A3.style.display = "none";
          A4.style.display = "none";
          A5.style.display = "none";
          A6.style.display = "none";
          A7.style.display = "none";
          A8.style.display = "none";
          A9.style.display = "none";
          A10.style.display = "none";
    	
  } else if(valorSeleccionado  == '2'){
      precio = 30;
    A1.style.display = "none";
    A2.style.display = "block";
    A3.style.display = "none";
    A4.style.display = "none";
    A5.style.display = "none";
    A6.style.display = "none";
    A7.style.display = "none";
    A8.style.display = "none";
    A9.style.display = "none";
    A10.style.display = "none";
  }
  else if(valorSeleccionado  == '3'){
    precio = 150;
    A1.style.display = "none";
    A2.style.display = "none";
    A3.style.display = "block";
    A4.style.display = "none";
    A5.style.display = "none";
    A6.style.display = "none";
    A7.style.display = "none";
    A8.style.display = "none";
    A9.style.display = "none";
    A10.style.display = "none";

  }
  else if(valorSeleccionado  == '4'){
    precio = 65;
    A1.style.display = "none";
    A2.style.display = "none";
    A3.style.display = "none";
    A4.style.display = "block";
    A5.style.display = "none";
    A6.style.display = "none";
    A7.style.display = "none";
    A8.style.display = "none";
    A9.style.display = "none";
    A10.style.display = "none";

  }
  else if(valorSeleccionado  == '5'){
    precio = 25;
    A1.style.display = "none";
    A2.style.display = "none";
    A3.style.display = "none";
    A4.style.display = "none";
    A5.style.display = "block";
    A6.style.display = "none";
    A7.style.display = "none";
    A8.style.display = "none";
    A9.style.display = "none";
    A10.style.display = "none";

  }
  else if(valorSeleccionado  == '6'){
    precio = 70;
    A1.style.display = "none";
    A2.style.display = "none";
    A3.style.display = "none";
    A4.style.display = "none";
    A5.style.display = "none";
    A6.style.display = "block";
    A7.style.display = "none";
    A8.style.display = "none";
    A9.style.display = "none";
    A10.style.display = "none";

  }
  else if(valorSeleccionado  == '7'){
    precio = 80;
    A1.style.display = "none";
    A2.style.display = "none";
    A3.style.display = "none";
    A4.style.display = "none";
    A5.style.display = "none";
    A6.style.display = "none";
    A7.style.display = "block";
    A8.style.display = "none";
    A9.style.display = "none";
    A10.style.display = "none";

  }
  else if(valorSeleccionado  == '8'){
    precio = 75;
    A1.style.display = "none";
    A2.style.display = "none";
    A3.style.display = "none";
    A4.style.display = "none";
    A5.style.display = "none";
    A6.style.display = "none";
    A7.style.display = "none";
    A8.style.display = "block";
    A9.style.display = "none";
    A10.style.display = "none";

  }
  else if(valorSeleccionado  == '9'){
    precio = 80;
    A1.style.display = "none";
    A2.style.display = "none";
    A3.style.display = "none";
    A4.style.display = "none";
    A5.style.display = "none";
    A6.style.display = "none";
    A7.style.display = "none";
    A8.style.display = "none";
    A9.style.display = "block";
    A10.style.display = "none";

  }
  else if(valorSeleccionado  == '10'){
    precio = 95;
    A1.style.display = "none";
    A2.style.display = "none";
    A3.style.display = "none";
    A4.style.display = "none";
    A5.style.display = "none";
    A6.style.display = "none";
    A7.style.display = "none";
    A8.style.display = "none";
    A9.style.display = "none";
    A10.style.display = "block";

  }

}// end function mostrarInput
       
       
var sumarA = document.getElementById("mas");
var restarA = document.getElementById("menos");
var contadorA = document.getElementById("contador");
var sumarN = document.getElementById("mas2");
var restarN = document.getElementById("menos2");
var contadorN = document.getElementById("contador2");
var sumarD = document.getElementById("mas3");
var restarD = document.getElementById("menos3");
var contadorD = document.getElementById("contador3");
var costo = document.getElementById("costo");

function calcular() {
        
        var precioadulto = Number.parseFloat(contadorD.value*precio).toFixed(2);
        var adultos = Number.parseFloat(contadorA.value*precioadulto).toFixed(2);

        var precionino = Number.parseFloat(contadorD.value*(precio*0.5)).toFixed(2);
        
        var ninos = Number.parseFloat(contadorN.value*precionino).toFixed(2);
        

        costo.value = Number.parseFloat(adultos+ninos).toFixed(2);
  }
        

        sumarA.onclick = function() {
          contadorA.value = Number(contadorA.value) + 1;
          calcular();
        };
  
        restarA.onclick = function() {
          contadorA.value = Number(contadorA.value) - 1;
          calcular();
        };

        sumarN.onclick = function() {
          contadorN.value = Number(contadorN.value) + 1;
          calcular();
        };
  
        restarN.onclick = function() {
          contadorN.value = Number(contadorN.value) - 1;
          calcular();
        };

        sumarD.onclick = function() {
          contadorD.value = Number(contadorD.value) + 1;
          calcular();
        };
  
        restarD.onclick = function() {
          contadorD.value = Number(contadorD.value) - 1;
          calcular();
        };

        
    
calcular();

        
        

