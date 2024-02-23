const ethers = require('ethers');

async function pareBytes(bytes) {
    const name = ethers.decodeBytes32String(bytes);
    console.log('Decoded name:', name);
}

pareBytes(process.argv[2]);

