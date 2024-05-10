import React, { useState } from 'react'
import {Props} from '../Types/Task'
export default function EditModal({title,description,date,taskKey,isComplete,show,setShow}:Props) {
    const [taskTitle,setTaskTitle] = useState(title)
    const [taskDescription,setTaskDescription] = useState(description)
    const[complete,setComplete] = useState(isComplete)
    const [taskDate,setdate] = useState(date)
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const tasks = JSON.parse(localStorage.getItem("Tasks") || "{}")
        for(let i=0;i<tasks.length;i++){
            if(taskKey === Number(tasks[i].taskKey)){
                tasks[i].title = taskTitle
                tasks[i].description = taskDescription
                tasks[i].isComplete = complete
                tasks[i].date = taskDate
                localStorage.setItem("Tasks",JSON.stringify(tasks))
            }
        }
        setShow(!show)

    }
    const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        if(Number(e.target.value) === 1 )
                console.log('complete')

        if(Number(e.target.value) === 1 )
            setComplete(true)
        else
            setComplete(false)
    }

  return (
    <>
      <form className='fixed w-full h-full top-0 bottom-0 left-0 right-0 bg-gray-50 overflow-hidden displayFlex' onSubmit={handleSubmit}>
      <button className='absolute top-0 right-0 mr-14 mt-5 border border-black p-2 rounded' onClick={()=>setShow(false)}>
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
        </button>
      <div className='w-full h-1/2 lg:w-1/2 bg-white  displayFlex flex-col'>
            <label className='w-3/5 '>Title <span className='text-red-500 text-lg'>*</span></label>
            <input type="text" className='p-3 outline-none rounded border border-black w-3/5 my-3' required value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} name='title'/>   
            <label className='w-3/5 '>Description</label> 
            <textarea  className='p-3 outline-none rounded border border-black w-3/5 my-3 h-32' value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}  name='description' />    
           
            <div>
                <input type="date" min={new Date().toISOString().split("T")[0]} value={taskDate} onChange={(e)=>setdate(e.target.value)} />
                <select name="cars" id="cars" className='p-2 mx-2' onChange={handleSelectChange}>
                <option value={1} selected={!isComplete} className='text-green-400'>Completed</option>
                <option value={0} selected={!isComplete} className='text-red-600'>Not completed</option>
                </select>
            </div>
            <button className=' p-3 my-3 rounded  bg-yellow-300 hover:bg-yellow-400'>Save changes</button>
            </div>    
      </form>
    </>
  )
}
// value={description} onChange={handleChange}
