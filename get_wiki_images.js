import https from 'https';

function getWikiImage(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const pages = json.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pages[pageId].imageinfo) {
          console.log(title + ': ' + pages[pageId].imageinfo[0].url);
        } else {
          console.log(title + ': No image');
        }
      } catch (e) {
        console.log(title + ': Error parsing');
      }
    });
  });
}

getWikiImage('File:Green lentils.jpg');
getWikiImage('File:Red lentils.jpg');
getWikiImage('File:Yellow split peas.jpg');
getWikiImage('File:Wheat grains.jpg');
getWikiImage('File:Rapeseed brown.jpg');
getWikiImage('File:Flax seeds.jpg');
getWikiImage('File:Oats in bowl.jpg');
getWikiImage('File:Chickpeas.jpg');
getWikiImage('File:Barley grains.jpg');
