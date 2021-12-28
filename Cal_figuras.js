/************************************************/
/*********Declaracion e inicializacion***********/
/*******************Cuadrado*********************/
/************************************************/
var LadoCuadrado = document.getElementById("SideSquare");
var ResultadoAreaCuadrado = document.getElementById("AreaCuadrado");
var ResultadoPerimetroCuadrado = document.getElementById("PerimetroCuadrado");
var AreaCuadrado = 0;
var PerimetroCuadrado = 0;
let LadoCuadradoAP = 0;
/************************************************/
/*****************Triangulo**********************/
/************************************************/
var LadoTrianguloA = document.getElementById("SideTriangleA");
var LadoTrianguloB = document.getElementById("SideTriangleB");
var LadoTrianguloBase = document.getElementById("SideTriangleBase");
var LadoTrianguloAltura = document.getElementById("SideTriangleHeight");
var ResultadoAreaTriangulo = document.getElementById("AreaTriangle");
var ResultadoPerimetroTriangulo = document.getElementById("PerimeterTriangle");
var AreaTriangulo = 0;
var PerimetroTriangulo = 0;
let LadoTrianguloA_AP = 0;
let LadoTrianguloB_AP = 0;
let LadoTrianguloBase_AP = 0;
let LadoTrianguloAltura_AP = 0;
/************************************************/
/*****************Circulo**********************/
/************************************************/
var RadioCirculo = document.getElementById("RadioCircle");
var ResultadoAreaCirculo = document.getElementById("AreaCircle");
var ResultadoPerimetroCirculo = document.getElementById("PerimeterCircle");
var AreaCirculo = 0;
var PerimetroCirculo = 0;
let Radio = 0

/**********************************************************************************************************************/
/************************************************/
/*******Funciones para area y perimetro**********/
/*******************Cuadrado*********************/
/************************************************/
function CalcularAreaCuadrado(){
    LadoCuadradoAP = parseInt(LadoCuadrado.value);
    AreaCuadrado = LadoCuadradoAP * LadoCuadradoAP;
    ResultadoAreaCuadrado.innerText = AreaCuadrado + " cm^2";
}

function CalcularPerimetroCuadrado(){
    LadoCuadradoAP = parseInt(LadoCuadrado.value);
    PerimetroCuadrado = LadoCuadradoAP * 4;
    ResultadoPerimetroCuadrado.innerText = PerimetroCuadrado + " cm";
}
/************************************************/
/*******************Triangulo********************/
/************************************************/
function CalcularAreaTriangulo(){
    LadoTrianguloBase_AP = parseInt(LadoTrianguloBase.value);
    LadoTrianguloAltura_AP = parseInt(LadoTrianguloAltura.value);
    AreaTriangulo = (LadoTrianguloBase_AP * LadoTrianguloAltura_AP) / 2;
    ResultadoAreaTriangulo.innerText = AreaTriangulo + " cm^2";
}

function CalcularPerimetroTriangulo(){
    LadoTrianguloA_AP = parseInt(LadoTrianguloA.value);
    LadoTrianguloB_AP = parseInt(LadoTrianguloB.value);
    LadoTrianguloBase_AP = parseInt(LadoTrianguloBase.value);
    PerimetroTriangulo = LadoTrianguloA_AP + LadoTrianguloB_AP + LadoTrianguloBase_AP;
    ResultadoPerimetroTriangulo.innerText = PerimetroTriangulo + " cm";
}
/************************************************/
/*******************Circulo**********************/
/************************************************/
function CalcularAreaCirculo(){
    Radio = parseInt(RadioCirculo.value);
    AreaCirculo = parseInt(Math.PI * (Radio*Radio));
    ResultadoAreaCirculo.innerText = AreaCirculo + " cm^2";
}

function CalcularPerimetroCirculo(){
    Radio = parseInt(RadioCirculo.value);
    PerimetroCirculo = parseInt(2 * Math.PI * Radio);
    ResultadoPerimetroCirculo.innerText = PerimetroCirculo + " cm";
}