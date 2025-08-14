async function youtube(){
    const reponse = await fetch ("../json/youtude.json");
    return reponse.json();
}

const videoContainer = document.querySelector(".video-container");

async function loadVideos() {
const n = await youtube()
n.videos.forEach((video) => {
    console.log(video);
    const videoElement = document.createElement("div");
    videoElement.classList.add("video");
    const iframe = document.createElement("iframe");
    iframe.src = video.url;
    iframe.width = "560";
    iframe.height = "315";
    iframe.title = video.title;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;  web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    videoElement.appendChild(iframe);

    const blocker= document.createElement("div");
    blocker.classList.add("video-blocker");
    blocker.appendChild(videoElement);
    document.querySelector(".video-container").appendChild(blocker);
});

}


loadVideos()
