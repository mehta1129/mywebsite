import https from 'https';

function getWikiImages(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=images&format=json`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const pages = json.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pages[pageId].images) {
          console.log(title + ' images:');
          pages[pageId].images.forEach(img => console.log(img.title));
        }
      } catch (e) {
        console.log(title + ': Error parsing');
      }
    });
  });
}

getWikiImages('Lentil');
getWikiImages('Durum');
getWikiImages('Rapeseed');
getWikiImages('Flax');
getWikiImages('Oat');
getWikiImages('Chickpea');
