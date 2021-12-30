/************************************************/
/*********Declaracion e inicializacion***********/
/*******************Promedio*********************/
/************************************************/
let InPromedio = document.getElementById("inPromedio");
let outPromedio = document.getElementById("outPromedio");
let listadoPromedio = [];
let CantLista = 0;
let SumaTotal;
let Resultado = 0;
/************************************************/
/*******************Mediana**********************/
/************************************************/
let InMediana = document.getElementById("inMediana");
let OutMediana = document.getElementById("outMediana");
let listadoMediana = [];
let listadoMedianaOrdenada = [];
/************************************************/
/*******************Moda*************************/
/************************************************/
let InModa = document.getElementById("inModa");
let OutModa = document.getElementById("outModa");
let Arreglo = [];
let Objeto = [];


/**********************************************************************************************************************/
/************************************************/
/***********Funciones para estadistica***********/
/*******************Promedio*********************/
/************************************************/
function CalcularPromedio(){
    SumaTotal = 0;
    listadoPromedio = (InPromedio.value).split(",");
    CantLista = listadoPromedio.length;
    for (var i = 0; i < CantLista; i++){
        SumaTotal = SumaTotal + parseInt(listadoPromedio[i]);
    }
    Resultado = SumaTotal / CantLista;
    outPromedio.innerText = "Promedio = " + Resultado.toFixed(2);
}
/************************************************/
/********************Mediana*********************/
/************************************************/
function CalcularMediana(){
    var aux = 0;
    var aux2 = 0;
    var Numero = 0;
    var Numero2 = 0;
    listadoMediana = (InMediana.value).split(",");
    listadoMedianaOrdenada = listadoMediana.sort((a,b)=>{
        return a-b;
    });

    if(((listadoMedianaOrdenada.length)% 2) != 0){
        aux = (listadoMedianaOrdenada.length / 2);
        aux = parseInt(aux);
        Resultado = listadoMedianaOrdenada[aux];
        OutMediana.innerText = "Mediana = " + Resultado;
    }
    else{
        aux = (listadoMedianaOrdenada.length / 2);
        aux2 = aux - 1;
        Numero = parseInt(listadoMedianaOrdenada[aux]);
        Numero2 = parseInt(listadoMedianaOrdenada[aux2]);
        Resultado = (Numero + Numero2) / 2;
        OutMediana.innerText = "Mediana = " + Resultado.toFixed(0);
    }


}
/************************************************/
/********************Moda************************/
/************************************************/
function CalcularModa(){
    var cantidad;
    var aux = 0;
    Arreglo = (InModa.value).split(",");
    cantidad = Arreglo.length;
    for (var i = 0; i < cantidad; i++){
        /* debugger; */
        if(Objeto.length == 0){
            Objeto.push({numero: Arreglo[i], cantidad: 1});
        }
        else{
            aux = Objeto.length;
            for (var x = 0; x < aux;x++){
                if(Arreglo[i]==Objeto[x].numero){
                    Objeto[x].cantidad = Objeto[x].cantidad + 1;
                    x = aux; // esto es para finalizar el ciclo y no insertar nuevos elementos con el else
                }
                else if( x == (aux-1) ){ //Solo insertelo si ya se reviso el ultimo dato
                    Objeto.push({numero: Arreglo[i], cantidad: 1});
                }
            }

        }
    }

    cantidad = Objeto.length - 1;
    ObjetoOrdenado = Objeto.sort(function (a, b){
        return (a.cantidad - b.cantidad)
    });
    outModa.innerText= "Moda = " + ObjetoOrdenado[cantidad].numero;
}

