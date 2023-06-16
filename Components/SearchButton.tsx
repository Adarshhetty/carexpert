import React from 'react'
import Image from 'next/image'
const SearchButton = ({otherClasses}:{otherClasses:string}) => {
  return (
   
        <button className={`-mt-3 z-10 ${otherClasses}`} type='submit'>
          <Image src='/magnifying-glass.svg' alt='search icon' width={40} height={40} className='object-contain'/>
        </button>
      
  )
}

export default SearchButton