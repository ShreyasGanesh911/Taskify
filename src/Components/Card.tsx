import React, { useEffect, useState } from 'react'
import { Props } from '../Types/Task'
import { toastSuccess } from '../Toast/Toast';
import { ToastContainer } from 'react-toastify';
import EditModal from './EditModal';
export default function Card({title,description,date,taskKey,show,setShow,isComplete}:Props) {
    const [modal,setModal] = useState(false)
    const searchTask = (num:number,tasks:Props[],operation:string)=>{
      show? setShow(false) : setShow(true)
        for(let i=0;i<tasks.length;i++){
          if(num === Number(tasks[i].taskKey) && operation==="delete"){
           tasks.splice(i,1)
            localStorage.setItem("Tasks",JSON.stringify(tasks))
            setTimeout(()=>toastSuccess("task deleted"),1000)
          }
          else if(num === Number(tasks[i].taskKey) && operation==="setComplete"){
              tasks[i].isComplete = true
              setTimeout(()=>toastSuccess("task completed"),500)
              localStorage.setItem("Tasks",JSON.stringify(tasks))
          }
        }
    }
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      e.preventDefault()
      const num = Number(e.currentTarget.value)
      const data = JSON.parse(localStorage.getItem("Tasks") || "{}")
      if(e.currentTarget.name === "deleteButton")
        searchTask(num,data,'delete')
      else
      searchTask(num,data,'setComplete')
    }
    useEffect(()=>{
      show? setShow(false) : setShow(true)
    },[modal])

  return (
    <>
      {modal && <EditModal title={title} description={description} date={date} isComplete={isComplete} taskKey={taskKey} show={modal} setShow={setModal} />}
     <div className={`w-96 h-48  my-4 bg-white  rounded ${isComplete? 'border border-green-600':""} `} >
       <div className='flex justify-between'>
       <h4 className={`p-3 pt-4 text-2xl truncate ${isComplete?'line-through':''}`}>{title}</h4> <p className=' flex items-center text-sm mr-3'>{date}</p>
       </div>
        <div className='overflow-hidden h-1/2'>
        <p className='mx-2'>{description}</p>  
        </div>        
        <div className='flex flex-row-reverse mr-2'>
            <button className={`p-1 ${isComplete? 'hidden':""} `} onClick={handleClick} value={taskKey} ><i className="fa-solid fa-check text-green-500"></i></button>
            <button className=' p-1 mx-2' onClick={()=>setModal(true)}><i className="fa-regular fa-pen-to-square"></i></button>
            <button className=' p-1' name='deleteButton' value={taskKey}  onClick={handleClick}><i className="fa-solid fa-trash text-red-500" ></i></button>
        </div>
        <ToastContainer/>
    </div> 

    </>
  )
}
