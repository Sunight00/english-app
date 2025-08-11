import openAiClient from "./ai.mjs";
import dictionary from "./dictionary.mjs";

const ai = new openAiClient()
const words = new dictionary()

//const newWord = ai.newWord()

    //document.getElementById("q").innerHTML = ai.newWord()//
   //newWord.then((result) => document.getElementById("q").innerHTML = result.output_text);

 words.getWordInfo()
 words.getStoredWords()



let date = new Date("2019-03-25");
let currentDate = date.toISOString().split('T')[0];
console.log(currentDate);

function getDate(){
  return localStorage.getItem("date") || currentDate;
}

function setDate(){
  let date = new Date("2017-03-25");
  let urrentDate = date.toISOString().split('T')[0];
  localStorage.setItem("date", urrentDate);
}

if (getDate() == currentDate) {
  const todayWord = localStorage.getItem("todayWord");
  console.log(todayWord);
  //const object= await words.getWord(todayWord)
  words.getWordInfo(todayWord)    
}
else {
  const word = await words.generateWord()
  const object= await words.getWord(word)
  words.getWordInfo(object)
  setDate();
}





        



