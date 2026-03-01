import https from 'https';

function searchUnsplash(query) {
  https.get(`https://unsplash.com/s/photos/${query}`, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/g;
      const matches = data.match(regex);
      if (matches) {
        // Filter out common profile/avatar photos if possible, just grab the first few unique ones
        const unique = [...new Set(matches)];
        console.log(query + ':', unique.slice(0, 3));
      } else {
        console.log(query + ': Not found');
      }
    });
  }).on('error', err => console.error(err));
}

searchUnsplash('green-lentils');
searchUnsplash('red-lentils');
searchUnsplash('yellow-peas');
searchUnsplash('wheat-grains');
searchUnsplash('canola-seeds');
searchUnsplash('flaxseed');
searchUnsplash('rolled-oats');
searchUnsplash('chickpeas');
searchUnsplash('barley-grains');
