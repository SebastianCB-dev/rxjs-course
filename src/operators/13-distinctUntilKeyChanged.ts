import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';


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
    distinctUntilKeyChanged('edad') 
).subscribe( console.log )