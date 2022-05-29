import Image from "next/image";
import Link from "next/link";
import { ethers } from "ethers";
import { useEffect } from "react";
// const { abi } = require("../../contracts/NFTicket.json");

interface CardProps {
    title: string;
    description: string;
    image: string;
    value: number;
    quantity: number;
}
declare let window: any;

const ALCHEMY_PROVIDER = ["matic", "FgJ5VmlekxsmwE6lUZ90pu0i02escfJT"]
const CONTRACT_ADDRESS = "0xd5E12430159173d93642B302331477c228457082";
const KEY = process.env.PRIVATE_KEY

const CardSingle = ( { title, description, image, value, quantity }: CardProps ) => {

    const handleClick = async () => {

        // const provider = new ethers.providers.AlchemyProvider(...ALCHEMY_PROVIDER);
        
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        // console.log("el provider es:", provider)
        await provider.send("eth_requestAccounts", []); // enviar pop-up en Metamask
        const signer = provider.getSigner();
    }

    useEffect(() => {
        const alchemyProvider = new ethers.providers.AlchemyProvider(...ALCHEMY_PROVIDER);
        console.log("el alchemyProvider es:", alchemyProvider)
        // const wallet = new ethers.Wallet(KEY, alchemyProvider);
        // const signer = wallet.connect(alchemyProvider);
        
        // let contract = new ethers.Contract(CONTRACT_ADDRESS, abi, alchemyProvider);

    }, [])

    return (
        <div className="card m-2 w-60 h-90 sm:w-max sm:card-side bg-base-100 shadow-xl">
            <figure className="max-h-xs max-w-xs">
                <img src={image} alt={`Imagen Evento ${title}`} />
            </figure>
            <div className="card-body flex justify-center">
                <h2 className="card-title flex justify-center">{title}</h2>
                <p className="flex justify-center">Disponibles: {quantity}</p>
                <p className="flex justify-center">Precio: {value} MATIC</p>
                <div className="mt-4 card-actions justify-center">
                    <button onClick={() => handleClick()} className="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default CardSingle;