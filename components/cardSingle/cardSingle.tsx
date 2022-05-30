import { ethers } from "ethers";
import { useState, useEffect, useCallback } from "react";
import { wagmiClient } from '../../config/wagmiConfig';
import useContractValues from '../../hooks/useContractValues';
const { abi } = require("../../contracts/NFTicket.json");

declare let window: any;

interface CardProps {
    title: string;
    description: string;
    image: string;
    value: number;
    quantity: number;
}

const CardSingle = ( { title, description, image, value, quantity }: CardProps ) => {

    const contractTotalSupply = useContractValues();

    const handleClick = async () => {
        // if(stateContract) {
            // PROBANDO MINT, TIRA ERROR EN CONSOLA
            // await PROVIDER.send("eth_requestAccounts", []);
            console.log("clicked");
        // }
    }

    return (
        <div className="card m-2 w-70 h-90 sm:w-max sm:card-side sm:m-5 bg-base-100 shadow-xl">
            <figure className="max-h-xs max-w-xs">
                <img src={image} alt={`Imagen Evento ${title}`} />
            </figure>
            <div className="card-body sm:w-50 flex justify-center">
                <h2 className="card-title flex justify-center">{title}</h2>
                <p className="flex justify-center">Disponibles: {contractTotalSupply}</p>
                <p className="flex justify-center">Precio: {value} MATIC</p>
                <div className="mt-4 card-actions justify-center">
                    <button onClick={() => handleClick()} className="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default CardSingle;