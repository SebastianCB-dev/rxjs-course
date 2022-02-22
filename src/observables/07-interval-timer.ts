import { interval, timer } from 'rxjs';


const observer = {
    next: value => console.log('Next: ', value),
    complete: () => console.log('Completado')
};


const interval$ = interval(1000);

// const timer$ = timer(2000);
// INFO: Primera ejecucion, periodo
// const timer$ = timer(2000,1000);

const timer$ = timer();

console.log('Inicio');
// Asincrono
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');


