import React from 'react'
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

interface EventType {
    id: string;
    title: string;
    description: string;
    image: string;
};

const useGetEvents = () => {

    const [eventsList, setEventsList] = useState<EventType[]>([]);

    const getEvents = async () => {
        const data = await getDocs(collection(db, 'events'));
        const events: EventType[] = data.docs.map((doc) => {
            const event: EventType = {
                id: doc.id,
                title: doc.data().title,
                description: doc.data().description,
                image: doc.data().image,
            };
            return event;
        });
        setEventsList(events);
    }

    useEffect(() => {        
        getEvents();
    }, []);

    return eventsList;
}

export default useGetEvents