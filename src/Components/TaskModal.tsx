import React, { useState } from 'react'
import {Obj} from '../Types/Task'

type Props = {
    setShow : React.Dispatch<React.SetStateAction<boolean>>
    task:Obj[]
}
export default function TaskModal({setShow,task}:Props) {
    const [form,setForm] = useState({title:"",description:""})
    const [date,setdate] = useState(new Date().toISOString().split("T")[0])
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        console.log(form)
        e.preventDefault()
        const key = Math.ceil(Math.random()*100000)
        localStorage.setItem('Tasks',JSON.stringify([...task,{title:form.title,description:form.description,date:date,taskKey:key,isComplete:false}])) 
        setShow(false)
        
}
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
            let name = e.target.name
            let value = e.target.value
            setForm({...form,[name]:value})
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
            <input type="text" className='p-3 outline-none rounded border border-black w-3/5 my-3' placeholder='Title here' required value={form.title}  onChange={handleChange} name='title'/>   
            <label className='w-3/5 '>Description</label> 
            <input type="text" className='p-3 outline-none rounded border border-black w-3/5 my-3' placeholder='Description here' value={form.description} onChange={handleChange} name='description' />    
            <input type="date" min={new Date().toISOString().split("T")[0]} value={date} onChange={(e)=>setdate(e.target.value)} />

            <button className=' p-3 my-3 rounded  bg-yellow-300 hover:bg-yellow-400'>Add task</button>
            </div>    
            
        
    </form> 

    </>
  )
}