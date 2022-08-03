require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/UNQX0UIwdXDx5hOfr1OPiZUKAVfXJk4n',
      accounts: ['fbfae9eab03e2d2414c686a8ba76c71d5ef9693b1e256f7bff214889398ade90'],
    },
  },
};