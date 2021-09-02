const path = require('path');

console.log(path.basename(__filename)); //Имя файла
console.log(path.dirname(__filename)); //Директория
console.log(path.extname(__filename)); //Расширение
console.log(path.parse(__filename)); //представление файла в виде объекта

console.log(path.join(__dirname, 'test', 'second.html'));
console.log(path.resolve(__dirname, './test', '/second.html'));
