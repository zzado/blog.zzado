import { defineCollection, z } from 'astro:content';

const commonSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.date(),
	updatedDate: z.date().optional(),
	heroImage: z.string().optional(),
	tags: z.array(z.string()).default([]),
});

const techCollection = defineCollection({
	type: 'content',
	schema: commonSchema,
});

const lifeCollection = defineCollection({
	type: 'content',
	schema: commonSchema,
});

export const collections = {
	'tech': techCollection,
	'life': lifeCollection,
};
