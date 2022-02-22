import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';
import { of } from 'rxjs';


const url = 'https://api.github.com/usXXXers?per_page=5';

const manejaErrores = ( response: Response ) => {

    if( !response.ok) {
        throw new Error( response.statusText );
    }

    return response;
};


const fetchPromise = fetch( url );

// fetchPromise
//     .then( resp => resp.json())
//     .then( console.log )
//     .catch( err => console.warn('error en usuarios', err));

// fetchPromise
//     .then( manejaErrores )
//     .then( resp => resp.json())
//     .then( console.log )
//     .catch( err => console.warn('error en usuarios', err));


// INFO: AJAX RxJs

const atrapaError = (err: AjaxError) => {
    console.warn('error en: ', err)
    return of([])
};

ajax( url ).pipe(
    pluck('response'),
    catchError( atrapaError ),
)
.subscribe( console.log );