var anuncios1 = ['img/anuncio1.1.png','img/anuncio1.2.png','img/anuncio1.3.png'],
    anuncios2 = ['img/anuncio2.1.png','img/anuncio2.2.png','img/anuncio2.3.png'],
    anuncios3 = ['img/anuncio3.1.png','img/anuncio3.2.png','img/anuncio3.3.png'],
    anuncios4 = ['img/anuncio4.1.png','img/anuncio4.2.png','img/anuncio4.3.png'],
    anuncios5 = ['img/anuncio5.1.png','img/anuncio5.2.png','img/anuncio5.3.png'],
    anuncios6 = ['img/anuncio6.1.png','img/anuncio6.2.png','img/anuncio6.3.png'],
    anuncios7 = ['img/anuncio7.1.png','img/anuncio7.2.png','img/anuncio7.3.png'],
    anuncios8 = ['img/anuncio8.1.png','img/anuncio8.2.png','img/anuncio8.3.png'],
    anuncios9 = ['img/anuncio9.1.png','img/anuncio9.2.png','img/anuncio9.3.png'],
    anuncios10 = ['img/anuncio10.1.png','img/anuncio10.2.png','img/anuncio10.3.png'],
    cont = 0;

function carrusel (contenedor){
    contenedor.addEventListener('click', e => {
        let atras  = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;
        if(tgt == atras){
            if(cont > 0){
                img.src = anuncios1[cont -1];
                cont --;
            }else{
                img.src = anuncios1[anuncios1.length -1];
                cont = anuncios1.length - 1;
            }
        }else if(tgt == adelante){
            if(cont < anuncios1.length-1){
                img.src = anuncios1[cont + 1];
                cont ++;
            }else{
                img.src = anuncios1[0];
                cont = 0;
            }
 
        }    

    });
}

function carrusel2 (contenedor){
    contenedor.addEventListener('click', e => {
        let atras  = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;
        if(tgt == atras){
            if(cont > 0){
                img.src = anuncios2[cont -1];
                cont --;
            }else{
                img.src = anuncios2[anuncios2.length -1];
                cont = anuncios2.length - 1;
            }
        }else if(tgt == adelante){
            if(cont < anuncios2.length-1){
                img.src = anuncios2[cont + 1];
                cont ++;
            }else{
                img.src = anuncios2[0];
                cont = 0;
            }
 
        }    

    });
}

function carrusel3 (contenedor){
    contenedor.addEventListener('click', e => {
        let atras  = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;
        if(tgt == atras){
            if(cont > 0){
                img.src = anuncios3[cont -1];
                cont --;
            }else{
                img.src = anuncios3[anuncios3.length -1];
                cont = anuncios3.length - 1;
            }
        }else if(tgt == adelante){
            if(cont < anuncios3.length-1){
                img.src = anuncios3[cont + 1];
                cont ++;
            }else{
                img.src = anuncios3[0];
                cont = 0;
            }
 
        }    

    });
}

function carrusel4 (contenedor){
    contenedor.addEventListener('click', e => {
        let atras  = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;
        if(tgt == atras){
            if(cont > 0){
                img.src = anuncios4[cont -1];
                cont --;
            }else{
                img.src = anuncios4[anuncios4.length -1];
                cont = anuncios4.length - 1;
            }
        }else if(tgt == adelante){
            if(cont < anuncios4.length-1){
                img.src = anuncios4[cont + 1];
                cont ++;
            }else{
                img.src = anuncios4[0];
                cont = 0;
            }
 
        }    

    });
}

function carrusel5 (contenedor){
    contenedor.addEventListener('click', e => {
        let atras  = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;
        if(tgt == atras){
            if(cont > 0){
                img.src = anuncios5[cont -1];
                cont --;
            }else{
                img.src = anuncios5[anuncios1.length -1];
                cont = anuncios5.length - 1;
            }
        }else if(tgt == adelante){
            if(cont < anuncios5.length-1){
                img.src = anuncios5[cont + 1];
                cont ++;
            }else{
                img.src = anuncios5[0];
                cont = 0;
            }
 
        }    

    });
}

