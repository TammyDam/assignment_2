/*const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');*/

/* Looping through images */
/*for (const a=0; a <= 5; a++) {
  const newImage = document.createElement('img');
  const nav= 'images/pic' + (a + 1).toString() + '.jpg';
  newImage.setAttribute('src', nav);
  thumbBar.appendChild(newImage);
}*/

    /* Darken/Lighten button */
    

/*btn.onclick = function() {
  const btnClass = btn.getAttribute('class');
    if (btn.getAttribute('class') === 'dark'){
      btn.setAttribute('class','light');
      btn.textContent = 'lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } 
    
    else {
      btn.setAttribute('class','dark');
      btn.textContent = 'darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }*/
/* Source used:https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/gallery/marking-guide.md*/


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    displayedImage.src = e.target.src;
  }
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
  const btnClass = btn.getAttribute('class');
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}