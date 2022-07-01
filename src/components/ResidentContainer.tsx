import React from 'react'
import useResident from '../customHooks/useResident'

type Props = {
    url: string
}

const ResidentContainer = ({ url }: Props) => {

    const { name, imgUrl, status, episodes, origin } = useResident(url )

  return (
    <div>ResidentContainer: { url }
        <img src={imgUrl} alt={name} />
        <p>Name: {name}</p>
        <p>Status: {status}</p>
        <p>No. of Episodes: {episodes}</p>
        <p>Origin: {origin}</p>
    
    </div>
  )
}

export default ResidentContainer