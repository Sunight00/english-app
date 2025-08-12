async function youtube(){
    const reponse = await ("/json/youtude.json");
    if (!reponse.ok) {
      throw new Error("Network response was not ok");
    }
    else {
        console.log("JSON file loaded successfully");
    }
}

youtube()