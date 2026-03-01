import fs from 'fs';

const data = fs.readFileSync('unsplash_lentils.html', 'utf8');
const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/g;
const matches = data.match(regex);
if (matches) {
  const unique = [...new Set(matches)];
  console.log(unique.slice(0, 10).join('\n'));
} else {
  console.log('No matches');
}
