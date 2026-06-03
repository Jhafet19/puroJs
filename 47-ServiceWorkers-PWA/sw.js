const nombreCache = 'apv-v1'
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    'css*styles.css',
    '/js/apps.js',
    '/js/apv.js',
]
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker')
    e.weaitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('Cacheando')
                cache.addAll(archivos)
            })
    )
    console.log(e)
})

self.addEventListener('activate', e => {
   
    e.weaitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.filter(key => key !== nombreCache)
                )
            })
    )
})

self.addEventListener('fetch', e => {
    console.log('Fetch realizado')
    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache
            }).catch(() => caches.match('/error.html'))
    )
    console.log(e)
})