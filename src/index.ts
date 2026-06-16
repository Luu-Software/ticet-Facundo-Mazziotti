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



function calcularTotal(id: string, cantidad: string, codigoDescuento: string): number {
  let cantidadNum: number = Number(cantidad);
  let TOTAL = 0;
  if (id === 'sabrina') {
    if (codigoDescuento === 'TIC10') {
      TOTAL = cantidadNum * 1000 * 0.9;
    } else if (codigoDescuento === 'TIC20') {
      TOTAL = cantidadNum * 1000 * 0.8;
    } else if (codigoDescuento === 'DARIO') {
      TOTAL = cantidadNum * 1000 * 0.5;
    } else {
      TOTAL = cantidadNum * 1000;
    }
  } else if (id === 'kgatlw') {
    if (codigoDescuento === 'TIC10') {
      TOTAL = cantidadNum * 700 * 0.9;
    } else if (codigoDescuento === 'TIC20') {
      TOTAL = cantidadNum * 700 * 0.8;
    } else if (codigoDescuento === 'DARIO') {
      TOTAL = cantidadNum * 700 * 0.5;
    } else {
      TOTAL = cantidadNum * 700;
    }
  } else if (id === 'lali') {
    if (codigoDescuento === 'TIC10') {
      TOTAL = cantidadNum * 500 * 0.9;
    } else if (codigoDescuento === 'TIC20') {
      TOTAL = cantidadNum * 500 * 0.8;
    } else if (codigoDescuento === 'DARIO') {
      TOTAL = cantidadNum * 500 * 0.5;
    } else {
      TOTAL = cantidadNum * 500;
    }
  } else if (id === 'magdalena') {
    if (codigoDescuento === 'TIC10') {
      TOTAL = cantidadNum * 600 * 0.9;
    } else if (codigoDescuento === 'TIC20') {
      TOTAL = cantidadNum * 600 * 0.8;
    } else if (codigoDescuento === 'DARIO') {
      TOTAL = cantidadNum * 600 * 0.5;
    } else {
      TOTAL = cantidadNum * 600;
    }
  } else if (id === 'viagra') {
    if (codigoDescuento === 'TIC10') {
      TOTAL = cantidadNum * 400 * 0.9;
    } else if (codigoDescuento === 'TIC20') {
      TOTAL = cantidadNum * 400 * 0.8;
    } else if (codigoDescuento === 'DARIO') {
      TOTAL = cantidadNum * 400 * 0.5;
    } else {
      TOTAL = cantidadNum * 400;
    }
  } else if (id === 'dillom') {
    if (codigoDescuento === 'TIC10') {
      TOTAL = cantidadNum * 350 * 0.9;
    } else if (codigoDescuento === 'TIC20') {
      TOTAL = cantidadNum * 350 * 0.8;
    } else if (codigoDescuento === 'DARIO') {
      TOTAL = cantidadNum * 350 * 0.5;
    } else {
      TOTAL = cantidadNum * 350;
    }
  } else if (id === 'marilina') {
    if (codigoDescuento === 'TIC10') {
      TOTAL = cantidadNum * 200 * 0.9;
    } else if (codigoDescuento === 'TIC20') {
      TOTAL = cantidadNum * 200 * 0.8;
    } else if (codigoDescuento === 'DARIO') {
      TOTAL = cantidadNum * 200 * 0.5;
    } else {
      TOTAL = cantidadNum * 200;
    }
  } else if (id === 'mugre') {
    if (codigoDescuento === 'TIC10') {
      TOTAL = cantidadNum * 150 * 0.9;
    } else if (codigoDescuento === 'TIC20') {
      TOTAL = cantidadNum * 150 * 0.8;
    } else if (codigoDescuento === 'DARIO') {
      TOTAL = cantidadNum * 150 * 0.5;
    } else {
      TOTAL = cantidadNum * 150;
    }
  }
  return TOTAL;
}

cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  let cantidadNum: number = Number(cantidad);
  let precio: number = calcularTotal(id, cantidad, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});

iniciar();
