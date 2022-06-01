import { useState } from 'react';
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

interface EventType {
    id: string;
    title: string;
    description: string;
    image: string;
    contract: string;
};

const UploadForm = () => {
    
    const [event, setEvent] = useState<EventType>();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const DEFAULT_CONTRACT_ADDRESS = process.env.TESTNET_CONTRACT_ADDRESS ||"0xfdaDfb74Febb4F4bbAA5c1B822fCfAE47f7B8c33"

    const onSubmit = async (formData:any) => {
        const eventData = {
            id: Date.now().toString(),
            title: formData.title,
            description: formData.description,
            image: formData.image,
            contract: formData.contract,
        };
        setEvent(eventData);
        const data = await addDoc(collection(db, 'events'), eventData)
            .then(() => alert("Evento creado"))
            .catch(error => alert(error));        
    };

    return (
        <form onSubmit={handleSubmit((data) => onSubmit(data))} className="flex flex-col justify-center gap-4 w-80">
            <input {...register("title", { required: true })} type="text" placeholder="Título" className="input input-bordered input-md w-full max-w-xs" />
            <input {...register("description", { required: true })} type="text" placeholder="Descripción" className="input input-bordered input-md w-full max-w-xs" />
            <input {...register("image", { required: true })} type="text" placeholder="URL de la imagen" className="input input-bordered input-md w-full max-w-xs" />
            <input defaultValue={DEFAULT_CONTRACT_ADDRESS} {...register("contract", { required: true })} type="text" placeholder="Dirección del contrato" className="input input-bordered input-md w-full max-w-xs" disabled />
            <input type="submit" className="btn btn-primary" />
        </form>
    );
}

export default UploadForm