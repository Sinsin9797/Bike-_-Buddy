
self.addEventListener('install', event => {
    console.log('Service worker installed');
});
self.addEventListener('fetch', function(event) {
    // Just a basic fetch event for now
});
