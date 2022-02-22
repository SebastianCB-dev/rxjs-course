import { interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';


const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
};

const total = numbers.reduce( totalReducer, 0 );
console.log(total);

interval(500).pipe(
    take(6),
    reduce( totalReducer, 0 )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
})




