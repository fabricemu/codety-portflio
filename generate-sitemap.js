import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';
// Create a stream to write to
const sitemap = new SitemapStream({ hostname: 'https://yourdomain.netlify.app' });
// Pipe the stream to a file
const writeStream = createWriteStream(resolve('./public/sitemap.xml'));
sitemap.pipe(writeStream);
// Add URLs
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/projects', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/education', changefreq: 'monthly', priority: 0.6 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.6 });
// End sitemap
sitemap.end();
streamToPromise(sitemap)
    .then(() => console.log('✅ Sitemap generated at public/sitemap.xml'))
    .catch(console.error);
