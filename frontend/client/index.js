import Web3 from 'web3';
import Deed from '../../build/contracts/SplitPayment.json';

let web3;
let deed;

const initWeb3 = () => {
  return new Promise((resolve, reject) => {
    if (typeof window.ethereum !== 'undefined') {
      web3 = new Web3(window.ethereum);
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(() => {
          resolve(web3);
        })
        .catch(e => {
          reject(e);
        });
      return;
    }
    if (typeof window.web3 !== 'undefined') {
      return resolve(
        new Web3(window.web3.currentProvider)
      );
    }
    resolve(new Web3('http://localhost:9545'));
  });
};

const initContract = async () => {
  const networkId = await web3.eth.net.getId();
  console.log('networkid', networkId)
  return new web3.eth.Contract(
    Deed.abi,
    Deed
      .networks[networkId]
      .address
  );
};

const initApp = () => {
    const $balance = document.getElementById('balance');
    const $withdraw = document.getElementById('withdraw');
    const $withdrawResult = document.getElementById('withdraw-result');

     //getting accounts
     let accounts = [];
     web3.eth.getAccounts()
     .then(_accounts => {
        accounts = _accounts
     });

     const refreshBalance = () => {
        web3.eth.getBalance(deed.options.address)
        .then(balance => {
            $balance.innerHTML = balance;
        });
     };
     
     $withdraw.addEventListener('submit', (e) => {
        e.preventDefault(); 
        deed.methods
        .withdraw()
        .then(result => {
            $withdrawResult.innerHTML = `Withdrawal succesfull`;
            refreshBalance();
        }) .catch(_e => {
            $withdrawResult.innerHTML = `Error while trying to withdraw`;
        });
    });

    refreshBalance();
 };

document.addEventListener('DOMContentLoaded', () => {
    initWeb3()
      .then(_web3 => {
        web3 = _web3;
        return initContract();
      })
      .then(_deed => {
        deed = _deed;
        initApp();
      })
      .catch(error => console.log(error.message));
  });