export default class dictionary{
    constructor(word)
    {
        this.word = word
    }

    async getWord(word){
        const object = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        return object
    }

}