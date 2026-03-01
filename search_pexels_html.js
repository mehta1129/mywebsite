import https from 'https';

function searchPexelsHTML(query) {
  const url = `https://www.pexels.com/search/${encodeURIComponent(query)}/`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const regex = /https:\/\/images\.pexels\.com\/photos\/(\d+)\/pexels-photo-\1\.jpeg/g;
      const matches = [];
      let match;
      while ((match = regex.exec(data)) !== null) {
        matches.push(match[0]);
      }
      if (matches.length > 0) {
        console.log(query + ':', [...new Set(matches)].slice(0, 3));
      } else {
        console.log(query + ': Not found');
      }
    });
  });
}

searchPexelsHTML('lentils');
searchPexelsHTML('wheat');
searchPexelsHTML('seeds');
searchPexelsHTML('oats');
searchPexelsHTML('chickpeas');
searchPexelsHTML('barley');
searchPexelsHTML('peas');
