import image from '../public/images/b.svg';
const body = document.querySelector('.body');
function loadScreen(){
    document.querySelector('.body').innerHTML = `
    <div class="loadScreen">
        <img id='loadImage' src="${image}" alt="Loading..." />
        <div id="loading"></div>
        <div class="spinner"></div>
        <h2 class="loadingText dot-loader">Loading 
        <span></span><span></span><span></span>
        </h2>
    </div>
    ` 
}

body.addEventListener(onload,loadScreen())



