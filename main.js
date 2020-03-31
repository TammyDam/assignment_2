const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (const a=1; a <= 5; a++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', 'pic_' + a + '.jpg');
thumbBar.appendChild(newImage);}
/* Wiring up the Darken/Lighten button */
