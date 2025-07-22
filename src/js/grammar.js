import OpenAI from "openai";
const apiKey = import.meta.env.VITE_API_KEY;

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

grammar();