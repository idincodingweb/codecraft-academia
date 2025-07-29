// Gemini AI Integration - CodeCraft Academia
import axios from 'axios';

const apiKey = "AIzaSyCMDXmZ8yIwAIUkbJXJ2wlUIzRogwd926g";
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

const cleanResponse = (text: string): string => {
  return text
    // Remove markdown asterisks for bold/italic
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    // Remove markdown headers
    .replace(/^#{1,6}\s/gm, '')
    // Remove code block markers but keep the content
    .replace(/```[\w]*\n([\s\S]*?)\n```/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    // Remove markdown list markers
    .replace(/^\s*[-*+]\s/gm, '• ')
    .replace(/^\s*\d+\.\s/gm, '• ')
    // Clean up line breaks (remove excessive newlines)
    .replace(/\n{3,}/g, '\n\n')
    // Remove other markdown symbols
    .replace(/[_~`]/g, '')
    .trim();
};

export const sendMessage = async (message: string): Promise<string> => {
  try {
    const response = await axios.post(apiUrl, {
      contents: [{
        parts: [{
          text: `Kamu adalah Idin Code AI Assistant untuk website CodeCraft Academia. Jawab dalam bahasa Indonesia yang profesional dan jelas. Jangan gunakan format markdown, asterisk (*), atau karakter khusus lainnya. Berikan jawaban yang clean dan mudah dibaca tanpa formatting khusus. Pertanyaan: ${message}`,
        }],
      }],
    });
    
    if (response.status === 200) {
      const rawText = response.data.candidates[0].content.parts[0].text;
      return cleanResponse(rawText);
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  } catch (error) {
    console.error("Error fetching API:", error);
    throw error;
  }
};