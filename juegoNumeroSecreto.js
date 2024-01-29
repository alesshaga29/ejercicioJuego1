
let numeroSecreto=0;
let listaNumeroSorteados=[];
let numerosMaximos=10;
let intentos =0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}
function verificarIntento(){

    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario===numeroSecreto){
        
        document.getElementById('reiniciar').removeAttribute('disabled');
       
        asignarTextoElemento('p', `Acerto el Numero secreto en  ${intentos} ${(intentos===1)? 'vez': 'veces'} `);
        
    }else{
        if(numeroDeUsuario >numeroSecreto){
            asignarTextoElemento('p', 'el Numero secreto es Menor');
        } else{
            asignarTextoElemento('p', 'el Numero secreto es Mayor');
        }
    }
    
    intentos++;
    limpiarCja();
    return
    }
    
   

function  limpiarCja(){
    
  document.querySelector('#valorUsuario').value="";
    
}


function generarNumeroSecreto(){

 let numeroGnerado=Math.floor (Math.random()*numerosMaximos+1);

 console.log(numeroGnerado);
 console.log(listaNumeroSorteados);
 
  if (listaNumeroSorteados.length == numerosMaximos) {
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');
}else{

if(listaNumeroSorteados.includes(numeroGnerado)){  
    return generarNumeroSecreto();
}

else{
  
    listaNumeroSorteados.push(numeroGnerado)
    return numeroGnerado
}
}
}

function condicionesIniciales(){

asignarTextoElemento('h1', 'Juego Secreto!');

asignarTextoElemento('p', `Indica un Numero del 1 AL ${numerosMaximos}` );

numeroSecreto=generarNumeroSecreto();
intentos=1;
}

function reiniciarJuego(){

limpiarCja();

condicionesIniciales();

document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();