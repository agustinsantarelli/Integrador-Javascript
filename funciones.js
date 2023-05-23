function calcular()
{
    var validationCustom04= document.getElementById("validationCustom04").value;
    var select= document.getElementById("select");
    var select_activo= select.options[select.selectedIndex].value;
    var result1=0;
    var result2=0;
    
 switch(select_activo=parseInt(select_activo))
 {
    case 1:
        result=validationCustom04*200;
        result2=result-result*80/100;
           break;
    case 2:
        result=validationCustom04*200;
        result2=result-result*50/100;
           break;

    case 3:
        result=validationCustom04*200;
        result2=result-result*15/100;
           break;       
 }
 document.getElementById("alerta").innerHTML= "Total a Pagar:$"+result2;
}

function limpiar_campos()
{
document.getElementById("validationCustom01").value="";
document.getElementById("validationCustom02").value="";
document.getElementById("validationCustom03").value="";
document.getElementById("validationCustom04").value="";
document.getElementById("select").value="";
document.getElementById("alerta").innerHTML="Total a Pagar:$";
}