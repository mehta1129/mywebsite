import https from 'https';

function searchPexels(query) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=3`;
  https.get(url, { headers: { 'Authorization': '563492ad6f917000010000018d96071d79e64e9eb08453483984e44f' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        if (json.photos && json.photos.length > 0) {
          console.log(query + ': ' + json.photos[0].src.large);
        } else {
          console.log(query + ': No photos');
        }
      } catch (e) {
        console.log(query + ': Error');
      }
    });
  });
}

searchPexels('green lentils');
searchPexels('red lentils');
searchPexels('yellow peas');
searchPexels('durum wheat');
searchPexels('canola seeds');
searchPexels('flaxseed');
searchPexels('rolled oats');
searchPexels('chickpeas');
searchPexels('barley grains');
