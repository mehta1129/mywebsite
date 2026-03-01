import https from 'https';

function searchDDG(query) {
  const url = `https://html.duckduckgo.com/html/?q=site:unsplash.com+${encodeURIComponent(query)}`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const regex = /https:\/\/unsplash\.com\/photos\/([a-zA-Z0-9-]+)/g;
      const matches = data.match(regex);
      if (matches) {
        console.log(query + ':', [...new Set(matches)].slice(0, 3));
      } else {
        console.log(query + ': Not found');
      }
    });
  });
}

searchDDG('green lentils');
searchDDG('red lentils');
searchDDG('yellow peas');
searchDDG('durum wheat');
searchDDG('canola seeds');
searchDDG('flaxseed');
searchDDG('rolled oats');
searchDDG('chickpeas');
searchDDG('barley grains');
