import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.join(__dirname, '../src/content/blog');
const outFile = path.join(__dirname, '../public/hub-posts.json');

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const data = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    data[key] = val;
  }
  return data;
}

const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
const posts = files
  .map((file) => {
    const raw = fs.readFileSync(path.join(blogDir, file), 'utf8');
    const data = parseFrontmatter(raw);
    if (data.draft === 'true') return null;
    const slug = file.replace(/\.(md|mdx)$/, '');
    return {
      title: data.title || slug,
      description: data.description || '',
      url: `https://fx.techonni.com/blog/${slug}/`,
      pubDate: data.pubDate || '',
    };
  })
  .filter(Boolean)
  .sort((a, b) => {
    const byDate = String(b.pubDate).localeCompare(String(a.pubDate));
    if (byDate !== 0) return byDate;
    return String(a.title).localeCompare(String(b.title));
  })
  .slice(0, 12)
  .map(({ title, description, url }) => ({ title, description, url }));

fs.writeFileSync(outFile, JSON.stringify(posts, null, 2) + '\n');
console.log(`Wrote ${posts.length} posts → public/hub-posts.json`);
