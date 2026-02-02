import { getCollection } from 'astro:content';

export async function GET() {
    const techPosts = await getCollection('tech');
    const lifePosts = await getCollection('life');

    // Add collection type to each post for the search result
    const allPosts = [
        ...techPosts.map(post => ({ ...post, collection: 'tech' })),
        ...lifePosts.map(post => ({ ...post, collection: 'life' }))
    ];

    const searchResults = allPosts.map(post => {
        const isEnglish = post.slug.startsWith('en/');
        const slugClean = post.slug.replace(/^(ko|en)\//, '');
        const url = isEnglish
            ? `/en/${post.collection}/${slugClean}`
            : `/${post.collection}/${slugClean}`;

        return {
            title: post.data.title,
            description: post.data.description,
            tags: post.data.tags,
            pubDate: post.data.pubDate,
            slug: slugClean, // Not strictly needed if we use url, but keeping it simple
            collection: post.collection,
            lang: isEnglish ? 'en' : 'ko', // Add language field
            url, // Send pre-calculated URL
        };
    });

    return new Response(JSON.stringify(searchResults), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
