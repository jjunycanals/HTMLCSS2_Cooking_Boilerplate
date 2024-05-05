import chefs from './data.js';
var datosjson = chefs;

function printSites() {
    const content = document.getElementById('grid-sites');
    var i = 0;
    if (content){
        datosjson.forEach(element => {
            i += 1;
            content.innerHTML += `
                <article class="sites">
                    <div class="sites-header">
                      <div class="sites-img">
                        <img src="./assets/images/avatar.png" alt="${element.titol}">
                      </div>
                    </div>
                    <div class="sites-body">
                        <h2>${element.titol}</h2>
                        <p>${element.detall.text}</p>
                    </div>
                </article>
            `;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {printSites();});
