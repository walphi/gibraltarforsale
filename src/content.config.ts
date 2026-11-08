import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const editorialSchema = z.object({
  title: z.string(),
  description: z.string().max(220),
  updated: z.string(),
  draftReviewRequired: z.boolean().default(true),
});

const areas = defineCollection({
  loader: glob({ base: './src/content/areas', pattern: '**/*.md' }),
  schema: editorialSchema,
});

const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.md' }),
  schema: editorialSchema,
});

const market = defineCollection({
  loader: glob({ base: './src/content/market', pattern: '**/*.md' }),
  schema: editorialSchema.extend({
    dataAvailable: z.boolean().default(false),
    period: z.string().optional(),
  }),
});

const faqs = defineCollection({
  loader: glob({ base: './src/content/faqs', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.string(),
    questions: z.array(z.object({ question: z.string(), answer: z.string() })).min(1),
  }),
});

const developments = defineCollection({
  loader: glob({ base: './src/content/developments', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.string(),
    area: z.string(),
    developer: z.string(),
    completionStatus: z.string(),
    unitTypes: z.array(z.string()),
    sample: z.boolean().default(true),
  }),
});

export const collections = { areas, guides, market, faqs, developments };
