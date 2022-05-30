import { getProvider } from "@wagmi/core";
import { ethers } from "ethers";
import { useState, useEffect, useCallback } from "react";
const { abi } = require("../contracts/NFTicket.json");

const CONTRACT_ADDRESS = process.env.TESTNET_CONTRACT_ADDRESS || "0x28dA9581572Ecd67E988ffdBba18bc803f395fa4";
const ALCHEMY_TESTNET_KEY = process.env.TESTNET_ALCHEMY_ID || "X-Hag2hY3_W0wJycUUKa5AnbGTF4t1wL"

const useContractValues = () => {

    const [ totalSupply, setTotalSupply ] = useState(0);

    const getValues = async () => {
        const provider = new ethers.providers.AlchemyProvider("maticmum", ALCHEMY_TESTNET_KEY);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
        const totalSupply = await contract.MAX_TICKETS();
        setTotalSupply(totalSupply.toNumber());
    }

    useEffect(() => {
        getValues().catch(console.error);
    }, [totalSupply])

    return totalSupply;
}

export default useContractValues;