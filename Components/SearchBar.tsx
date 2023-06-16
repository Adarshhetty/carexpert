"use client"
import React from 'react'
import SearchManufacture from './SearchManufacture'
import { useState } from 'react'
import { manufacturers } from '@/constants'
import Image from 'next/image'
import SearchButton from './SearchButton'
import { useRouter } from 'next/navigation'
 

const SearchBar = () => {
  const [manufacturer,setManufacturer]=useState('');
 const [model,setModel]=useState('');
 const router=useRouter();
  const handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault()
   if(manufacturer===''&&model===''){
    return alert("Please fill in the search bar")
   }
   updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
  }
  const updateSearchParams=(model:string,manufacturer:string)=>{
    const searchParams=new URLSearchParams(window.location.search)
    if(model){
      searchParams.set('model',model)
    }
    else{
      searchParams.delete('model')
    }
    if(manufacturer){
      searchParams.set('manufacturer',manufacturer)
    }
    else{
      searchParams.delete('manufacturer')
  }
  const newPath=`${window.location.pathname}?${searchParams.toString()}`
  router.push(newPath)
}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacture
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}/>
        <SearchButton otherClasses='sm:hidden'/>
      </div>
      <div className='searchbar__item'>
        <Image src='/model-icon.png' alt='model icon' width={25}
        height={25} className='absolute w-[20px] h-[20px] ml-4'/>
        <input type="text" name='model' value={model} onChange={(e)=>setModel(e.target.value)} placeholder='Tiguan' className='searchbar__input'/>
        <SearchButton otherClasses='sm:hidden'/>
      </div>
      <SearchButton otherClasses='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar