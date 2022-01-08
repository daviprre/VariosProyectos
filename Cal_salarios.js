/************************************************/
/*********Declaracion e inicializacion***********/
/****************Salario x año*******************/
/************************************************/
let selectAnnio = document.getElementById('selectAnio');
let resultadoSalario = document.getElementById("salario");
let resultado = "";
let valor = "";
/************************************************/
/****************Calcular salarios***************/
/************************************************/
let totalDiurmas = 0;
let totalNocturnas = 0;
let totalFestivas = 0;
let InCantidadSalario = document.getElementById('inCantidadSalarios');
let InSalario = document.getElementById('inSalario');
let InDiurnas = document.getElementById('inDiurnas');
let InNocturnas = document.getElementById('inNocturnas');
let InFestivas = document.getElementById('inFestivas');
let OutSalarioBruto = document.getElementById('outSalarioBruto');
let OutSalarioNeto = document.getElementById('outSalarioNeto');
let salariosUP = document.getElementById("salarios_up");
let salariosDOWN = document.getElementById("salarios_down");
let cantidad = 0;
let salario = 0;
let nocturas = 0;
let diurnas = 0;
let festivas = 0;
let SalarioBruto = 0;
let SalarioNeto = 0;

/************************************************/
/***************Promediar salarios***************/
/************************************************/
let inCantidad = document.getElementById("inCantidad");
let inListaSalarios = document.getElementById("inSalariosLista");
let msjCantidadSalarios = document.getElementById("txtCantidadSalario");
let msjListaSalarios = document.getElementById("txtListadoSalario");
let cantidadSalarios = 0;
let SalarioIngresado = 0;
let arregloSalarios = [];

/************************************************************************************************************/
/********************Funciones*******************/
/****************Salario x año*******************/
/************************************************/
selectAnnio.addEventListener('change', (event) => {

    valor = event.target.value;
    /* debugger; */
    switch (valor) {

        case "value2":
        resultado = "$ 566,700";        
        break;
        
        case "value3":
        resultado = "$ 589,500";        
        break;
        
        case "value4":
        resultado = "$ 616,000";        
        break;

        case "value5":
        resultado = "$ 644,350";        
        break;
        
        case "value6":
        resultado = "$ 689,455";        
        break;

        case "value7":
        resultado = "$ 737,717";        
        break;

        case "value8":
        resultado = "$ 781,242";        
        break;

        case "value9":
        resultado = "$ 828,116";        
        break;

        case "value10":
        resultado = "$ 877,803";        
        break;

        case "value11":
        resultado = "$ 908,526";        
        break;

        case "value12":
        resultado = "$ 1,000,000";        
        break;

        
        default:
        
        resultado = "";      
        
        }
    resultadoSalario.innerText =  resultado;
    resultadoSalario.style = "font-size: 2.5rem;"

});
/************************************************/
/****************Calcular salarios***************/
/************************************************/
function CalculaSalario(){
    cantidad = parseFloat(InCantidadSalario.value);
    salario = parseInt(InSalario.value);
    diurnas = parseInt(InDiurnas.value);
    nocturas = parseInt(InNocturnas.value);
    festivas = parseInt(InFestivas.value);
    var valorHoraNormal = 0;
    var valorHoraDiurna = 0;
    var valorHoraNocturna = 0;
    var valorHoraFestiva = 0;
    /* debugger; */
    if (cantidad == 0 && salario == 0){
        OutSalarioBruto.innerText = "Debe ingresar cantidad de salarios o salario";
        OutSalarioBruto.style = "color : rgb(255,105,97);";
        salariosUP.style = "flex-direction: column;";
        OutSalarioNeto.innerText = "Debe ingresar cantidad de salarios o salario";   
        OutSalarioNeto.style = "color : rgb(255,105,97);";
        salariosDOWN.style = "flex-direction: column;";
    }
    else if (salario==0){
    
        salario = cantidad * 1000000;
        valorHoraNormal = salario / 240; // el 240 sale de multiplicar 8 horas al dia por 30 dias al mes
        valorHoraDiurna = (valorHoraNormal * 1.25) * diurnas;
        valorHoraNocturna = (valorHoraNormal * 1.5) * nocturas;
        valorHoraFestiva = (valorHoraNormal * 1.75) * festivas;
        SalarioBruto = salario + valorHoraDiurna + valorHoraNocturna + valorHoraFestiva;
        SalarioNeto = SalarioBruto - (SalarioBruto * 0.08);
        OutSalarioBruto.innerText = "$ " + parseInt(SalarioBruto); 
        OutSalarioNeto.innerText = "$ " + parseInt(SalarioNeto);
    }
    else{
        valorHoraNormal = salario / 240; // el 240 sale de multiplicar 8 horas al dia por 30 dias al mes
        valorHoraDiurna = (valorHoraNormal * 1.25) * diurnas;
        valorHoraNocturna = (valorHoraNormal * 1.5) * nocturas;
        valorHoraFestiva = (valorHoraNormal * 1.75) * festivas;
        SalarioBruto = salario + valorHoraDiurna + valorHoraNocturna + valorHoraFestiva;
        SalarioNeto = SalarioBruto - (SalarioBruto * 0.08);
        OutSalarioBruto.innerText = "$ " + parseInt(SalarioBruto); 
        OutSalarioNeto.innerText = "$ " + parseInt(SalarioNeto);
    }



}

