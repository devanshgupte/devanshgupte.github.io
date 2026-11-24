import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const order = z.number().default(100);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    category: z.string().optional(),
    kind: z.string().optional(),
    tags: z.array(z.string()).default([]),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    order,
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    icon: z.string().default('code'),
    summary: z.string(),
    includes: z.array(z.string()).default([]),
    price: z.string().optional(),
    order,
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    companyUrl: z.string().optional(),
    location: z.string().optional(),
    start: z.string(),
    end: z.string().optional(),
    current: z.boolean().default(false),
    order,
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z.object({
    degree: z.string(),
    institute: z.string(),
    start: z.string(),
    end: z.string().optional(),
    grade: z.string().optional(),
    order,
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certifications' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string().optional(),
    url: z.string().optional(),
    order,
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    photo: z.string().optional(),
    quote: z.string(),
    order,
  }),
});

export const collections = { projects, services, experience, education, certifications, testimonials };
