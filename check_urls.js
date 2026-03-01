import https from 'https';

function checkUrl(url) {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    console.log(url + ': ' + res.statusCode);
  }).on('error', (e) => console.log(url + ': Error'));
}

checkUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Lentils_in_a_wooden_spoon.jpg/800px-Lentils_in_a_wooden_spoon.jpg');
checkUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Red_lentils.jpg/800px-Red_lentils.jpg');
checkUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Yellow_split_peas.jpg/800px-Yellow_split_peas.jpg');
checkUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Wheat_grains.jpg/800px-Wheat_grains.jpg');
checkUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Rapeseed_brown.jpg/800px-Rapeseed_brown.jpg');
checkUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flax_seeds.jpg/800px-Flax_seeds.jpg');
checkUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Oats_in_bowl.jpg/800px-Oats_in_bowl.jpg');
checkUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Chickpeas.jpg/800px-Chickpeas.jpg');
checkUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Barley_grains.jpg/800px-Barley_grains.jpg');
