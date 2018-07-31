import hello from './hello.js';
import $ from 'jquery';
console.log('index.js console = ', $);

const div = document.createElement('div');
div.innerHTML = hello();

document.body.appendChild(div);
