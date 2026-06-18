"use client";

import { useState } from "react";
import { model } from "@/lib/firebase";

export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

const generate = async () => {
  setLoading(true);
  setOutput("");

  const res = await fetch("/api/generate", {
    method: "POST",
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  setOutput(data.text);

  setLoading(false);
};

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-3xl">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            ⚡ AI Story Generator
          </h1>
          <p className="text-gray-400 mt-2">
            Powered by Firebase + Gemini AI
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-6 shadow-xl">

          {/* Input */}
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Write your prompt... (e.g. A boy finds a magic backpack)"
            className="w-full h-32 bg-black border border-[#222] rounded-xl p-4 outline-none focus:border-orange-500 transition"
          />

          {/* Button */}
          <button
            onClick={generate}
            disabled={loading}
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate ✨"}
          </button>

          {/* Output */}
          <div className="mt-6">
            <h2 className="text-sm text-gray-400 mb-2">Output</h2>

            <div className="bg-black border border-[#222] rounded-xl p-4 min-h-[150px] whitespace-pre-wrap text-gray-200">
              {output || "Your generated story will appear here..."}
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-600 mt-6">
          Built with Firebase AI • Gemini
        </p>
      </div>
    </div>
  );
}