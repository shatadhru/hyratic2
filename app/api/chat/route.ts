import { NextRequest, NextResponse } from "next/server";
import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { genkit } from "genkit";

const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash,
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const response = await ai.generate({
      prompt: message,
    });

    return NextResponse.json({
      response: response.text,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        response: "Failed to generate response",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}