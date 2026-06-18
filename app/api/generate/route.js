// app/api/generate/route.js

import { model } from "@/lib/firebase";

export async function POST(req) {
  const { prompt } = await req.json();

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  return Response.json({ text });
}