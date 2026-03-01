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

getWikiImage('File:Brown Flax Seeds.jpg');
getWikiImage('File:Rolled Oats.jpg');
getWikiImage('File:Chickpea BNC.jpg');
getWikiImage('File:Wheat.jpg');
getWikiImage('File:Canola.jpg');
getWikiImage('File:Red lentils Gogreen.jpg');
