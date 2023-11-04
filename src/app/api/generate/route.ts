import OpenAI from "openai";

const openai = new OpenAI({ apiKey: "" });

export async function POST(request: Request) {
  const body = await request.json();

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  return Response.json({ data: completion, error: null })
}