import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';



const numeros$ = range(1,5);

numeros$.pipe(
  tap( x => console.log('tap', x) ),
  map( val => val * 10 ),
  tap({
      next: val => console.log('tap2', val),
      complete: () => console.log('Completado')
  }),
)
.subscribe( val => console.log('subs', val ) )
