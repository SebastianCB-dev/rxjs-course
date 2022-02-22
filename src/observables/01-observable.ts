import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('Next: ', value),
    error: err => console.warn('Error: ', err ),
    complete: () => console.log('Completado')
}

const obs$ = new Observable<string>( subscriber => {
    subscriber.next('Hola');
    subscriber.next('Hola');
    subscriber.next('Hola');
    //Forzar un error
    const a = undefined;
    a.nombre = 'Fernando';
    // subscriber.error('Error')
    subscriber.complete();
});

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );

obs$.subscribe( observer );
