import { ethers } from 'ethers';
import { CONTRACT_ADDRESSES, ABI } from '../config';

let provider: ethers.providers.Web3Provider;
let signer: ethers.providers.JsonRpcSigner;

export async function connectWallet() {
  if (!window.ethereum) {
    throw new Error('No crypto wallet found. Please install it.');
  }
  provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', []);
  signer = provider.getSigner();
}

export function getContract(contractName: keyof typeof CONTRACT_ADDRESSES) {
  if (!signer) {
    throw new Error('Wallet not connected');
  }
  const address = CONTRACT_ADDRESSES[contractName];
  const abi = ABI[contractName];
  return new ethers.Contract(address, abi, signer);
}

export async function getTotalSupply() {
  const contract = getContract('tokenStandard');
  return await contract.totalSupply();
}

// ...additional contract interaction functions...
