import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('Next: ', value),
    error: err => console.warn('Error: ', err ),
    complete: () => console.log('Completado')
}

const intervalo$ = new Observable<number>( subs => {

    // Crear un contador, 1, 2, 3, 4, 5......
    let valor = 0;
    const interval = setInterval( ()=> {
        subs.next(valor);
        valor++;
    }, 1000)


    setTimeout(()=> {
        subs.complete();
    }, 2500)
    return () => {
        clearInterval( interval );
    }

});

const subscription = intervalo$.subscribe( num => console.log('Num: ', num) );

subscription.add()

setTimeout(()=> {
    subscription.unsubscribe();
    
},3000)


