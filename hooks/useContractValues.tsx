import { ethers } from "ethers";
import { useState, useEffect } from "react";
const { abi } = require("../contracts/NFTicket.json");

const CONTRACT_ADDRESS = process.env.TESTNET_CONTRACT_ADDRESS || "0xfdaDfb74Febb4F4bbAA5c1B822fCfAE47f7B8c33";
const ALCHEMY_TESTNET_KEY = process.env.TESTNET_ALCHEMY_ID || "X-Hag2hY3_W0wJycUUKa5AnbGTF4t1wL"

const useContractValues = () => {

    const [ totalSupply, setTotalSupply ] = useState(0);
    const [ maxSupply, setMaxSupply ] = useState(0);
    const [ price, setPrice ] = useState("0");

    const getValues = async () => {
        const provider = new ethers.providers.AlchemyProvider("maticmum", ALCHEMY_TESTNET_KEY);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
        const maxSupply = await contract.MAX_PRESALE_SUPPLY();
        const totalSupply = await contract.totalSupply();
        const price = await contract.price();
        setTotalSupply(totalSupply.toNumber());
        setMaxSupply(maxSupply.toNumber());
        setPrice(price.toNumber());
    }

    useEffect(() => {
        getValues().catch(console.error);
    }, [])

    return { totalSupply, maxSupply, price };
}

export default useContractValues;