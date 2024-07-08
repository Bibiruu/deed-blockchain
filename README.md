# deed-blockchain

-state management in contract 
-time sensitivity management in contracts state and its testing

Address # when testing from remix:
#1.Donor
#2.Lawyer
#3.Beneficiary

Testing through terminal:
truffle test tests/deed.test.js 

deployment: 
-checked manuallly for testnet deployment through truffle development terminal. Changed it to
=> truffle(sepolia). Command for the activation: truffle console --network sepolia
then getting the accounts manually before deployment to TESTNET.

-loaded my account through faucet in alchemy and chainlink.
- used confirmations of 10 blocks for increased security and network stability.
    *Wait for the transaction that deploys the contract to be included in a block (first confirmation).
    *Then wait for an additional 9 blocks to be mined, resulting in a total of 10 confirmations before proceeding.

Check testnet deployment:
https://sepolia.etherscan.io/

Deployment done with 1 confirmation block in between.

1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x20ffecb24c3f02d1300a31f151314b3e29b206c2b4646560c063e67d88a741a8
   > Blocks: 0            Seconds: 8
   > contract address:    0x5EC8aC8e5930C31432C3F5412eF5e6196efCdC8C
   > block number:        6259830
   > block timestamp:     1720303956
   > account:             0x755603f6d932165Db171ff8EEB044698d8Dac160
   > balance:             0.934952958748133577
   > gas used:            250212 (0x3d164)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00500424 ETH

   Pausing for 1 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 6259831)
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00500424 ETH


2_deploy_contracts.js
=====================
Accounts: [
  '0x755603f6d932165Db171ff8EEB044698d8Dac160',
  '0xc5Db7441979bAea6D4fC9f26932bc44Cdb821Cd9',
  '0xd57CCb4657Eb178B0461A8a616A7DaB414913C8b',
  '0x0f505E063cEABED90119F508d1fea936e05A3553',
  '0xCEA3B66aCf59b5751a9325b20063702428fD80f0',
  '0xfAe852f17CfC32fA9e3463e9e67D12f0A04fce56',
  '0xF795C594498bfb167d1aB547Ba1aa9d44450c680',
  '0x47a0223f0d0125396409BEBC02c51E84908E6e14',
  '0xF91Ee4eCE47B9de92713b9CCF9B6B4363e5dAd26',
  '0x3E795fdE5ff555d58D2cFDBbC98f176657Fc884b'
]

   Deploying 'Deed'
   ----------------
   > transaction hash:    0xbea8bff56f3ee42684387e6a764423812b89218aac6b4d5f13b1f258fcdfba36
   > Blocks: 0            Seconds: 8
   > contract address:    0xDb53028eEa0113e51D87D0e5E546914e02E8f27D
   > block number:        6259833
   > block timestamp:     1720303992
   > account:             0x755603f6d932165Db171ff8EEB044698d8Dac160
   > balance:             0.926834818748133577
   > gas used:            359994 (0x57e3a)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00719988 ETH

   Pausing for 1 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 6259834)
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00719988 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.01220412 ETH

