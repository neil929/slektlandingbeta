import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // All standard crawlers — full access
        userAgent: '*',
        allow: '/',
      },
      {
        // OpenAI
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot'],
        allow: '/',
      },
      {
        // Anthropic (Claude)
        userAgent: ['ClaudeBot', 'Claude-Web', 'anthropic-ai'],
        allow: '/',
      },
      {
        // Google Gemini / Bard
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        // Perplexity
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        // Meta AI
        userAgent: 'FacebookBot',
        allow: '/',
      },
      {
        // Cohere
        userAgent: 'cohere-ai',
        allow: '/',
      },
      {
        // You.com
        userAgent: 'YouBot',
        allow: '/',
      },
      {
        // Diffbot
        userAgent: 'Diffbot',
        allow: '/',
      },
      {
        // Bytedance / TikTok AI
        userAgent: 'Bytespider',
        allow: '/',
      },
      {
        // Common Crawl (used by many AI training sets)
        userAgent: 'CCBot',
        allow: '/',
      },
    ],
    sitemap: 'https://slekt.ai/sitemap.xml',
  }
}
