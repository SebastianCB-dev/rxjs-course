import { fromEvent } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>( document, 'click' );

// click$.pipe(
//     first()
// ).subscribe( {
//     next: val => console.log( 'next:',val ),
//     complete: () => console.log('Completado')
// });

interface CoordsClick {
    clientY: number;
    clientX: number;
}
click$.pipe(
    tap<PointerEvent>( console.log ),
    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX,
    // }) )
     map<PointerEvent, CoordsClick>( ({ clientX, clientY }) => ({ clientY, clientX }) ),
     first( ev => ev.clientY >= 150 )
).subscribe( {
    next: val => console.log( 'next:',val ),
    complete: () => console.log('Completado')
});



