import React from 'react'

type Props = {
    name: string;
    type: string;
    dimension: string;
    numOfResidents: number;
}

const LocationInfo = (props: Props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Type: {props.type}</p>
      <p>Dimension: {props.dimension}</p>
      <p>Residents: { props.numOfResidents }</p>
    </div>
  )
}

export default LocationInfo