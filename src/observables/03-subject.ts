import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('Next: ', value),
    error: err => console.warn('Error: ', err ),
    complete: () => console.log('Completado')
};

const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval( () => {
        subs.next( Math.random() );
    }, 1000 )

    return () => clearInterval( intervalID );

});

/*
    1- Casteo múltiple
    2- Tambien es un observer
    3- Next, error, y complete
*/

const subject$ = new Subject();
const intervalSubject$ = intervalo$.subscribe( subject$ );



// const subs1 = intervalo$.subscribe( rnd => console.log('subs1: ', rnd ));
// const subs2 = intervalo$.subscribe( rnd2 => console.log('subs2: ', rnd2 ));

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout( () => {

    subject$.next(10);

    subject$.complete();
    intervalSubject$.unsubscribe();
}, 3500 );