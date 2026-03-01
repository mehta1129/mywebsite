import https from 'https';

function getWikiImage(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=800`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const pages = json.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pages[pageId].thumbnail) {
          console.log(title + ': ' + pages[pageId].thumbnail.source);
        } else {
          console.log(title + ': No image');
        }
      } catch (e) {
        console.log(title + ': Error parsing');
      }
    });
  });
}

getWikiImage('Lentil');
getWikiImage('Split_pea');
getWikiImage('Durum');
getWikiImage('Rapeseed');
getWikiImage('Flax');
getWikiImage('Oat');
getWikiImage('Chickpea');
getWikiImage('Barley');
