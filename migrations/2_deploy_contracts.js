var Virtucoin = artifacts.require("../contracts/VirtuCoinCrowdsale.sol");

module.exports = function(deployer) {
  deployer.deploy(Virtucoin, web3.eth.accounts[0], {gas: 2400000});
};


