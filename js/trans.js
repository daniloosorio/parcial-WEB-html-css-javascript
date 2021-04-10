window.onload = function(){
    document.getElementById("submit1").onclick = calcular_longitud;
    document.getElementById("submit2").onclick = calcular_masa;
   document.getElementById("submit3").onclick = calcular_temperatura;
    
}

function calcular_longitud(){
    var typeconversion =document.getElementsByName("opcion1")[0]
    var posicion = typeconversion.selectedIndex;
    var typeconversion =document.getElementsByName("opcion2")[0]
    var destino = typeconversion.selectedIndex;
    switch (posicion) {
        case 0:
            if(destino==0){
                valor=document.getElementById("longitud").value;
                document.getElementById("resultado1").innerHTML = valor;
            }
            if(destino==1){
                valor=document.getElementById("longitud").value;
                res=valor*0.1;
                document.getElementById("resultado1").innerHTML = res;
            }
            if(destino==2){
                valor=document.getElementById("longitud").value;
                res=valor*0.001;
                document.getElementById("resultado1").innerHTML = res;
            }
            if(destino==3){
                valor=document.getElementById("longitud").value;
                res=valor*0.000001;
                document.getElementById("resultado1").innerHTML = res;
            }
          break;
        case 1: 
            if(destino==0){
                valor=document.getElementById("longitud").value;
                res=valor*10;
                document.getElementById("resultado1").innerHTML = res;
            }
            if(destino==1){
                valor=document.getElementById("longitud").value;
                res=valor*1;
                document.getElementById("resultado1").innerHTML = res;
            }
            if(destino==2){
                valor=document.getElementById("longitud").value;
                res=valor*0.01;
                document.getElementById("resultado1").innerHTML = res;
            }
            if(destino==3){
                valor=document.getElementById("longitud").value;
                res=valor*0.00001;
                document.getElementById("resultado1").innerHTML = res;
            }
            break;
        case 2:
                if(destino==0){
                    valor=document.getElementById("longitud").value;
                    res=valor*1000;
                    document.getElementById("resultado1").innerHTML = res;
                }
                if(destino==1){
                    valor=document.getElementById("longitud").value;
                    res=valor*100;
                    document.getElementById("resultado1").innerHTML = res;
                }
                if(destino==2){
                    valor=document.getElementById("longitud").value;
                    res=valor*1;
                    document.getElementById("resultado1").innerHTML = res;
                }
                if(destino==3){
                    valor=document.getElementById("longitud").value;
                    res=valor*0.001;
                    document.getElementById("resultado1").innerHTML = res;
                }
            break;
        case 3:
                if(destino==0){
                    valor=document.getElementById("longitud").value;
                    res=valor*1000000;
                    document.getElementById("resultado1").innerHTML = res;
                }
                if(destino==1){
                    valor=document.getElementById("longitud").value;
                    res=valor*100000;
                    document.getElementById("resultado1").innerHTML = res;
                }
                if(destino==2){
                    valor=document.getElementById("longitud").value;
                    res=valor*1000;
                    document.getElementById("resultado1").innerHTML = res;
                }
                if(destino==3){
                    valor=document.getElementById("longitud").value;
                    res=valor*1;
                    document.getElementById("resultado1").innerHTML = res;
                }
          break;
        default:
          break;
      }

}

function calcular_masa(){
    var typeconversion =document.getElementsByName("opcion3")[0]
    var posicion = typeconversion.selectedIndex;
    var typeconversion =document.getElementsByName("opcion4")[0]
    var destino = typeconversion.selectedIndex;
    valor=document.getElementById("masa").value;
    switch (posicion) {
        case 0:
            if(destino==0){
                res=valor*1;
            }
            if(destino==1){
                res=valor*(1/500);
            }
            if(destino==2){
                res=valor*(1/1000);
            }
            if(destino==3){
                res=valor*(1/1000000);
            }
          break;
        case 1: 
            if(destino==0){
                res=valor*500;
            }
            if(destino==1){
                res=valor*(1);
            }
            if(destino==2){
                res=valor*(1/2);
            }
            if(destino==3){
                res=valor*(1/2000);
            }
        break;
        case 2:
                if(destino==0){
                    res=valor*1000;
                }
                if(destino==1){
                    res=valor*(2);
                }
                if(destino==2){
                    res=valor*(1);
                }
                if(destino==3){
                    res=valor*(1/1000);
                }
                break;
        case 3:
                if(destino==0){
                    res=valor*1000000;
                }
                if(destino==1){
                    res=valor*(2000);
                }
                if(destino==2){
                    res=valor*(1000);
                }
                if(destino==3){
                    res=valor*(1);
                }
                break;
        default:
          break;
      }
      document.getElementById("resultado2").innerHTML = res;
}

function calcular_temperatura(){
    var typeconversion =document.getElementsByName("opcion5")[0]
    var posicion = typeconversion.selectedIndex;
    var typeconversion =document.getElementsByName("opcion6")[0]
    var destino = typeconversion.selectedIndex;
    valor=document.getElementById("temperatura").value;
    switch (posicion) {
        case 0:
            if(destino==0){
                res=valor*1;
            }
            if(destino==1){
                res=valor*1-273-1;
            }
            if(destino==2){
                res=valor*1-457.87-1;
            }
          break;
        case 1: 
            if(destino==0){
                res=valor*1+273-1;
            }
            if(destino==1){
                res=valor*1;
            }
            if(destino==2){
                res=valor*1+33.8-1;
            }
      break;
        break;
        case 2:
                if(destino==0){
                    res=valor*1+457.87-1;
                }
                if(destino==1){
                    res=valor*1-33.8-1;
                }
                if(destino==2){
                    res=valor*1;
                }
          break;
        case 3:
                if(destino==0){
                    res=valor*1000000;
                }
                if(destino==1){
                    res=valor*(2000);
                }
                if(destino==2){
                    res=valor*(1000);
                }
                if(destino==3){
                    res=valor*(1);
                }
                break;
        default:
          break;
      }
      document.getElementById("resultado3").innerHTML = res;
}