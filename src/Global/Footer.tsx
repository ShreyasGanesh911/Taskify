import React from 'react'

export default function Footer() {
  return (
    <>
     <div className='w-full h-72 displayFlex'>
        <div className='w-1/2 h-full bg-pink-200 border-r-2 border-black displayFlex flex-col'>
        <div className='border-2 border-black p-2 text-3xl tracking-wider w-52  h-20 displayFlex'>Taskify</div>
        <p>Task made easy</p>
        </div>
        <div className='w-1/2 h-full bg-pink-200'></div>
     </div> 
    </>
  )
}
