var fs = require('fs');
var zlib=require('zlib')

//Zip File

function zipFile(){
    var gzip = zlib.createGzip();
    var inp = fs.createReadStream('./unZippToZipp.file');
    var out = fs.createWriteStream('unZippToZipp.gz');
    inp.pipe(gzip).pipe(out);
}

function unZipFile(){
    let gunZip=zlib.createGunzip();
    let inp1 = fs.createReadStream('./ZippToUnZipp.gz');
    let out1 = fs.createWriteStream('ZippToUnZipp.file');
    inp1.pipe(gunZip).pipe(out1);
};

zipFile();
unZipFile();

