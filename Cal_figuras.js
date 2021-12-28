var LadoCuadrado = document.getElementById("SideSquare");
var ResultadoAreaCuadrado = document.getElementById("AreaCuadrado");
var AreaCuadrado = 0;


function CalcularAreaCuadrado(){
    
    LadoCuadrado = parseInt(LadoCuadrado.value);
    AreaCuadrado = LadoCuadrado * LadoCuadrado;
    ResultadoAreaCuadrado.innerText = AreaCuadrado + " cm";
    
    
}