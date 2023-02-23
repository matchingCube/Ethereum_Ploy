import { ethers } from "ethers";
import ERC20Abi from "contracts/ERC20Abi.json";
import { BusdAddress } from "contracts/address.js";
import getRpcUrl from "utils/getRpcUrl";

// const RPC_URL = getRpcUrl()
// const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

const getContract = (abi, address, signer) => {
  const signerOrProvider = signer;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getERC20Contract = (signer) => {
  return getContract(ERC20Abi, BusdAddress, signer);
};
