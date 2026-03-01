import https from 'https';
import fs from 'fs';

https.get('https://unsplash.com/s/photos/lentils', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('unsplash_lentils.html', data);
    console.log('Saved to unsplash_lentils.html');
  });
});
