
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from "./constants";

const getContextString = () => {
  return `
    You are an AI career assistant for ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.title} with 12+ years of experience.
    Information about Prabu:
    - Summary: ${PERSONAL_INFO.about}
    - Skills: ${SKILL_CATEGORIES.map(c => `${c.title}: ${c.skills.join(', ')}`).join('; ')}
    - Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}
    
    Guidelines:
    - Be professional, expert-level, and helpful.
    - Highlight his leadership in RPA platforms (AA360, UiPath), Agile governance, and global exposure (Poland, Romania, Portugal).
    - Answer questions about Prabu's professional background and project metrics (e.g., standardizing KPIs, improving delivery velocity).
    - Provide contact info: ${PERSONAL_INFO.email} and Phone: ${PERSONAL_INFO.phone} when requested.
    - Keep responses concise (under 4 sentences) but highly professional.
  `;
};

/**
 * Chat with Prabu's AI career assistant.
 */
export const chatWithAssistant = async (prompt: string) => {
  // Fix: Directly use process.env.API_KEY and check for its presence
  if (!process.env.API_KEY) {
    return "I'm currently in offline mode, but Prabu would be happy to discuss his qualifications directly. You can reach him at prabubaskaran15@gmail.com.";
  }

  try {
    // Fix: Always use the required named parameter for initializing GoogleGenAI
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: getContextString(),
        temperature: 0.7,
      }
    });

    // Fix: Access the .text property directly from GenerateContentResponse
    return response.text || "I'm having trouble retrieving that information right now. Please try again or contact Prabu directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently unavailable. Please reach out to Prabu via LinkedIn or Email.";
  }
};
