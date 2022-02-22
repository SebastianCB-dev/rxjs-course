import { fromEvent } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';


const click$ = fromEvent<PointerEvent>( document, 'click');


click$.pipe(
    map( ({ clientX }) => ({ clientX })),
    tap(val => console.log('Tap', val)),
    auditTime(2000)
).subscribe( console.log );

