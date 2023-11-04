"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");


  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/generate', {
        method: "POST",
        body: JSON.stringify({ userInput })
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className="p-8">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-5xl font-bold tracking-tight">Elevate your business idea <br /> with Deck</h2>
          <p className="text-xl mt-4">A suite of AI based tools that help you create better communications for your startup idead, with speed.</p>
          <div className="mt-4">
          <div className="flex items-center gap-4 border p-4 rounded-lg">
              <div style={{ flex: 0.5 }}>
                ICON
              </div>
              <div style={{ flex: 8.5 }}>
                <input 
                  className="w-full border-none outline-none text-lg font-medium" 
                  placeholder="Describe your business in sentence or two" 
                  onChange={(e) => setUserInput(e.target.value)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <Button onClick={handleSubmit} className="text-md" size={'lg'}>
                  Generate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}