const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },

    sepolia: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: process.env.MNEMONIC
        },
        providerOrUrl: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHMY_ENDPOINT}`,
        numberOfAddresses: 10,
        shareNonce: true,
      }),
      network_id: 11155111,
      gas: 30000000,
      gasPrice: 10000000000,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.19",
    }
  },
};
