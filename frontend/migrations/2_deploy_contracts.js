const Deed = artifacts.require("Deed");

module.exports = function(deployer, _network, accounts) {
  console.log('Accounts:', accounts); // Log the accounts array

  if (accounts.length < 2) {
    throw new Error("Not enough accounts to deploy the contract");
  }
  // Deploying Deed contract with the first two accounts and other parameters
  deployer.deploy(Deed, accounts[0], accounts[1], 5, { value: web3.utils.toWei('0.1', 'ether') });
};
