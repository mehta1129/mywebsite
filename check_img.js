import https from 'https';

https.get('https://www.erekaz.com/uploads/02%20%20-%2060%20X%20120%20-%20Lustrous%20Glossy%201.png', (res) => {
  console.log('Status: ' + res.statusCode);
  console.log('Headers: ' + JSON.stringify(res.headers));
});
