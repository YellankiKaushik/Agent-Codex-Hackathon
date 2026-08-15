import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

export const DEFAULT_OPENAI_MODEL = "gpt-5.6";
export const DEFAULT_OPENROUTER_MODEL = "google/gemini-2.0-flash-exp:free";

export function createOpenAIProvider(apiKey: string) {
  return createOpenAICompatible({
    name: "openai",
    baseURL: "https://api.openai.com/v1",
    supportsStructuredOutputs: false,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
}

export function createOpenRouterProvider(apiKey: string) {
  return createOpenAICompatible({
    name: "openrouter",
    baseURL: "https://openrouter.ai/api/v1",
    supportsStructuredOutputs: false,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": process.env.SCHEMESEVA_SITE_URL ?? "http://localhost:3000",
      "X-Title": "SchemeSeva",
    },
  });
}
