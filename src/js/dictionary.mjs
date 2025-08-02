export default class dictionary{
    constructor(word)
    {
        this.word = word
    }

    async getWord(word){
        const response = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const object = await response.json()
        return object
    }

    async getWordInfo(word){
        const object= await this.getWord(word)
        let data = object[0]
        console.log(data.word)
        document.getElementById("word").innerHTML = data.word
        document.getElementById("phonetic").innerHTML = data.phonetic
        

    }

}