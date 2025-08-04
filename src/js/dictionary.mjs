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
        document.getElementById("phonetic").innerHTML = data.phonetic || 'phonetic not available'
        document.getElementById('audio').src = data.phonetics[0].audio || data.phonetics[1].audio
        document.getElementById("definition").innerHTML = `<br>${data.meanings[0].partOfSpeech}: ${data.meanings[0].definitions[0].definition} for more info <a href="https://www.google.com/search?q=${word}&sca_esv=9576322275790996&sxsrf=AE3TifMW4TUSAuKLqmtiemawrBq0mO7dgg%3A1754271772749&source=hp&ei=HBCQaISdLI6jhbIPitPMoAw&iflsig=AOw8s4IAAAAAaJAeLM0zF55fpWHLPa57sZ70c6drJJYI&ved=0ahUKEwiEm-nOg_COAxWOUUEAHYopE8QQ4dUDCBc&uact=5&oq=happy&gs_lp=Egdnd3Mtd2l6IgVoYXBweTIEECMYJzIKEAAYgAQYQxiKBTILEAAYgAQYkQIYigUyDRAuGIAEGLEDGEMYigUyDRAuGIAEGEMY1AIYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyEBAAGIAEGLEDGEMYgwEYigUyChAAGIAEGEMYigVIjQ9QhgNYugxwAXgAkAEAmAHxAaAB7wiqAQMyLTW4AQPIAQD4AQGYAgagAqcJqAIKwgIQECMYgAQYJxiKBRjqAhitBsICDRAjGIAEGCcYigUY6gLCAgcQIxgnGOoCwgITEC4YgAQY0QMYxwEYJxiKBRjqAsICDxAjGIAEGCcYigUYRhj5AcICChAjGIAEGCcYigXCAg4QLhiABBixAxiDARiKBcICCBAAGIAEGLEDwgIFEC4YgATCAg4QABiABBixAxiDARiKBcICERAuGIAEGJECGMcBGIoFGK8BwgILEC4YgAQYsQMYgwGYAxHxBbyMGDeio9tNkgcFMS4wLjWgB9c5sgcDMi01uAeVCcIHBTItNC4yyAcw&sclient=gws-wiz">Search</a>` 

    }

}

/* <br> ${data.meanings[0].partOfSpeech}: <br> 1. ${data.meanings[0].definitions[0].definition}<br> 2. ${data.meanings[1].definitions[1].definition}`*/