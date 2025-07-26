import image from '../public/images/b.svg';
const load = document.querySelector('.load');
let t = true;
function loadScreen(){

    if (t){
    document.querySelector('.load').innerHTML = `
    <div class="loadScreen">
        <img id='loadImage' src="${image}" alt="Loading..." />
        <div id="loading"></div>
        <div class="spinner"></div>
        <h2 class="loadingText dot-loader">Loading 
        <span></span><span></span><span></span>
        </h2>
        <h1 class="intro"></h1>
    </div>
    ` }
}

load.addEventListener(onload,loadScreen())


setTimeout(endLoadScreen,4000)
 function endLoadScreen(){
    window.location.href ="./src/pages/home.html"
    
    /*document.querySelector('.loadScreen').remove()
    homePage()
    t = false;*/
    homePage()
 }