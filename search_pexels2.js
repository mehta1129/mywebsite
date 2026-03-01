import https from 'https';

function searchPexels(query) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5`;
  https.get(url, { headers: { 'Authorization': '563492ad6f917000010000018d96071d79e64e9eb08453483984e44f' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        if (json.photos && json.photos.length > 0) {
          console.log(query + ':\n' + json.photos.map(p => p.src.large).join('\n'));
        } else {
          console.log(query + ': No photos');
        }
      } catch (e) {
        console.log(query + ': Error');
      }
    });
  });
}

searchPexels('lentils');
searchPexels('wheat');
searchPexels('seeds');
searchPexels('oats');
searchPexels('chickpeas');
searchPexels('barley');
searchPexels('peas');
