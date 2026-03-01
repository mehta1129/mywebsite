import https from 'https';

function checkUrl(url) {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    console.log(url + ': ' + res.statusCode);
  }).on('error', (e) => console.log(url + ': Error'));
}

checkUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/A_known_good_image.jpg/800px-A_known_good_image.jpg'); // Bad URL
checkUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Split_pea.jpg/960px-Split_pea.jpg'); // Good URL
