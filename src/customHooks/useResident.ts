import React, { useEffect, useState } from 'react'
import { IResident } from '../types/IResident';

const useResident = (url: string) => {
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [status, setStatus] = useState("");
    const [origin, setOrigin] = useState("");
    const [episodes, setEpisodes] = useState(0);

    useEffect(() => {
        (async() => {
            const res = await fetch(url);
            const data = await res.json() as IResident;
            setName(data.name);
            setImgUrl(data.image);
            setStatus(data.status);
            setOrigin(data.origin.name);
            setEpisodes(data.episode.length);

        })()
    }, [url])

    return {name, imgUrl, status, origin, episodes}
}

export default useResident;