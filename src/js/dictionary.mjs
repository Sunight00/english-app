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
    async getWordInfo(){
        const word = await this.generateWord()
        const object= await this.getWord(word)
        let data = object[0]
        console.log(data.word)
        document.getElementById("word").innerHTML = data.word
        document.getElementById("phonetic").innerHTML = data.phonetic || 'phonetic not available'
        document.getElementById('audio').src = data.phonetics[0].audio || data.phonetics[1].audio
        document.getElementById("definition").innerHTML = `<br>${data.meanings[0].partOfSpeech}: ${data.meanings[0].definitions[0].definition} for more info <a href="https://dictionary.cambridge.org/dictionary/english/${word}" target='_blank'>Search</a>` 
    }

}




/* <br> ${data.meanings[0].partOfSpeech}: <br> 1. ${data.meanings[0].definitions[0].definition}<br> 2. ${data.meanings[1].definitions[1].definition}`*/