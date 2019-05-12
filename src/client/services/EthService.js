/*
* This is a service for running the methods that interact with the Ethereum blockchain through Web3
*/

import UserStorage from '../../blockchain/build/contracts/UserStorage.json';

const Web3 = require('web3');
const Eth = require('ethjs');
const EthUtil = require('ethereumjs-util');

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

const getContractInstance = async() => {
  const networkId = await window.web3.eth.net.getId();
  const deployedNetwork = UserStorage.networks[networkId];
  return new window.web3.eth.Contract(
    UserStorage.abi,
    deployedNetwork && deployedNetwork.address,
  );
}

const getAccount = async () => {
  const accounts = await window.web3.eth.getAccounts();
  if (!accounts.length) {
    throw new Error('Wallet locked.');
  }
  return accounts[0].toLowerCase();
};

const verifySignature = async () => {
  const plainMsg = Buffer.from('Sign this message to log into BlogChain.');
  const msg = `0x${plainMsg.toString('hex')}`;
  const prefixedMsg = EthUtil.hashPersonalMessage(plainMsg);
  const account = await getAccount();

  const signature = await window.eth.personal_sign(msg, account);
  const { v, r, s } = EthUtil.fromRpcSig(signature);
  const pubKey = EthUtil.ecrecover(prefixedMsg, v, r, s);
  const addressBuffer = EthUtil.pubToAddress(pubKey);
  const returnedAccount = EthUtil.bufferToHex(addressBuffer);
  return account === returnedAccount.toLowerCase();
};


export {
    approveMetamask,
    getAccount,
    verifySignature,
    getContractInstance,
  };
