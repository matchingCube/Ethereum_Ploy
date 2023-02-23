import { useMemo } from "react";
import ERC20Abi from "contracts/abi/ERC20Abi.json";
import BearAbi from "contracts/abi/BearAbi.json";
import { getContract } from "utils";
import useActiveWeb3React from "./useActiveWeb3React";
import { BearAddress } from "contracts/address";
// returns null on errors
function useContract(address, ABI, withSignerIfPossible = true) {
  const { library, account } = useActiveWeb3React();

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}

export function useBearContract(withSignerIfPossible = true) {
  return useContract(BearAddress, BearAbi, withSignerIfPossible);
}
