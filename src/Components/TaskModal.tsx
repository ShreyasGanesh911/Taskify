import React, { useState } from 'react'
type Obj = {
    title :string,
    description:string,
    date:string
}
type Props = {
    setShow : React.Dispatch<React.SetStateAction<boolean>>
    task:Obj[]
}
export default function TaskModal({setShow,task}:Props) {
    const [form,setForm] = useState({title:"",description:""})
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        console.log(form)
        e.preventDefault()
        localStorage.setItem('Tasks',JSON.stringify([...task,{title:form.title,description:form.description,date:"12/12/12"}])) 
        setShow(false)
        
}
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
            let name = e.target.name
            let value = e.target.value
            setForm({...form,[name]:value})
    }
  return (
    <>
     <form className='fixed w-full h-full top-0 bottom-0 left-0 right-0 bg-white overflow-hidden displayFlex' onSubmit={handleSubmit}>
        <button className='absolute top-0 right-0 mr-14 mt-5 border border-black p-2 rounded' onClick={()=>setShow(false)}>
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
        </button>
            <div className='w-1/2 h-1/2 bg-pink-200 displayFlex flex-col'>
            <label className='w-3/5 '>Title <span className='text-red-500 text-lg'>*</span></label>
            <input type="text" className='p-3 outline-none rounded border border-black w-3/5 my-3' value={form.title}  onChange={handleChange} name='title'/>   
            <label className='w-3/5 '>Description</label> 
            <input type="text" className='p-3 outline-none rounded border border-black w-3/5 my-3' value={form.description} onChange={handleChange} name='description' />    
            <input type="date" min={new Date().toISOString().split("T")[0]} value={''} />
            <button className=' p-3 my-3 rounded  bg-yellow-300 hover:bg-yellow-400'>Add task</button>
            </div>    
            
        
    </form> 

    </>
  )
}