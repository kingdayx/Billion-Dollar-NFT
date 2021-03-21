const path = require('path')
const HDWalletProvider = require('@truffle/hdwallet-provider')
const fs = require('fs')
const mnemonic = fs.readFileSync('.secret').toString().trim()
const infuraKey = 'b33e244c7e2f486bb0252feb96b73b7d'

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, 'src/contracts'),
  networks: {
    develop: {
      host: 'localhost',
      port: 7545,
      network_id: '5777',
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/${infuraKey}`,
        )
      },

      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraKey}`,
        )
      },

      port: 8545,
      network_id: 4,
      gas: 4700000,
    },
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: { etherscan: 'KABVKBFMEJ93S65P78CQ1WG71IX5YJYYJJ' },

  compilers: {
    solc: {
      version: '^0.5.16', // A version or constraint - Ex. "^0.5.0"
      // Can also be set to "native" to use a native solc // Use a version obtained through docker
      parser: 'solcjs', // Leverages solc-js purely for speedy parsing
      settings: {
        evmVersion: 'istanbul', // Default: "petersburg"
      },
    },
  },
}
