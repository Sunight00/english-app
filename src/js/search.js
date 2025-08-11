const submit = document.querySelector(".btn");

submit.addEventListener("click", () => {
    const mod = document.querySelector(".mod");
    const dialog = createDialog();
    mod.appendChild(dialog);
    dialog.showModal();

    // Save dialog open state
    localStorage.setItem("dialogOpen", "true");
});

function createDialog() {
    const dialog = document.createElement("dialog");

    dialog.innerHTML = `
    <button id="closeBtn">❌</button>
        <iframe id="wikiFrame"
            src="https://en.wikipedia.org/wiki/${getParam()}" 
            title="Wikipedia Page"
            style="border:none;">
        </iframe>   
    `;
    dialog.querySelector("#closeBtn").addEventListener("click", () => {
        closeDialog(dialog);
    });
    dialog.addEventListener("click", (event) => {
        const rect = dialog.getBoundingClientRect();
        const inDialog =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;
        if (!inDialog) {
            closeDialog(dialog);
        }
    });

    return dialog;
}

function closeDialog(dialog) {
    dialog.close();
    dialog.remove();
    localStorage.removeItem("dialogOpen");
}

// Check if dialog should be open on reload
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("dialogOpen") === "true") {
        const mod = document.querySelector(".mod");
        const dialog = createDialog();
        mod.appendChild(dialog);
        dialog.showModal();
    }
});

function getParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("search") || "Main_Page"; // Default Wikipedia page if missing
}
