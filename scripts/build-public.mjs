// デプロイ用に、外へ配るファイルだけを public/ にそろえる（index.html と dist/game.js）
import fs from 'node:fs';
fs.mkdirSync('public/dist', { recursive: true });
fs.copyFileSync('index.html', 'public/index.html');
fs.copyFileSync('dist/game.js', 'public/dist/game.js');
console.log('public/ ready');
