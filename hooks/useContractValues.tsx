import { ethers } from "ethers";
import { useState, useEffect, useCallback } from "react";
const { abi } = require("../contracts/NFTicket.json");

const ALCHEMY_TESTNET_KEY = process.env.TESTNET_ALCHEMY_ID || "X-Hag2hY3_W0wJycUUKa5AnbGTF4t1wL"

const useContractValues = ( contractAddress: string) => {

    const [ totalSupply, setTotalSupply ] = useState(0);
    const [ maxSupply, setMaxSupply ] = useState(0);
    const [ price, setPrice ] = useState("0");

    const getContractValues = useCallback(async () => {
        const provider = new ethers.providers.AlchemyProvider("maticmum", ALCHEMY_TESTNET_KEY);
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const maxSupply = await contract.MAX_PRESALE_SUPPLY();
        const totalSupply = await contract.totalSupply();
        const price = await contract.price();
        setTotalSupply(totalSupply.toNumber());
        setMaxSupply(maxSupply.toNumber());
        setPrice(price.toNumber());
    }, [contractAddress]);

    useEffect(() => {
        getContractValues().catch(console.error);
    }, [getContractValues])

    return { totalSupply, maxSupply, price };
}

export default useContractValues;