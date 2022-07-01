import React, { useEffect, useState } from 'react'
import useLocation from '../customHooks/useLocation';
import getLocation from '../service/getLocation'
import LocationInfo from './LocationInfo';
import ResidentContainer from './ResidentContainer';

type Props = {
    searchTerm: string;
}

const LocationContainer = ({ searchTerm }: Props) => {
    const { name, dimension, type, residents  } = useLocation(searchTerm)

    const list = residents.map((value) => {
        const splittedArr = value.split('/');
        const key = splittedArr[splittedArr.length - 1]

        return <ResidentContainer key={key}  url={value} />
    })
  return (
    <div>
        LocationContainer
        <LocationInfo name={name} type={type} dimension={dimension} numOfResidents={residents.length} />
        {list}
    </div>
  )
}

export default LocationContainer