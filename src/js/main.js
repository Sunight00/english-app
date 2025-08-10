import openAiClient from "./ai.mjs";
import dictionary from "./dictionary.mjs";

const ai = new openAiClient()
const words = new dictionary()

//const newWord = ai.newWord()

    //document.getElementById("q").innerHTML = ai.newWord()//
   //newWord.then((result) => document.getElementById("q").innerHTML = result.output_text);

 words.getWordInfo()
 words.getStoredWords()

let date = new Date();
let currentDate = date.toISOString().split('T')[0];
console.log(currentDate);

function getDate(){
  localStorage.getItem("date") || currentDate;
}

function setDate(){
  localStorage.setItem("date", currentDate);
}
if (getDate() == currentDate) {

}