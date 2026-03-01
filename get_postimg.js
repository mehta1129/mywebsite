import https from 'https';

https.get('https://postimg.cc/bZCmmXPL', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="og:image" content="([^"]+)"/);
    if (match) {
      console.log('Direct URL:', match[1]);
    } else {
      console.log('Not found');
    }
  });
}).on('error', (e) => {
  console.error(e);
});
