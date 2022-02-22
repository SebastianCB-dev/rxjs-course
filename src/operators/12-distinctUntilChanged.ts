import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of<number | string>( 1,'1',1,3,3,2,2,4,4,5,3,1 );

numeros$.pipe(
    distinctUntilChanged()
)
.subscribe( console.log )

interface Personaje {
    nombre: string;
    tipo: string;
    edad: number;
}

const personajes: Personaje[] = [
    {
        nombre: 'Batman',
        tipo: 'Heroe',
        edad: 35 
    },
    {
        nombre: 'Joker',
        tipo: 'Villano',
        edad: 20 
    },
    {
        nombre: 'Superman',
        tipo: 'Heroe',
        edad: 24
    },
    {
        nombre: 'Aquaman',
        tipo: 'Heroe',
        edad: 32 
    },
    {
        nombre: 'Flash',
        tipo: 'Heroe',
        edad: 35
    },
    {
        nombre: 'Wonder Woman',
        tipo: 'Heroe',
        edad: 23
    },
    {
        nombre: 'Lex Luthor',
        tipo: 'Villano',
        edad: 35 
    }
];


from( personajes ).pipe(
    distinctUntilChanged( (anterior, actual) => anterior.edad === actual.edad ) 
).subscribe( console.log )