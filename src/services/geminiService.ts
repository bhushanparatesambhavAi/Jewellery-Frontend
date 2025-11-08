import { GoogleGenAI, Type } from "@google/genai";
import { Product } from '../types';

const fetchProducts = async (): Promise<Product[]> => {
  try {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable is not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a list of 24 realistic jewellery products for an e-commerce website. Each product must be a JSON object with the following fields: 'id' (a unique number), 'name' (a creative product name), 'price' (a number between 500 and 10000), 'imageUrl' (use a placeholder URL from `https://picsum.photos/400/400?random=ID` where ID is the product ID), 'category' (one of 'Earrings', 'Rings', 'Necklaces', 'Bracelets', 'Pendants'), 'description' (a short, elegant description of 15-20 words), and 'materials' (an array of strings like '22k Gold', 'Diamond', 'Sterling Silver', 'Rose Gold'). Return the output as a single JSON array.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.NUMBER },
              name: { type: Type.STRING },
              price: { type: Type.NUMBER },
              imageUrl: { type: Type.STRING },
              category: { type: Type.STRING },
              description: { type: Type.STRING },
              materials: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
            },
            required: ['id', 'name', 'price', 'imageUrl', 'category', 'description', 'materials'],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const products: Product[] = JSON.parse(jsonText);
    return products;
  } catch (error) {
    console.error("Error fetching products from Gemini API:", error);
    // In case of an error, return an empty array to prevent the app from crashing.
    return [];
  }
};

export { fetchProducts };