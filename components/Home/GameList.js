"use client"
 
import Data from '@/shared/Data.js'
import { useEffect, useState } from 'react'

const GameList = () => {
    const [games, setGames] = useState([])
    
    useEffect(()=>{
        setGames(Data.GameList)
    })

  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-4'>
      {games.map((item, index)=>(
        <div 
          className='flex flex-col justify-center items-center cursor-pointer'
          key = {index}
          >
            <img src={item.image} width ={45} height = {45} className='hover:animate-bounce transition duration-150'/>
            <h2 className='text-[14px] text-center'>{item.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default GameList
