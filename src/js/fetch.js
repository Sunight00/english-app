async function youtube(){
    const reponse = await fetch ("../json/youtude.json");
    return reponse.json();
}

const videoContainer = document.querySelector(".video-container");

async function loadVideos() {
const n = await youtube()
console.log(n['1']['title']);}

loadVideos()