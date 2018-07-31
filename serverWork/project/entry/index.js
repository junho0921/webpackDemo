const div = document.createElement('div');
div.innerHTML = 'hello webpack';

document.body.appendChild(div);

if ('serviceWorker' in navigator) {

    const PATH = location.href.split('?')[0].replace('index.html', '');

    window.addEventListener('load', () => {
        navigator.serviceWorker.register(PATH + 'service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
        });
    });
}
