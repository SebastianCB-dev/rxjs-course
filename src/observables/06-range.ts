import { of, range } from "rxjs";


// const src1$ = range( 1, 100 );
// !No es de -5 hasta 10, comienza desde -5 y emite 10 valores
const src1$ = range( -5, 10 );

// Sincrono
console.log('Inicio');
src1$.subscribe( console.log );
console.log('Fin');