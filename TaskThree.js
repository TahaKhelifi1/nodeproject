var fs = require ("fs");
fs.readFile("hello.txt", function(err, data) {
    if(err) throw err;
    console.log(data);
});
    
