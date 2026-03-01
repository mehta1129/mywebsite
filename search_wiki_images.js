import https from 'https';

function searchWikiImages(query) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url&format=json`;
  https.get(url, { headers: { 'User-Agent': 'MyTestApp/1.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        if (json.query && json.query.pages) {
          const pages = json.query.pages;
          const firstPageId = Object.keys(pages)[0];
          const imageUrl = pages[firstPageId].imageinfo[0].url;
          console.log(query + ': ' + imageUrl);
        } else {
          console.log(query + ': No image');
        }
      } catch (e) {
        console.log(query + ': Error parsing');
      }
    });
  });
}

searchWikiImages('File:Green lentils');
searchWikiImages('File:Red lentils');
searchWikiImages('File:Yellow split peas');
searchWikiImages('File:Durum wheat');
searchWikiImages('File:Canola seeds');
searchWikiImages('File:Flax seeds');
searchWikiImages('File:Rolled oats');
searchWikiImages('File:Chickpeas');
searchWikiImages('File:Barley grains');
