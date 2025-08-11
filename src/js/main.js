import openAiClient from "./ai.mjs";
import dictionary from "./dictionary.mjs";

const ai = new openAiClient()
const words = new dictionary()

//const newWord = ai.newWord()

    //document.getElementById("q").innerHTML = ai.newWord()//
   //newWord.then((result) => document.getElementById("q").innerHTML = result.output_text);


 words.getStoredWords()



let date = new Date();
let currentDate = date.toISOString().split('T')[0];
console.log(currentDate);

function getDate(){
  return localStorage.getItem("date") || currentDate;
}

function setDate(){
  let date = new Date();
  let urrentDate = date.toISOString().split('T')[0];
  localStorage.setItem("date", urrentDate);
}

if (getDate() == currentDate) {
  const todayWord = localStorage.getItem("todayWord");
  console.log(todayWord);
  //const object= await words.getWord(todayWord)
  words.getWordInfo(todayWord, todayWord);    
}
else {
  const word = await words.generateWord()
  localStorage.setItem("todayWord",word);
  //const object= await words.getWord('happy')
  words.getWordInfo(word,word)
  setDate();
}





        



