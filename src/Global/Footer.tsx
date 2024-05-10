import React from 'react'

export default function Footer() {
  return (
    <>
     <div className='w-full h-72 displayFlex flex-col bg-amber-300'>
        <div className='w-full h-full   displayFlex flex-col'>
        <div className='border-2 border-black p-2 text-3xl tracking-wider w-52  h-20 displayFlex'>Taskify</div>
        <p className='my-2'>Task made easy</p>
        </div>
       <p className='relative bottom-0 left-0 text-black '>Made with ❤️ by shreyas</p>
     </div> 
    </>
  )
}
