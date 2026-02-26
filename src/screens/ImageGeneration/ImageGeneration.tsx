import React, { useState } from "react";
import { GoogleGenAI, Modality } from "@google/genai";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export const ImageGeneration = (): JSX.Element => {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `generated-image-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const generateImage = async () => {
    try {
      setLoading(true);
      setError("");
      
      // Use API key from environment variable
      const apiKey = "AIzaSyDjT1SCCcxh5lNQH34aNn3NscnjZsSIJ0E"; // Using the API key directly for now
      const ai = new GoogleGenAI({ apiKey });
      
      // Request image generation using the specific image generation model
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp-image-generation",
        contents: prompt,
        config: {
          responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
      });
      
      // Process the response to extract the image
      if (response.candidates && 
          response.candidates.length > 0 && 
          response.candidates[0]?.content?.parts) {
        const parts = response.candidates[0].content.parts;
        
        // Find the image part in the response
        for (const part of parts) {
          if (part.inlineData) {
            // Convert base64 data to image URL
            const imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            setGeneratedImage(imageUrl);
            return; // Exit once we've found and set the image
          }
        }
        
        // If we get here, no image was found in the response
        setError("No image was generated. Try a different prompt or try again later.");
        console.log("Response did not contain image data:", parts);
      } else {
        setError("Invalid response from the API. Please try again.");
        console.error("Invalid response structure:", response);
      }
    } catch (err) {
      setError("Failed to generate image. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#313131] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-white mb-8 font-bold">Image Generation</h1>
        
        <Card className="p-6 bg-white">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter your prompt
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-32 p-3 border rounded-md"
              placeholder="Describe the image you want to generate..."
            />
          </div>
          
          <Button
            onClick={generateImage}
            disabled={!prompt || loading}
            className="w-full bg-[#11a4ff] hover:bg-[#0d8ad8]"
          >
            {loading ? "Generating..." : "Generate Image"}
          </Button>

          {error && (
            <p className="mt-4 text-red-500">{error}</p>
          )}

          {generatedImage && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Generated Image</h2>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={generatedImage} 
                  alt="Generated from prompt" 
                  className="w-full h-auto"
                />
              </div>
              <Button
                onClick={handleDownload}
                className="mt-4 bg-green-600 hover:bg-green-700"
              >
                Download Image
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