function carrusel6 (contenedor){
    contenedor.addEventListener('click', e => {
        let atras  = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;
        if(tgt == atras){
            if(cont > 0){
                img.src = anuncios6[cont -1];
                cont --;
            }else{
                img.src = anuncios6[anuncios1.length -1];
                cont = anuncios6.length - 1;
            }
        }else if(tgt == adelante){
            if(cont < anuncios6.length-1){
                img.src = anuncios6[cont + 1];
                cont ++;
            }else{
                img.src = anuncios6[0];
                cont = 0;
            }
 
        }    

    });
}

function carrusel7 (contenedor){
    contenedor.addEventListener('click', e => {
        let atras  = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;
        if(tgt == atras){
            if(cont > 0){
                img.src = anuncios7[cont -1];
                cont --;
            }else{
                img.src = anuncios7[anuncios1.length -1];
                cont = anuncios7.length - 1;
            }
        }else if(tgt == adelante){
            if(cont < anuncios7.length-1){
                img.src = anuncios7[cont + 1];
                cont ++;
            }else{
                img.src = anuncios7[0];
                cont = 0;
            }
 
        }    

    });
}

function carrusel8 (contenedor){
    contenedor.addEventListener('click', e => {
        let atras  = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;
        if(tgt == atras){
            if(cont > 0){
                img.src = anuncios8[cont -1];
                cont --;
            }else{
                img.src = anuncios8[anuncios1.length -1];
                cont = anuncios8.length - 1;
            }
        }else if(tgt == adelante){
            if(cont < anuncios8.length-1){
                img.src = anuncios8[cont + 1];
                cont ++;
            }else{
                img.src = anuncios8[0];
                cont = 0;
            }
 
        }    

    });
}

function carrusel9 (contenedor){
    contenedor.addEventListener('click', e => {
        let atras  = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;
        if(tgt == atras){
            if(cont > 0){
                img.src = anuncios9[cont -1];
                cont --;
            }else{
                img.src = anuncios9[anuncios1.length -1];
                cont = anuncios9.length - 1;
            }
        }else if(tgt == adelante){
            if(cont < anuncios9.length-1){
                img.src = anuncios9[cont + 1];
                cont ++;
            }else{
                img.src = anuncios9[0];
                cont = 0;
            }
 
        }    

    });
}

function carrusel10 (contenedor){
    contenedor.addEventListener('click', e => {
        let atras  = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;
        if(tgt == atras){
            if(cont > 0){
                img.src = anuncios10[cont -1];
                cont --;
            }else{
                img.src = anuncios10[anuncios1.length -1];
                cont = anuncios10.length - 1;
            }
        }else if(tgt == adelante){
            if(cont < anuncios10.length-1){
                img.src = anuncios10[cont + 1];
                cont ++;
            }else{
                img.src = anuncios10[0];
                cont = 0;
            }
 
        }    

    });
}



document.addEventListener("DOMContentLoaded",() => {
    let contenedor = document.querySelector('.contenedor');
    let contenedor2 = document.querySelector('.contenedor2');
    let contenedor3 = document.querySelector('.contenedor3');
    let contenedor4 = document.querySelector('.contenedor4');
    let contenedor5 = document.querySelector('.contenedor5');
    let contenedor6 = document.querySelector('.contenedor6');
    let contenedor7 = document.querySelector('.contenedor7');
    let contenedor8 = document.querySelector('.contenedor8');
    let contenedor9 = document.querySelector('.contenedor9');
    let contenedor10 = document.querySelector('.contenedor10');
    carrusel(contenedor);
    carrusel2(contenedor2);
    carrusel3(contenedor3);
    carrusel4(contenedor4);
    carrusel5(contenedor5);
    carrusel6(contenedor6);
    carrusel7(contenedor7);
    carrusel8(contenedor8);
    carrusel9(contenedor9);
    carrusel10(contenedor10);
});