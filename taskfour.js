// password-generator.js
var generator = require('generate-password');

var password = generator.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true
});

console.log(`Generated Password: ${password}`);
