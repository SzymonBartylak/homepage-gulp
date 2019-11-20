"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

console.log('siema');
const name= 'Szymon';
const age= 22;
console.log(name);
console.log(age);


console.log(`Nazywam się ${name} i mam ${age} lata`);


const welcome = (name, age) => {
  console.log(`Witaj ${name}, masz ${age} lata!`);
}

welcome(name, age);

const button = document.querySelector('.heading__button--js');
console.log(button)


button.addEventListener('click', (e) => {
const heading = document.querySelector('.heading');
heading.innerHTML = (`Nazywam się ${name} i mam ${age} lata`);
});

const navigationSwitcher = document.querySelector('.navigation__switcher--js')

navigationSwitcher.addEventListener('click', (e) => {
  const navigation = document.querySelector('.navigation__js');
  navigation.classList.toggle('navigation__visable');
});
