import https from 'https';

function searchUnsplashNapi(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=5`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        if (json.results && json.results.length > 0) {
          console.log(query + ':\n' + json.results.map(p => p.urls.regular).join('\n'));
        } else {
          console.log(query + ': No photos');
        }
      } catch (e) {
        console.log(query + ': Error parsing');
      }
    });
  });
}

searchUnsplashNapi('green lentils');
searchUnsplashNapi('red lentils');
searchUnsplashNapi('yellow peas');
searchUnsplashNapi('durum wheat');
searchUnsplashNapi('canola seeds');
searchUnsplashNapi('flaxseed');
searchUnsplashNapi('rolled oats');
searchUnsplashNapi('chickpeas');
searchUnsplashNapi('barley grains');
