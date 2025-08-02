import { JsonRpcProvider } from "ethers";
import { Contract } from "ethers";
import CastCredABI from "../abi/CastCred.json";

const CONTRACT_ADDRESS = "0x8464135c8F25Da09e49BC8782676a84730C318bC"; // From anvil deploy

export const getCastCredContract = async () => {
  const provider = new JsonRpcProvider("http://127.0.0.1:8545");
  const signer = await provider.getSigner(); // Ethers v6 returns a Signer via `getSigner()`
  // const signer = provider.getSigner(0); // Explicitly get the first Anvil account
  const contract = new Contract(CONTRACT_ADDRESS, CastCredABI.abi, signer);
  
  return contract;
};
