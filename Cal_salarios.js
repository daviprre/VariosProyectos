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