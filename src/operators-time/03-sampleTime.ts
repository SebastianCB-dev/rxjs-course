import { fromEvent, interval } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>( document, 'click' );

// INFO: Primer ejemplo
click$.pipe(
    sampleTime(2000),
    map( ({ x, y }) => ({ x, y }) )
)
// .subscribe( console.log )

//INFO: Segundo ejemplo

const intervalo$ = interval(1000);

intervalo$.pipe(
    sampleTime(3000)
)
// .subscribe( console.log );




