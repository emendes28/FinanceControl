const self = this;
const CACHE_MY_SITE = 'my-webapp-cache';
const urlsDisponiveisOffiline = [
    "./index.html",
    "/assets/**",
    "./favicon.ico",
    "/*.bundle.css",
    "/*.bundle.js",
    "/*.chunk.js"
];

// Poderia ser self ao invés de this
self.addEventListener('install',
    (event) => {
        // Executa a instalação
        event.waitUntil(
            //Incializa o seu cache 
            caches.open(CACHE_MY_SITE).then(
                (cache) => {
                    //Como fim de debug
                    console.info('Cache adicionado com sucesso');
                    return cache.addAll(urlsDisponiveisOffiline);
                }
            ).catch(
                (error) => {

                    console.error('O cache não foi adicionado por ' + error);
                })
        )
    });
//Aqui adiciona um Listener(passa a escutar o fetch) 
self.addEventListener("fetch",
// No "fetch" (busca) os eventos são emitidos/disparados //para service worker// até que eles respondam com sucesso através de XMLHttpRequest
     (e) => {
        // Todas operações de cache são assincronas, e sempre usando promessas
        e.respondWith(
            // Verifica se a url requisitada esta no cache
            caches.match(e.request).then(
                 (response) => {
                    // Se a promessa for retornada com sucesso obtem o conteudo novo
                    return response || fetch(e.request);
                }
            ).catch(
                 () => {
                    //Se não Estamos sem conexão e//sem joguinho do dino :( rs temos a url...
                    return caches.match("/urlTratamento.html");
                }
            )
        );
    }
);