import { of, PartialObserver } from 'rxjs';

const observer: PartialObserver<any> = {
    next: value => console.log('Value: ', value),
    error: null,
    complete: () => console.log('Terminamos la secuencia')
}

const obs$ = of<number>(1,2,3,4,5);

// const obs$ = of( [1,2], { a:1, b:2 }, function(){}, true, Promise.resolve( true ) );

obs$.subscribe( observer );


