import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';


// range(1, 5).pipe(
//     map<number, number>( val =>  val * 10 )
// )
// .subscribe( console.log );

// range(1, 5).pipe(
//         map<number, string>( val =>  (val * 10).toString() )
//     )
//     .subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

// keyup$.subscribe( ( { key } ) => console.log('map', key ))

keyup$.pipe(
    map( ev => ev.key )
).subscribe( console.log )


// Pluck I
const keyUpPluck = keyup$.pipe(
    pluck('key')
);
keyUpPluck.subscribe(val => console.log('Pluck', val))

// Pluck II

const keyUpPluckII = keyup$.pipe(
    pluck('target', 'baseURI')
);
keyUpPluck.subscribe(val => console.log('Pluck II', val))


const keyUpMapTo$ = keyup$.pipe(
    mapTo( 'tecla presionada' )
)

keyUpMapTo$.subscribe( console.log );
