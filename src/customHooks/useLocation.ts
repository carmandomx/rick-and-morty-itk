import { useState, useEffect } from "react"
import getLocation from "../service/getLocation";


const useLocation = (searchTerm: string) => {
    const [name, setName  ] = useState("");
    const [type, setType] = useState("");
    const [dimension, setDimension] = useState("");
    const [residents, setResidents] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getLocation(searchTerm)
            setName(data.name)
            setType(data.type)
            setDimension(data.dimension)
            setResidents(data.residents.slice(0, 10))
        })()
    }, [searchTerm])


    return { name, type, dimension, residents }
}

export default useLocation