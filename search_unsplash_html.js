import https from 'https';

function searchUnsplashHTML(query) {
  const url = `https://unsplash.com/s/photos/${encodeURIComponent(query)}`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const regex = /"id":"([a-zA-Z0-9_-]{10,15})"/g;
      const matches = [];
      let match;
      while ((match = regex.exec(data)) !== null) {
        matches.push(match[1]);
      }
      if (matches.length > 0) {
        console.log(query + ':', [...new Set(matches)].slice(0, 3));
      } else {
        console.log(query + ': Not found');
      }
    });
  });
}

searchUnsplashHTML('lentils');
searchUnsplashHTML('peas');
searchUnsplashHTML('wheat');
searchUnsplashHTML('canola');
searchUnsplashHTML('flaxseed');
searchUnsplashHTML('oats');
searchUnsplashHTML('chickpeas');
searchUnsplashHTML('barley');
