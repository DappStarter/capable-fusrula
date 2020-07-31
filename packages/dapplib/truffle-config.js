require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note oil purpose include problem blue gaze'; 
let testAccounts = [
"0xa767e94a35ff806e20bf80edf5add9b9be73e1dcf181a9edcf467f3f08b7ed6d",
"0xb34e8355a94cdc1f7b37a438fa5e2d7011d5928f60ecc7b2b082ff668c31794d",
"0x012daff3d2caa1d2c3a1d94fd6f79c9f6d03310b30d20c2f7ae791027fa3733e",
"0x7ba032f65417f670c44614991077572b9e6f3c68a18cb1a91bfad66ff2bdadaa",
"0xa609528124d2f191ab2083e4626b2464407148436e2ff2f3d2b1fbd15330a4b9",
"0xdeb02cded5dce25636ffa8897ad8af0b119a52fa67a254e3e85a15d43cad839a",
"0xc0ffe0c9cdb0e327effbbe31a4163902f85a53db2a61c48dadd59d82bfee08e7",
"0x756e1225b9e72689b7d5154accedd845d914cc5029b77fde24a6cc0ec7738ab8",
"0x275a46a50bc14bc7d73014b1e8533cd367ee66cc3fa0a617155761c1732470ed",
"0xc898e25b4ea6a06db9cc84874e67f58217510f6e32f0a8152ab6e457c698c170"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
