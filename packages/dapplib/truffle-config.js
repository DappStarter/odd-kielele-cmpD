require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area strategy north renew noble million coral light army gate'; 
let testAccounts = [
"0xd827a1a27052abf15939a75cc3dca9668bf30fdcd391aefeab93d8be80f0c7d5",
"0xb0666e91f5d43acdf3a564e1104f09ab9e95af08bbfabae8c6ced0388fba42b4",
"0x680e4b57bc7a0968cf57a3adc5c7e1fbe35bc414691a81adb41579cc7395b626",
"0xd7d5d6ee8de6fba07aebf8aca5e54a4512cf7a7959e9decfa85bd9f64248184c",
"0xd816dfa1a27df53a754e57eb250ab7e806f9bc41bfcd09885fd57bd48e585d18",
"0x851ded1484babe2cb1b726fcfb38e6a58b1bcf37602b1ff31390bab82f45d58c",
"0xa7900fa1e205a11d7fcd74ab39c61569f81723d50a7ca803bf516f8795a62a80",
"0x21d1b4e256cce4c7b5b35eee35c1596510695ada6ecd00ad6728957d49acb3f4",
"0x1e02ee9a2d3b8743965612e21498c0053190f9dc9c2196f48b5fa50f241a36db",
"0xdb2bf33127861745d8b9de7a8d3cc7b36425d806c244ecc6dabb8316f6d053cc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

