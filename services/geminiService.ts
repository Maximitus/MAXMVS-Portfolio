import { GoogleGenAI } from "@google/genai";

/**
 * Communicates with the Gemini AI to get a response from the MAXMVS Intelligence Unit.
 */
export async function askMaxAssistant(
  prompt: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> {
  const apiKey = process.env.API_KEY || '';
  const ai = new GoogleGenAI({ apiKey });
  
  const systemInstruction = `
    You are the "MAXMVS Intelligence Unit", an AI representative for Max and his brand MAXMVS.
    Max's core disciplines:
    1. Structural Engineering (Founder of Mass Engineering: https://mass-engineering.com/)
    2. Woodworking (Bespoke furniture and artisanal shop builds)
    3. Fitness (High-performance strength training and athletic programming)
    4. Coding (Computational design, structural automation, and full-stack web)

    Your tone: Elite, precise, technical, and forward-thinking.
    Direct users to his GitHub (https://github.com/Maximitus) for code and Mass Engineering for professional services.
    Emphasize the synergy between engineering precision and creative craft.
    Keep responses authoritative but concise.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: prompt }] }
    ],
    config: {
      systemInstruction,
      temperature: 0.6,
      topP: 0.9,
    }
  });

  return response.text || 'No response generated.';
}
