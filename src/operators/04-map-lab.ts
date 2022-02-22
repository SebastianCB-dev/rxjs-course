import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus congue est ac vestibulum. Curabitur posuere est a volutpat viverra. Duis nulla magna, rhoncus at finibus at, finibus a lacus. Curabitur orci neque, placerat a dolor ac, dapibus tempor turpis. Sed ultricies sapien a tellus rutrum, quis aliquam ante placerat. Aliquam quis nisi eget quam ullamcorper convallis venenatis a ipsum. Aenean elementum dolor a fermentum venenatis. In nec elit in turpis malesuada bibendum. Nam ac bibendum mi.
<br><br>
Nam nibh tellus, efficitur dignissim felis eget, porta vestibulum ex. Duis maximus faucibus nisl. Fusce sed commodo magna. Nam et nisi pulvinar, dictum tellus sit amet, consequat justo. Vestibulum consequat ut est id consequat. Maecenas eros dui, facilisis at rhoncus ac, convallis et libero. Aenean finibus diam nibh, in dignissim est efficitur ac. Phasellus rutrum dictum nunc, at viverra augue varius accumsan. Duis maximus libero finibus, gravida est quis, tincidunt mauris. Cras commodo lacus vitae odio ultrices, dignissim tempor mi facilisis. Nunc ac lacinia justo. Nunc convallis neque in sapien fringilla, eu condimentum libero egestas.
<br><br>
Ut interdum nisl tincidunt est pulvinar, quis sollicitudin nunc luctus. Nam condimentum sagittis turpis in aliquet. Nam id lorem ac tellus tempor facilisis. Nulla facilisi. Mauris at pretium mi. Nam sed tellus eu dolor aliquam consectetur. Duis consectetur a nunc placerat auctor. Vestibulum tincidunt, sapien nec venenatis pretium, odio ligula auctor felis, eget vehicula nibh purus et nunc. Pellentesque tincidunt porttitor condimentum. Etiam tristique lectus nec nisl imperdiet interdum. Donec ullamcorper massa ex, sit amet consectetur nibh sagittis eget. Quisque eleifend, ligula in vehicula molestie, diam augue fringilla quam, dictum varius leo massa non ante. Sed condimentum leo sed consequat egestas.
<br><br>
Donec eu massa vel metus rhoncus ullamcorper eu quis lacus. Nam non metus nunc. Morbi semper lacinia laoreet. Praesent sit amet risus a diam rhoncus euismod. Aenean sollicitudin eget purus convallis lobortis. Duis quam mauris, imperdiet quis risus a, consectetur luctus risus. Nunc a condimentum dui. Vestibulum posuere mi eget libero consequat, non dictum sapien egestas. Donec in turpis ante. Fusce gravida pretium maximus. Nullam in euismod sapien. Morbi a risus at felis scelerisque dictum. Phasellus accumsan elementum metus at viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget volutpat est.
<br><br>
Sed et rhoncus sapien. Nunc quis ultricies nisl. Donec consequat gravida dolor nec eleifend. Nunc et facilisis massa. Nunc tempus lobortis turpis id tempus. Fusce auctor commodo est id efficitur. Donec commodo, urna in ultricies blandit, nisl velit finibus orci, vitae bibendum massa sapien blandit velit.
<br><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus congue est ac vestibulum. Curabitur posuere est a volutpat viverra. Duis nulla magna, rhoncus at finibus at, finibus a lacus. Curabitur orci neque, placerat a dolor ac, dapibus tempor turpis. Sed ultricies sapien a tellus rutrum, quis aliquam ante placerat. Aliquam quis nisi eget quam ullamcorper convallis venenatis a ipsum. Aenean elementum dolor a fermentum venenatis. In nec elit in turpis malesuada bibendum. Nam ac bibendum mi.
<br><br>
Nam nibh tellus, efficitur dignissim felis eget, porta vestibulum ex. Duis maximus faucibus nisl. Fusce sed commodo magna. Nam et nisi pulvinar, dictum tellus sit amet, consequat justo. Vestibulum consequat ut est id consequat. Maecenas eros dui, facilisis at rhoncus ac, convallis et libero. Aenean finibus diam nibh, in dignissim est efficitur ac. Phasellus rutrum dictum nunc, at viverra augue varius accumsan. Duis maximus libero finibus, gravida est quis, tincidunt mauris. Cras commodo lacus vitae odio ultrices, dignissim tempor mi facilisis. Nunc ac lacinia justo. Nunc convallis neque in sapien fringilla, eu condimentum libero egestas.
<br><br>
Ut interdum nisl tincidunt est pulvinar, quis sollicitudin nunc luctus. Nam condimentum sagittis turpis in aliquet. Nam id lorem ac tellus tempor facilisis. Nulla facilisi. Mauris at pretium mi. Nam sed tellus eu dolor aliquam consectetur. Duis consectetur a nunc placerat auctor. Vestibulum tincidunt, sapien nec venenatis pretium, odio ligula auctor felis, eget vehicula nibh purus et nunc. Pellentesque tincidunt porttitor condimentum. Etiam tristique lectus nec nisl imperdiet interdum. Donec ullamcorper massa ex, sit amet consectetur nibh sagittis eget. Quisque eleifend, ligula in vehicula molestie, diam augue fringilla quam, dictum varius leo massa non ante. Sed condimentum leo sed consequat egestas.
<br><br>
Donec eu massa vel metus rhoncus ullamcorper eu quis lacus. Nam non metus nunc. Morbi semper lacinia laoreet. Praesent sit amet risus a diam rhoncus euismod. Aenean sollicitudin eget purus convallis lobortis. Duis quam mauris, imperdiet quis risus a, consectetur luctus risus. Nunc a condimentum dui. Vestibulum posuere mi eget libero consequat, non dictum sapien egestas. Donec in turpis ante. Fusce gravida pretium maximus. Nullam in euismod sapien. Morbi a risus at felis scelerisque dictum. Phasellus accumsan elementum metus at viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget volutpat est.
<br><br>
Sed et rhoncus sapien. Nunc quis ultricies nisl. Donec consequat gravida dolor nec eleifend. Nunc et facilisis massa. Nunc tempus lobortis turpis id tempus. Fusce auctor commodo est id efficitur. Donec commodo, urna in ultricies blandit, nisl velit finibus orci, vitae bibendum massa sapien blandit velit.
<br><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus congue est ac vestibulum. Curabitur posuere est a volutpat viverra. Duis nulla magna, rhoncus at finibus at, finibus a lacus. Curabitur orci neque, placerat a dolor ac, dapibus tempor turpis. Sed ultricies sapien a tellus rutrum, quis aliquam ante placerat. Aliquam quis nisi eget quam ullamcorper convallis venenatis a ipsum. Aenean elementum dolor a fermentum venenatis. In nec elit in turpis malesuada bibendum. Nam ac bibendum mi.
<br><br>
Nam nibh tellus, efficitur dignissim felis eget, porta vestibulum ex. Duis maximus faucibus nisl. Fusce sed commodo magna. Nam et nisi pulvinar, dictum tellus sit amet, consequat justo. Vestibulum consequat ut est id consequat. Maecenas eros dui, facilisis at rhoncus ac, convallis et libero. Aenean finibus diam nibh, in dignissim est efficitur ac. Phasellus rutrum dictum nunc, at viverra augue varius accumsan. Duis maximus libero finibus, gravida est quis, tincidunt mauris. Cras commodo lacus vitae odio ultrices, dignissim tempor mi facilisis. Nunc ac lacinia justo. Nunc convallis neque in sapien fringilla, eu condimentum libero egestas.
<br><br>
Ut interdum nisl tincidunt est pulvinar, quis sollicitudin nunc luctus. Nam condimentum sagittis turpis in aliquet. Nam id lorem ac tellus tempor facilisis. Nulla facilisi. Mauris at pretium mi. Nam sed tellus eu dolor aliquam consectetur. Duis consectetur a nunc placerat auctor. Vestibulum tincidunt, sapien nec venenatis pretium, odio ligula auctor felis, eget vehicula nibh purus et nunc. Pellentesque tincidunt porttitor condimentum. Etiam tristique lectus nec nisl imperdiet interdum. Donec ullamcorper massa ex, sit amet consectetur nibh sagittis eget. Quisque eleifend, ligula in vehicula molestie, diam augue fringilla quam, dictum varius leo massa non ante. Sed condimentum leo sed consequat egestas.
<br><br>
Donec eu massa vel metus rhoncus ullamcorper eu quis lacus. Nam non metus nunc. Morbi semper lacinia laoreet. Praesent sit amet risus a diam rhoncus euismod. Aenean sollicitudin eget purus convallis lobortis. Duis quam mauris, imperdiet quis risus a, consectetur luctus risus. Nunc a condimentum dui. Vestibulum posuere mi eget libero consequat, non dictum sapien egestas. Donec in turpis ante. Fusce gravida pretium maximus. Nullam in euismod sapien. Morbi a risus at felis scelerisque dictum. Phasellus accumsan elementum metus at viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget volutpat est.
<br><br>
Sed et rhoncus sapien. Nunc quis ultricies nisl. Donec consequat gravida dolor nec eleifend. Nunc et facilisis massa. Nunc tempus lobortis turpis id tempus. Fusce auctor commodo est id efficitur. Donec commodo, urna in ultricies blandit, nisl velit finibus orci, vitae bibendum massa sapien blandit velit.
<br><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus congue est ac vestibulum. Curabitur posuere est a volutpat viverra. Duis nulla magna, rhoncus at finibus at, finibus a lacus. Curabitur orci neque, placerat a dolor ac, dapibus tempor turpis. Sed ultricies sapien a tellus rutrum, quis aliquam ante placerat. Aliquam quis nisi eget quam ullamcorper convallis venenatis a ipsum. Aenean elementum dolor a fermentum venenatis. In nec elit in turpis malesuada bibendum. Nam ac bibendum mi.
<br><br>
Nam nibh tellus, efficitur dignissim felis eget, porta vestibulum ex. Duis maximus faucibus nisl. Fusce sed commodo magna. Nam et nisi pulvinar, dictum tellus sit amet, consequat justo. Vestibulum consequat ut est id consequat. Maecenas eros dui, facilisis at rhoncus ac, convallis et libero. Aenean finibus diam nibh, in dignissim est efficitur ac. Phasellus rutrum dictum nunc, at viverra augue varius accumsan. Duis maximus libero finibus, gravida est quis, tincidunt mauris. Cras commodo lacus vitae odio ultrices, dignissim tempor mi facilisis. Nunc ac lacinia justo. Nunc convallis neque in sapien fringilla, eu condimentum libero egestas.
<br><br>
Ut interdum nisl tincidunt est pulvinar, quis sollicitudin nunc luctus. Nam condimentum sagittis turpis in aliquet. Nam id lorem ac tellus tempor facilisis. Nulla facilisi. Mauris at pretium mi. Nam sed tellus eu dolor aliquam consectetur. Duis consectetur a nunc placerat auctor. Vestibulum tincidunt, sapien nec venenatis pretium, odio ligula auctor felis, eget vehicula nibh purus et nunc. Pellentesque tincidunt porttitor condimentum. Etiam tristique lectus nec nisl imperdiet interdum. Donec ullamcorper massa ex, sit amet consectetur nibh sagittis eget. Quisque eleifend, ligula in vehicula molestie, diam augue fringilla quam, dictum varius leo massa non ante. Sed condimentum leo sed consequat egestas.
<br><br>
Donec eu massa vel metus rhoncus ullamcorper eu quis lacus. Nam non metus nunc. Morbi semper lacinia laoreet. Praesent sit amet risus a diam rhoncus euismod. Aenean sollicitudin eget purus convallis lobortis. Duis quam mauris, imperdiet quis risus a, consectetur luctus risus. Nunc a condimentum dui. Vestibulum posuere mi eget libero consequat, non dictum sapien egestas. Donec in turpis ante. Fusce gravida pretium maximus. Nullam in euismod sapien. Morbi a risus at felis scelerisque dictum. Phasellus accumsan elementum metus at viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget volutpat est.
<br><br>
Sed et rhoncus sapien. Nunc quis ultricies nisl. Donec consequat gravida dolor nec eleifend. Nunc et facilisis massa. Nunc tempus lobortis turpis id tempus. Fusce auctor commodo est id efficitur. Donec commodo, urna in ultricies blandit, nisl velit finibus orci, vitae bibendum massa sapien blandit velit.
<br><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus congue est ac vestibulum. Curabitur posuere est a volutpat viverra. Duis nulla magna, rhoncus at finibus at, finibus a lacus. Curabitur orci neque, placerat a dolor ac, dapibus tempor turpis. Sed ultricies sapien a tellus rutrum, quis aliquam ante placerat. Aliquam quis nisi eget quam ullamcorper convallis venenatis a ipsum. Aenean elementum dolor a fermentum venenatis. In nec elit in turpis malesuada bibendum. Nam ac bibendum mi.
<br><br>
Nam nibh tellus, efficitur dignissim felis eget, porta vestibulum ex. Duis maximus faucibus nisl. Fusce sed commodo magna. Nam et nisi pulvinar, dictum tellus sit amet, consequat justo. Vestibulum consequat ut est id consequat. Maecenas eros dui, facilisis at rhoncus ac, convallis et libero. Aenean finibus diam nibh, in dignissim est efficitur ac. Phasellus rutrum dictum nunc, at viverra augue varius accumsan. Duis maximus libero finibus, gravida est quis, tincidunt mauris. Cras commodo lacus vitae odio ultrices, dignissim tempor mi facilisis. Nunc ac lacinia justo. Nunc convallis neque in sapien fringilla, eu condimentum libero egestas.
<br><br>
Ut interdum nisl tincidunt est pulvinar, quis sollicitudin nunc luctus. Nam condimentum sagittis turpis in aliquet. Nam id lorem ac tellus tempor facilisis. Nulla facilisi. Mauris at pretium mi. Nam sed tellus eu dolor aliquam consectetur. Duis consectetur a nunc placerat auctor. Vestibulum tincidunt, sapien nec venenatis pretium, odio ligula auctor felis, eget vehicula nibh purus et nunc. Pellentesque tincidunt porttitor condimentum. Etiam tristique lectus nec nisl imperdiet interdum. Donec ullamcorper massa ex, sit amet consectetur nibh sagittis eget. Quisque eleifend, ligula in vehicula molestie, diam augue fringilla quam, dictum varius leo massa non ante. Sed condimentum leo sed consequat egestas.
<br><br>
Donec eu massa vel metus rhoncus ullamcorper eu quis lacus. Nam non metus nunc. Morbi semper lacinia laoreet. Praesent sit amet risus a diam rhoncus euismod. Aenean sollicitudin eget purus convallis lobortis. Duis quam mauris, imperdiet quis risus a, consectetur luctus risus. Nunc a condimentum dui. Vestibulum posuere mi eget libero consequat, non dictum sapien egestas. Donec in turpis ante. Fusce gravida pretium maximus. Nullam in euismod sapien. Morbi a risus at felis scelerisque dictum. Phasellus accumsan elementum metus at viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget volutpat est.
<br><br>
Sed et rhoncus sapien. Nunc quis ultricies nisl. Donec consequat gravida dolor nec eleifend. Nunc et facilisis massa. Nunc tempus lobortis turpis id tempus. Fusce auctor commodo est id efficitur. Donec commodo, urna in ultricies blandit, nisl velit finibus orci, vitae bibendum massa sapien blandit velit.
<br><br>
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.classList.add('progress-bar');
body.append(progressBar);

// TODO: Funcion que haga el calculo
const calcularPorcentajeScroll = ( event ) => {
    
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    
    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
}

// Streams
const scroll$ = fromEvent( document, 'scroll' );

const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {

    progressBar.style.width = `${ porcentaje }%`;

});