/************************************************/
/*********Declaracion e inicializacion***********/
/*******************Descuento********************/
/************************************************/
let inCodigo = document.getElementById("inDescuento");
let name0 = document.getElementById("name0");
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let name3 = document.getElementById("name3");
let name4 = document.getElementById("name4");
let name5 = document.getElementById("name5");
let name6 = document.getElementById("name6");
let name7 = document.getElementById("name7");
let name8 = document.getElementById("name8");
let name9 = document.getElementById("name9");
let inPrice0 = document.getElementById("inPrecio0");
let inPrice1 = document.getElementById("inPrecio1");
let inPrice2 = document.getElementById("inPrecio2");
let inPrice3 = document.getElementById("inPrecio3");
let inPrice4 = document.getElementById("inPrecio4");
let inPrice5 = document.getElementById("inPrecio5");
let inPrice6 = document.getElementById("inPrecio6");
let inPrice7 = document.getElementById("inPrecio7");
let inPrice8 = document.getElementById("inPrecio8");
let inPrice9 = document.getElementById("inPrecio9");
let outPrice0 = document.getElementById("outPrecio0");
let outPrice1 = document.getElementById("outPrecio1");
let outPrice2 = document.getElementById("outPrecio2");
let outPrice3 = document.getElementById("outPrecio3");
let outPrice4 = document.getElementById("outPrecio4");
let outPrice5 = document.getElementById("outPrecio5");
let outPrice6 = document.getElementById("outPrecio6");
let outPrice7 = document.getElementById("outPrecio7");
let outPrice8 = document.getElementById("outPrecio8");
let outPrice9 = document.getElementById("outPrecio9");
let Productos = [{id: 1, nombre: "Cyberpunk", Precio: 155000, PrecioFinal: 0},
                {id: 2, nombre: "DOOM", Precio: 169000, PrecioFinal: 0},
                {id: 3, nombre: "Half-Life", Precio: 158000, PrecioFinal: 0},
                {id: 4, nombre: "War Zone", Precio: 169000, PrecioFinal: 0},
                {id: 5, nombre: "Resident Evil 3", Precio: 170000, PrecioFinal: 0},
                {id: 6, nombre: "Watch Dogs", Precio: 160000, PrecioFinal: 0},
                {id: 7, nombre: "Wasteland 3", Precio: 158000, PrecioFinal: 0},
                {id: 8, nombre: "Dragon Ball", Precio: 168000, PrecioFinal: 0},
                {id: 9, nombre: "The Avengers", Precio: 168000, PrecioFinal: 0},
                {id: 9, nombre: "FIFA 21", Precio: 189000, PrecioFinal: 0}
];
name0.innerText = Productos[0].nombre;
name1.innerText = Productos[1].nombre;
name2.innerText = Productos[2].nombre;
name3.innerText = Productos[3].nombre;
name4.innerText = Productos[4].nombre;
name5.innerText = Productos[5].nombre;
name6.innerText = Productos[6].nombre;
name7.innerText = Productos[7].nombre;
name8.innerText = Productos[8].nombre;
name9.innerText = Productos[9].nombre;
name9.innerText = Productos[9].nombre;
inPrice0.innerText = "COP " + Productos[0].Precio;
inPrice1.innerText = "COP " + Productos[1].Precio;
inPrice2.innerText = "COP " + Productos[2].Precio;
inPrice3.innerText = "COP " + Productos[3].Precio;
inPrice4.innerText = "COP " + Productos[4].Precio;
inPrice5.innerText = "COP " + Productos[5].Precio;
inPrice6.innerText = "COP " + Productos[6].Precio;
inPrice7.innerText = "COP " + Productos[7].Precio;
inPrice8.innerText = "COP " + Productos[8].Precio;
inPrice9.innerText = "COP " + Productos[9].Precio;
let Descuentos = [{codigo: "a34erw2", descuento: 50},
                  {codigo: "lw23pr6", descuento: 40}, 
                  {codigo: "t876yu5", descuento: 30}, 
                  {codigo: "p09i7t3", descuento: 20}, 
                  {codigo: "ki66bn8", descuento: 10}
        ];


let cantidad = 0;
let codigo = 0;
let porcDescuento = 0;
let descuentoTotal = 0;


/**********************************************************************************************************************/
/************************************************/
/*******Funciones para cualcular descuento*******/
/************************************************/
function CalcularDescuento(){
        descuentoTotal = CalcularPorcentaje();
        cantidad = Productos.length;
        for (i = 0; i < cantidad; i++){
                Productos[i].PrecioFinal = Productos[i].Precio - ((Productos[i].Precio * descuentoTotal)/100);
        }

        outPrice0.innerText = "COP " + Productos[0].PrecioFinal + " -" + descuentoTotal + "%";
        outPrice1.innerText = "COP " + Productos[1].PrecioFinal + " -" + descuentoTotal + "%";
        outPrice2.innerText = "COP " + Productos[2].PrecioFinal + " -" + descuentoTotal + "%";
        outPrice3.innerText = "COP " + Productos[3].PrecioFinal + " -" + descuentoTotal + "%";
        outPrice4.innerText = "COP " + Productos[4].PrecioFinal + " -" + descuentoTotal + "%";
        outPrice5.innerText = "COP " + Productos[5].PrecioFinal + " -" + descuentoTotal + "%";
        outPrice6.innerText = "COP " + Productos[6].PrecioFinal + " -" + descuentoTotal + "%";
        outPrice7.innerText = "COP " + Productos[7].PrecioFinal + " -" + descuentoTotal + "%";
        outPrice8.innerText = "COP " + Productos[8].PrecioFinal + " -" + descuentoTotal + "%";
        outPrice9.innerText = "COP " + Productos[9].PrecioFinal + " -" + descuentoTotal + "%";
        inPrice0.style = "color : red; text-decoration : line-through red;"
        inPrice1.style = "color : red; text-decoration : line-through red;"
        inPrice2.style = "color : red; text-decoration : line-through red;"
        inPrice3.style = "color : red; text-decoration : line-through red;"
        inPrice4.style = "color : red; text-decoration : line-through red;"
        inPrice5.style = "color : red; text-decoration : line-through red;"
        inPrice6.style = "color : red; text-decoration : line-through red;"
        inPrice7.style = "color : red; text-decoration : line-through red;"
        inPrice8.style = "color : red; text-decoration : line-through red;"
        inPrice9.style = "color : red; text-decoration : line-through red;"
}
/************************************************/
/**************Funciones de ayuda****************/
/************************************************/
function CalcularPorcentaje(){
        codigo = inCodigo.value;
        cantidad = Descuentos.length;
 
        for (i = 0; i < cantidad; i++){
                if(codigo == Descuentos[i].codigo){
                         porcDescuento = Descuentos[i].descuento;
                         i = cantidad;
                }
                else{
                         porcDescuento = 0;
                }
        }
        
        return porcDescuento;
 }




