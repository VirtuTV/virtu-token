const VirtuCoinCrowdsale = artifacts.require("../contracts/VirtuCoinCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  const startBlock = web3.eth.blockNumber + 2;
  const endBlock = startBlock + 300;
  const rate = 160000000000000000000;
  const goal = 1000000000000000000000;
  const cap = 10000000; // 10 million tokens
  const walletAddress = web3.eth.accounts[0];

  deployer.deploy(VirtuCoinCrowdsale, startBlock, endBlock, rate, goal, cap, walletAddress);
}