/* let auxiliar = 0; //Borrar esto, es solo para mirar como ocultar el elemento donde se ingresaran los salarios


if(auxiliar==0){
    inListaSalarios.style = "display : flex";
}
else{
    inListaSalarios.style = "display : none";
}

 */

/************************************************/
/****************Promediar salarios**************/
/************************************************/
function ValidarCantidadSalarios(){
    cantidadSalarios = parseInt(inCantidad.value);


    if(cantidadSalarios > 0){
        inListaSalarios.style = "display : flex";
        msjListaSalarios.innerText = "Debes ingresar " + cantidadSalarios + " salarios";
        msjCantidadSalarios.innerText = "";
    }
    else{
        inListaSalarios.style = "display : none";
        msjCantidadSalarios.innerText = "Por favor ingrese un numero valido";
    }

}
function llenarArregloSalarios(){
    SalarioIngresado = parseFloat(inListaSalarios.value);
    arregloSalarios.unshift (SalarioIngresado);
    inListaSalarios.value = "";

    if(cantidadSalarios > 1){
        cantidadSalarios = cantidadSalarios - 1;
        msjListaSalarios.innerText = "Debes ingresar " + cantidadSalarios + " salarios";
    }
    else{
        msjListaSalarios.innerText = "No tienes salarios por ingresar";
        inListaSalarios.style = "display : none";
    }
}

let SumaTotal = 0;
let CantLista = 0;
let Total = 0;
let OutResultadoSalarios = document.getElementById("OutResultadoSalarios");


function CalcularPromedio(){
    SumaTotal = 0;
    listadoPromedio = arregloSalarios;
    CantLista = listadoPromedio.length;
    Total = 0;
    for (var i = 0; i < CantLista; i++){
        SumaTotal = SumaTotal + parseInt(listadoPromedio[i]);
    }
    Total = SumaTotal / CantLista;
    if (Total > 0){
        OutResultadoSalarios.innerText = "R=/ El Promedio es: " + Total.toFixed(2);
    }
    else{
        OutResultadoSalarios.innerText = "";
    }

}

function CalcularMediana(){
    var aux = 0;
    var aux2 = 0;
    var Numero = 0;
    var Numero2 = 0;
    Total = 0;
    listadoMediana = arregloSalarios;
    listadoMedianaOrdenada = listadoMediana.sort((a,b)=>{
        return a-b;
    });

    if(((listadoMedianaOrdenada.length)% 2) != 0){
        aux = (listadoMedianaOrdenada.length / 2);
        aux = parseInt(aux);
        Total = listadoMedianaOrdenada[aux];
        OutResultadoSalarios.innerText = "R=/ El Promedio es: " + Total;
    }
    else{
        aux = (listadoMedianaOrdenada.length / 2);
        aux2 = aux - 1;
        Numero = parseInt(listadoMedianaOrdenada[aux]);
        Numero2 = parseInt(listadoMedianaOrdenada[aux2]);
        Total = (Numero + Numero2) / 2;
        OutResultadoSalarios.innerText = "R=/ La mediana es: " + Total.toFixed(0);
    }


}

function CalcularMediaArmonica(){
    debugger;
    var aux = 0;
    Total = 0;
    listadoMediana = arregloSalarios;

    for (var i = 0; i < listadoMediana.length; i++){

        aux = aux + (1/listadoMediana[i]);

    }

    Total = listadoMediana.length / aux;
    OutResultadoSalarios.innerText = "R=/ La media armonica es: " + Total.toFixed(0);


}

function LimpiarCampos(){
    msjListaSalarios.innerText = "";
    msjCantidadSalarios.innerText = "Ingresa la cantidad de salarios a promediar";
    inListaSalarios.style = "display : none";
    inCantidad.value = "";
    arregloSalarios = [];
    OutResultadoSalarios.innerText = "";
}



 