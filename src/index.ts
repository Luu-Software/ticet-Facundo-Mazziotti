import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.



cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
let precioBase: any
  let cantidadNum: number = Number(cantidad);
  function calcularTotal(id: string, cantidad: number, codigoDescuento: string): number{
  if (id==="sabrina"){
   precioBase=1000
  }
  else if (id==="kgatlw"){
     precioBase=700
  }
  else if (id==="lali"){
    precioBase=500}
  else if (id==="magdalena"){
    precioBase=600}
    else if (id==="viagra")
    { precioBase=400}
    else if(id==="dillom")
    {precioBase=350}
    else if(id==="marilina"){
      precioBase=200}
      else if(id==="mugre"){
        precioBase=150
      }

    if (codigoDescuento==="TIC10"){return precioBase*cantidad*0.9}
    else if (codigoDescuento==="TIC20"){return precioBase*cantidad*0.8}
    else if(codigoDescuento==="DARIO"){return precioBase*cantidad*0.5}
    else {return precio*cantidad}
  }
  let precio: number = calcularTotal(id, cantidadNum, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});

iniciar();
