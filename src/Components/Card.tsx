import React from 'react'
type Props={
    title:string,
    description:string,
    date:string
}
export default function Card({title,description,date}:Props) {
    const handleModal = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        console.log("Hello")
    }
  return (
    <>
     <div className='w-96 h-48  my-4 bg-white  rounded' onClick={handleModal}>
       <div className='flex justify-between'>
       <h4 className='p-3 pt-4 text-2xl truncate'>{title}</h4> <p className=' flex items-center text-sm mr-3'>{date}</p>
       </div>
        <div className='overflow-hidden h-1/2'>
        <p className='mx-2'>{description}</p>  
        </div>        
        <div className='flex flex-row-reverse mr-2'>
            <button className=' p-1'><i className="fa-solid fa-check text-green-500"></i></button>
            <button className=' p-1 mx-2'><i className="fa-regular fa-pen-to-square"></i></button>
            <button className=' p-1'><i className="fa-solid fa-trash text-red-500"></i></button>
        </div>
    </div> 
    </>
  )
}
