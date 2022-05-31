import { ethers } from "ethers";
import { useState, useEffect, useCallback } from "react";
const { abi } = require("../contracts/NFTicket.json");

const ALCHEMY_TESTNET_KEY = process.env.TESTNET_ALCHEMY_ID || "X-Hag2hY3_W0wJycUUKa5AnbGTF4t1wL"

const useContractValues = ( userAddess: string, contractAddress: string) => {

    const [ balance, setBalance ] = useState("0");

    const getUserValues = useCallback(async () => {
        const provider = new ethers.providers.AlchemyProvider("maticmum", ALCHEMY_TESTNET_KEY);
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const balance = await contract.balanceOf(userAddess);
        setBalance(balance.toNumber());
    }, [contractAddress, userAddess]);

    useEffect(() => {
        getUserValues().catch(console.error);
    }, [getUserValues])

    return { balance };
}

export default useContractValues;