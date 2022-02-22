import { fromEvent, PartialObserver } from 'rxjs';

/*
    INFO: Eventos del DOM
*/

const src1$ = fromEvent<MouseEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const observer: PartialObserver<any> = {
    next: value => console.log('Next', value) 
};

src1$.subscribe( ({ x, y}) => {
    console.log( x + " - " + y );
});


src2$.subscribe( evento => {
    console.log( evento.key );
} );




