const Deed = artifacts.require("Deed");

module.exports = function(deployer, _network, accounts) {
  console.log('Accounts:', accounts); // Log the accounts array
  const lawyer = accounts[0];
  const beneficiary = accounts[1];
  if (accounts.length < 2) {
    throw new Error("Not enough accounts to deploy the contract");
  }
  // Deploying Deed contract with the first two accounts and other parameters
  deployer.deploy(Deed, lawyer, beneficiary, 5, {from : lawyer});
};
