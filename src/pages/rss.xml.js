import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const tech = await getCollection('tech');
    const life = await getCollection('life');
    const posts = [...tech, ...life].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => {
            const isEnglish = post.slug.startsWith('en/');
            const slugClean = post.slug.replace(/^(ko|en)\//, '');
            const link = isEnglish 
                ? `/blog.zzado/en/${post.collection}/${slugClean}/` 
                : `/blog.zzado/${post.collection}/${slugClean}/`;
            
            return {
                title: post.data.title,
                pubDate: post.data.pubDate,
                description: post.data.description,
                link,
            }
        }),
	});
}
