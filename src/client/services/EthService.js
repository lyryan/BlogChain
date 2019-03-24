const Web3 = require('web3');
const Eth = require('ethjs');

const approveMetamask = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.enable();
      window.web3 = new Web3(window.ethereum);
      window.eth = new Eth(window.ethereum);
    } catch (error) {
      // Most likely user denied access.
      
    }
  } else if (window.web3) {
    // eslint-disable-next-line no-undef
    window.web3 = new Web3(web3.currentProvider);
    // eslint-disable-next-line no-undef
    window.eth = new Web3(web3.currentProvider);
  } else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
};

const getAccount = async () => {
  const accounts = await window.web3.eth.getAccounts();
  if (!accounts.length) {
    throw new Error('Wallet locked.');
  }
  return accounts[0].toLowerCase();
};


export {
    approveMetamask,
    getAccount,
  };