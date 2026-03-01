import https from 'https';

function searchDDG(query) {
  const url = `https://html.duckduckgo.com/html/?q=site:unsplash.com+${encodeURIComponent(query)}`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const regex = /unsplash\.com\/photos\/([a-zA-Z0-9-]+)/g;
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

searchDDG('"green lentils"');
searchDDG('"red lentils"');
searchDDG('"yellow peas"');
searchDDG('"durum wheat"');
searchDDG('"canola seeds"');
searchDDG('"flaxseed"');
searchDDG('"rolled oats"');
searchDDG('"chickpeas"');
searchDDG('"barley grains"');
