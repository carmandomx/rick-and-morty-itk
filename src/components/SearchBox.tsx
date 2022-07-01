import React, {useState} from 'react'

type Props = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>

}

const SearchBox = ({value, setValue}: Props) => {
    


  return (
    <div>

        <input value={value} onChange={(e) => setValue(e.target.value)} type={'number'}  />
        <button onClick={(e) => {
            // La magia


        }}> Search now! </button>
    </div>
  )
}

export default SearchBox