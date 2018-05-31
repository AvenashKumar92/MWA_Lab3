const fs=require('fs');

//Solution-1: Read entire file in one go
/*const server = require('http').createServer();
server.on('request', (req, res)=>{
fs.readFile('./huge.file', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    res.end(data);
    //console.log(data);
  });
});*/
//-----------------End - Solution 1----------------

//Solution 2: Read file as an stream
const server = require('http').createServer();
server.on('request', (req, res)=>{
    const src=fs.createReadStream('./huge.file');
    src.pipe(res);
});
//-----------------End - Solution 2----------------

server.listen(8000);