// Gemini AI Integration - CodeCraft Academia
import axios from 'axios';

const apiKey = "AIzaSyCMDXmZ8yIwAIUkbJXJ2wlUIzRogwd926g";
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

export const sendMessage = async (message: string): Promise<string> => {
  try {
    const response = await axios.post(apiUrl, {
      contents: [{
        parts: [{
          text: `Kamu adalah Idin Code AI Assistant untuk website CodeCraft Academia. Jawab dalam bahasa Indonesia dan fokus pada topik programming. Pertanyaan: ${message}`,
        }],
      }],
    });
    
    if (response.status === 200) {
      return response.data.candidates[0].content.parts[0].text;
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  } catch (error) {
    console.error("Error fetching API:", error);
    throw error;
  }
};