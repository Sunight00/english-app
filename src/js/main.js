import openAiClient from "./ai.mjs";
import dictionary from "./dictionary.mjs";

const ai = new openAiClient()
const x = new dictionary()

const newWord = ai.newWord()

    //document.getElementById("q").innerHTML = ai.newWord()//
    newWord.then((result) => document.getElementById("q").innerHTML = result.output_text);
