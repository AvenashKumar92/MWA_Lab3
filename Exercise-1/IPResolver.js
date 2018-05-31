const dns=require('dns');
dns.resolve('www.mum.edu', (err, addresses)=>{
    if(err) {
        console.log(`Exception: ${err.message}`);
        return;
    }
    console.log(`IP Addresses: ${JSON.stringify(addresses)}`);
});