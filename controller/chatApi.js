// Import the Configuration and OpenAIApi classes from the OpenAI library
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config({ path: __dirname + "/.env" });
//configure the api key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create a new OpenAIApi object using the Configuration object
const openai = new OpenAIApi(configuration);

function chatResponse(question) {
  return new Promise((resolve, reject) => {
    let prompt =
      question +
      "? Remeber before answering check if  the question about legal contract management or related terms an acrynomns or synonyms or legal papers or legal domain or legal tech  or stamp paper  where region restriction is india if not then reply i can only answer question related to legal contract managment";
    // Request text completion from OpenAI using the 'text-davinci-003' model
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 4000,

        temperature: 0,
      })
      .then((response) => {
        //  if response is null or undefined, then accessing response.data would throw an error. With the optional chaining operator ?., you can safely access the data property of response even if response is null or undefined. If response is null or undefined, then response?.data will simply return null or undefined without throwing an error.

        return response?.data?.choices?.[0]?.text;
      })
      .then((AIData) => {
        resolve({ question, answer: AIData });
      })
      .catch((err) => {
        reject({ status: 0, error: err });
      });
  });
}
module.exports = { chatResponse };
