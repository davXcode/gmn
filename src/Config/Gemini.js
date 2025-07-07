// // const GEMINI_API_KEY = 'AIzaSyDMzWzxBYV_PCcgn-BTJUSVz6D9Es54ops';

// // node --version # Should be >= 18
// // npm install @google/generative-ai

// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from '@google/generative-ai';

// const MODEL_NAME = 'gemini-1.0-pro';
// const API_KEY = 'AIzaSyDMzWzxBYV_PCcgn-BTJUSVz6D9Es54ops';

// async function runChat(prompt) {
//   const genAI = new GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//   const generationConfig = {
//     temperature: 0.9,
//     topK: 1,
//     topP: 1,
//     maxOutputTokens: 2048,
//   };

//   const safetySettings = [
//     {
//       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//   ];

//   const chat = model.startChat({
//     generationConfig,
//     safetySettings,
//     history: [],
//   });

//   const result = await chat.sendMessage(prompt);
//   const response = result.response;
//   console.log(response.text());
//   return response.text();
// }

// export default runChat;

// runChat.js

// Gemini.js (menggunakan @google/genai)

const API_KEY = 'AIzaSyDMzWzxBYV_PCcgn-BTJUSVz6D9Es54ops';
import { GoogleGenAI } from '@google/genai';

async function runChat(prompt) {
  const ai = new GoogleGenAI({
    apiKey: API_KEY,
  });

  const config = {
    // thinkingConfig: {
    //   thinkingBudget: -1,
    // },
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-1.5-flash';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  try {
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let fullText = '';
    for await (const chunk of response) {
      //   process.stdout.write(chunk.text); // tampilkan hasil streaming langsung di console
      const text = chunk.text || '';
      fullText += text;
      console.log(text);
      //   return text;
    }
    console.log('\n=== End of response ===');
    return fullText;
  } catch (error) {
    console.error('Error during chat:', error);
    return null;
  }
}

// Contoh pemakaian
export default runChat;
