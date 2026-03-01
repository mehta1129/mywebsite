import fs from 'fs';
console.log(fs.readFileSync('unsplash_lentils.html', 'utf8').substring(0, 500));
