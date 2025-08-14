import OpenAI from "openai";
const apiKey = import.meta.env.VITE_API_KEY;

export default class openAiClient {
  constructor(){
    this.openai = new OpenAI({apiKey: apiKey, dangerouslyAllowBrowser: true});
  }


  performTasks(){
    const grammarBtn = document.querySelector('.grammar-submit');
    grammarBtn.addEventListener('click',(event)=>{
      event.preventDefault();
      const task = document.querySelector('.task').value;
      const content = document.querySelector('.grammar').value;
      this.newWord(task, content)
    })




  }
  async newWord(task, content){
      const response = await this.openai.responses.create({
        model: "gpt-4o-mini",
        input: `${task} ${content}`,
        store: true,
      });
      document.querySelector('.response').innerHTML = response.output_text;
      return response
  }


}



/*
function grammar (){  
const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true
});
const i ="i no go work"
const p="Correct this statement "
const response = openai.responses.create({
  model: "gpt-4o-mini",
  input: `${p} ${i}`,
  store: true,
});
  


response.then((result) => document.getElementById("q").innerHTML = result.output_text);}

grammar();*/