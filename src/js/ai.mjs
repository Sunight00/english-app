import OpenAI from "openai";
const apiKey = import.meta.env.VITE_API_KEY;

export default class openAiClient {
  constructor(){
    this.openai = new OpenAI({apiKey: apiKey, dangerouslyAllowBrowser: true});
  }

  async newWord(){
      const response = await this.openai.responses.create({
        model: "gpt-4o-mini",
        input: `output a single word without a fullstop`,
        store: true,
      });
      
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