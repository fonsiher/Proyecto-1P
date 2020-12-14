
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
    var valorSeleccionado;
    let searchParams = new URLSearchParams(window.location.search);

    var variable = searchParams.get('variable');
    
    select.value = variable;

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

  valorSeleccionado = select.value;
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


  
function mostrarLabel(){
	valorSeleccionado = select.value;
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
var calculo = document.getElementById("calcular");



        sumarA.onclick = function() {
          contadorA.value = Number(contadorA.value) + 1;
          final(calcular(),calcular2());
        };
  
        restarA.onclick = function() {
          contadorA.value = Number(contadorA.value) - 1;
          final(calcular(),calcular2());
        };

        sumarN.onclick = function() {
          contadorN.value = Number(contadorN.value) + 1;
          final(calcular(),calcular2());
        };
  
        restarN.onclick = function() {
          contadorN.value = Number(contadorN.value) - 1;
          final(calcular(),calcular2());
        };

        sumarD.onclick = function() {
          contadorD.value = Number(contadorD.value) + 1;
          final(calcular(),calcular2());
        };
  
        restarD.onclick = function() {
          contadorD.value = Number(contadorD.value) - 1;
          final(calcular(),calcular2());
        };

        /*calculo.onclick = function(){
          final(calcular(),calcular2());
        } */

      function calcular() {
          var numdias = Number.parseFloat(contadorD.value).toFixed(2);
          //var precioadulto = Number.parseFloat(contadorA.value*precio).toFixed(2);
          //var adultos = Number.parseFloat(precioadulto*numdias).toFixed(2);
          var descuento = precio * 0.5;
          var ninos = Number.parseFloat(contadorN.value*descuento).toFixed(2);
          var precionino = Number.parseFloat(ninos*numdias).toFixed(2);
          //var total = adultos+precionino;
        //costo.value = Number.parseFloat(adultos+precionino).toFixed(2);
        var precio1  = Number.parseFloat(precionino).toFixed(2);
        return Number.parseFloat(precio1);
    } 
    
    function calcular2() {
      var numdias = Number.parseFloat(contadorD.value).toFixed(2);
      var precioadulto = Number.parseFloat(contadorA.value*precio).toFixed(2);
      var adultos = Number.parseFloat(precioadulto*numdias).toFixed(2);
      //var descuento = precio * 0.5;
      //var ninos = Number.parseFloat(contadorN.value*descuento).toFixed(2);
      //var precionino = Number.parseFloat(ninos*numdias).toFixed(2);
      //var total = adultos+precionino;
       var precio2 = Number.parseFloat(adultos).toFixed(2);
    //costo.value = Number.parseFloat(precionino).toFixed(2);
      return Number.parseFloat(precio2);
    }

    function final (precio1, precio2){
        var total = precio1 + precio2;
        costo.value = total; 
    }
          
        
    


        
        
