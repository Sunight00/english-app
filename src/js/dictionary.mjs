export default class dictionary{
    constructor(word)
    {
        this.word = word
    }
    //An api that returns random words on page reload
    async generateWord(){
        const response = await fetch (`https://random-word-api.vercel.app/api?words=1`)
        const object = await response.json()
        return object[0]
    }

    // This accesses the return word from generateWord method and uses a dictionary api to get that word definitions
    async getWord(word){
        const response = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const object = await response.json()
        return object
    }

    //This Dom calls the generate and get word and and update DOM with the data
    async getWordInfo(word, x=''){
        //const word = await this.generateWord()
        const object= await this.getWord(word)
        let data = object[0]
        try{
            document.querySelector(".word").innerHTML = data.word
            document.querySelector(".phonetic").innerHTML = data.phonetic || '"N/A"'
            document.querySelector('.audio').src = data.phonetics[0].audio || data.phonetics[1].audio
            document.querySelector(".definition").innerHTML = `<br>${data.meanings[0].partOfSpeech}: ${data.meanings[0].definitions[0].definition} For more info <a href="https://dictionary.cambridge.org/dictionary/english/${x}" target='_blank'>Search</a>`;           
        }
        catch(err){
            document.querySelector(".word").innerHTML = data.word
            document.querySelector(".definition").innerHTML = `<br>For more info: <a href="https://dictionary.cambridge.org/dictionary/english/${x}" target='_blank'>Search</a>`;  
        }

        try{
            document.querySelector(".wor").innerHTML = data.word
            document.querySelector(".phoneti").innerHTML = data.phonetic || '"N/A"'
            document.querySelector('.audi').src = data.phonetics[0].audio || data.phonetics[1].audio
            document.querySelector(".definitio").innerHTML = `<br>${data.meanings[0].partOfSpeech}: ${data.meanings[0].definitions[0].definition} For more info <a href="https://dictionary.cambridge.org/dictionary/english/${x}" target='_blank'>Search</a>`;           
        }
        catch(err){
            document.querySelector(".wor").innerHTML = data.word
            document.querySelector(".definitio").innerHTML = `<br>For more info: <a href="https://dictionary.cambridge.org/dictionary/english/${x}" target='_blank'>Search</a>`;  
        }

        
        const button = document.querySelector(".save");
        button.addEventListener("click", () => {
            this.storeWords(word);
            window.location.reload();
            alert("Word saved successfully!");
        });
        const butto = document.querySelector("#ss");
        butto.addEventListener("click", () => {
            this.storeWords(word);
            window.location.reload();
            alert("Word saved successfully!");
        });
        
        
    }

    storeWords(word) {
      let words = JSON.parse(localStorage.getItem("words")) || [];
    let index = words.findIndex(w => w === word);

    if (index !== -1) {
        words[index] = word;
    } else {
        words.push(word);
    }
    localStorage.setItem("words", JSON.stringify(words));
    }


    /*async getStoredWords() {
        let words = JSON.parse(localStorage.getItem("words")) || [];
        const listContainer = document.querySelector("list");
        listContainer.innerHTML = ""; // Clear previous content

        words.forEach((Word) => {
            const object = await this.getWord(Word)
            let data = object[0]
            const card = document.createElement("div");
            card.className = "card";
            const word = document.createElement("p");
            const phonetic = document.createElement("p");
            const definition = document.createElement("p");
            try {
                word.innerHTML = `Word: ${data.word}`;
                card.appendChild(word);
                document.querySelector("list").appendChild(card)
            }
            catch (err) {
                console.error("Error creating card:", err);
        }})
    }*/
   async getStoredWords() {
    let words = JSON.parse(localStorage.getItem("words")) || [];
    const listContainer = document.querySelector(".list");
    listContainer.innerHTML = ""; // Clear previous content

    for (const Word of words) {
        try {
            const object = await this.getWord(Word);
            const data = object[0];

            const card = document.createElement("div");
            card.className = "card";

            const word = document.createElement("p");
            word.innerHTML = `Word: ${data.word}`;
            card.appendChild(word);

            const phonetic = document.createElement("p");
            phonetic.innerHTML = `Phonetic: ${data.phonetic || "N/A"}`;
            card.appendChild(phonetic);

            const definition = document.createElement("p");
            const definitionText = data.meanings?.[0]?.definitions?.[0]?.definition || "No definition available";
            definition.innerHTML = `Definition: ${definitionText}`;
            card.appendChild(definition);

            const search = document.createElement("p");
            search.innerHTML = `For more info: <a href="https://dictionary.cambridge.org/dictionary/english/${Word}" target='_blank'>Search</a>`;
            card.appendChild(search);

            listContainer.appendChild(card);
        } catch (err) {
            console.error("Error creating card:", err);
        }
    }
}

}




/* <br> ${data.meanings[0].partOfSpeech}: <br> 1. ${data.meanings[0].definitions[0].definition}<br> 2. ${data.meanings[1].definitions[1].definition}`*/