import { products } from '../../models/db';
import { PrimeSdk } from '@etherspot/prime-sdk';
import { ethers } from 'ethers';

function genPrivateKey(): string {
	const randomPrivateKey = ethers.utils.randomBytes(32);
  
  // Ensure the private key is valid for Ethereum
  
  // Convert the private key to a hexadecimal string (prefixed with '0x')
  const privateKeyHex = ethers.utils.hexlify(randomPrivateKey);
  
  console.log('Random Private Key:', privateKeyHex);
  return privateKeyHex;
}

const getAddress = async () => {
	console.log(`starting prime sdk`)
	const primeSdk = new PrimeSdk({ privateKey: genPrivateKey() }, { chainId: Number('80001') , projectKey: ''})
	const address = await primeSdk.getCounterFactualAddress();
	console.log('\x1b[33m%s\x1b[0m', `EtherspotWallet address: ${address}`);
	return address;	
  }
  

export async function GET() {
	const address = await getAddress();	
	return new Response(JSON.stringify( { address: address }));
}
