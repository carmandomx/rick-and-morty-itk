import { ILocation } from "../types/ILocation";

const getLocation = async (searchTerm: string) => {

    const res = await fetch(`https://rickandmortyapi.com/api/location/${searchTerm}`)

    const data = await res.json() as ILocation;

    return data;
    
}

export default getLocation