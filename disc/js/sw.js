const CACHE_NAME  = "brc-pwa";
const CACHE_FILES = [
    './',
    './disc/css/mobile.css',
    './index.html'
];

self.addEventListener( "install", function( evento ) {
    evento.waitUntil(
        caches.open( CACHE_NAME )
        .then( cache => cache.addAll( CACHE_FILES ))
    );
} );

self.addEventListener( "fetch", function( evento ) {
    evento.waitUntil(
        caches.open( CACHE_NAME )
        .then( cache => cache.addAll( CACHE_FILES ))
    );
} );