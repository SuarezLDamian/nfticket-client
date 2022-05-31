import { ethers } from "ethers";
const { abi } = require("../../contracts/NFTicket.json");
import useContractValues from '../../hooks/useContractValues';
import useUserValues from "../../hooks/useUserValues";
import useGraphValues from "../../hooks/useGraphValues";

declare let window: any;
interface CardProps {
    title: string;
    image: string;
    contract: string;
}

const CardSingle = ( { title, image, contract }: CardProps ) => {

    const TESTNET_CONTRACT_ADDRESS = process.env.TESTNET_CONTRACT_ADDRESS || "0xfdaDfb74Febb4F4bbAA5c1B822fCfAE47f7B8c33";

    const { totalSupply, maxSupply, price } = useContractValues(TESTNET_CONTRACT_ADDRESS);
    const { balance } = useUserValues(TESTNET_CONTRACT_ADDRESS);
    const { tokenPrice } = useGraphValues();

    const handleClick = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []); // enviar pop-up en Metamask
        const signer = provider.getSigner()
        const contract = new ethers.Contract(TESTNET_CONTRACT_ADDRESS, abi, signer);
        const tx = await contract.mintPresale(1, { value: price });
        await tx.wait()
    }

    return (
        <div className="card m-2 w-70 h-90 sm:w-max sm:card-side sm:m-5 bg-base-100 shadow-xl">
            <figure className="max-h-xs max-w-xs">
                <img src={image} alt={`Imagen Evento ${title}`} />
            </figure>
            <div className="card-body sm:w-50 flex justify-center">
                <h2 className="card-title flex justify-center">{title}</h2>
                <p className="flex justify-center">Vendidos: {totalSupply} de {maxSupply}</p>
                <p className="flex justify-center">Precio: {price} MATIC</p>
                <p className="flex justify-center">MATIC: {tokenPrice} USD</p>
                <p className="flex justify-center">Tenés: {balance} Entradas</p>
                <div className="mt-4 card-actions justify-center">
                    <button onClick={() => handleClick()} className="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default CardSingle;