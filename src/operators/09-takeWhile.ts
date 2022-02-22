import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';


const click$ = fromEvent<PointerEvent>( document, 'click' );


click$.pipe(
    map( ({ x,y }) => ({ x,y }) ),
    // El true es un inclusive el cual me bota el 
    // valor que me rompio la condicion en el take while
    takeWhile( ({ y }) => y <= 150, true )
).subscribe({
    next: val => console.log('next:',val),
    complete: () => console.log('Complete')
})


