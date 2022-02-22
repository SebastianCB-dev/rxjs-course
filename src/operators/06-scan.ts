import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';


const numeros = [1,2,3,4,5];

const totalAcumulador = ( acumulado, current ) => acumulado + current;

// Reduce

from( numeros ).pipe(

    reduce( totalAcumulador, 0 )

).subscribe( console.log );


// Scan

from( numeros ).pipe(

    scan( totalAcumulador, 0 )

).subscribe( console.log );


// INFO: REDUX

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
    
}

const user: Usuario[] = [
    { id: 'Sebastian', autenticado: false, token: null },
    { id: 'Sebastian', autenticado: true, token: 'ABC' },
    { id: 'Sebastian', autenticado: true, token: 'ABCS123' }
];

const state$ = from( user ).pipe(
    scan( (acc, cur) => {
        return { ...acc, ...cur}
    }, { edad: 33 })
);

const id$ = state$.pipe(
    map<Usuario, string>( state => state.id )
).subscribe(console.log)

