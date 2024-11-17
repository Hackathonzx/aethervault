import { ethers, JsonRpcSigner } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { CONTRACT_ADDRESSES, ABI } from '@/config';

declare global {
  interface Window {
    ethereum: never;
  }
}

let provider: Web3Provider;
let signer: JsonRpcSigner;

export async function connectWallet() {
  if (!window.ethereum) {
    throw new Error('No crypto wallet found. Please install it.');
  }
  provider = new Web3Provider(window.ethereum) as Web3Provider;
  await (provider as Web3Provider).send('eth_requestAccounts', []);
  signer = provider.getSigner() as unknown as JsonRpcSigner;
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
