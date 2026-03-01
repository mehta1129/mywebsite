import https from 'https';

function checkUrl(url) {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    console.log(url + ': ' + res.statusCode);
  }).on('error', (e) => console.log(url + ': Error'));
}

checkUrl('https://images.unsplash.com/photo-1551244952-fab4c6c3a571?q=80&w=800&auto=format&fit=crop');
checkUrl('https://images.unsplash.com/photo-1614373532201-c40b993f0013?q=80&w=800&auto=format&fit=crop');
checkUrl('https://images.unsplash.com/photo-1601993488142-d3050a16478d?q=80&w=800&auto=format&fit=crop');
checkUrl('https://images.unsplash.com/photo-1683640356896-feca4bb63063?q=80&w=800&auto=format&fit=crop');
checkUrl('https://images.unsplash.com/photo-1713592395087-45275a3306ca?q=80&w=800&auto=format&fit=crop');
checkUrl('https://images.unsplash.com/photo-1642497393440-4b5cc5f03ff5?q=80&w=800&auto=format&fit=crop');
checkUrl('https://images.unsplash.com/photo-1638813133319-897c2e3eb13b?q=80&w=800&auto=format&fit=crop');
checkUrl('https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=800&auto=format&fit=crop');
checkUrl('https://images.unsplash.com/photo-1645439162146-b2b94da3d55b?q=80&w=800&auto=format&fit=crop');
