import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import TaskModal from '../Components/TaskModal'

export default function Home() {
    const [task,setTask] = useState([{title:"",date:'',description:''}])
    const[title,setTitle] = useState('')
    const [show,setShow] = useState(false)
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
            setShow(true)
            setTitle('')
            e.preventDefault()
          
            
    }
    const getData = ()=>{
        if(localStorage.getItem("Tasks") !== null){
            const data = JSON.parse(localStorage.getItem("Tasks") || "{}") 
            setTask(data)
        }
       else{
        localStorage.setItem("Tasks",JSON.stringify([]))
        setTask([])
       }       
    }
    useEffect(()=>{
        getData()
    },[show])
  return (
    <>
        {!show?
            <></>:
      <TaskModal setShow={setShow} task={task}/>
        }
         <section className='page bg-gray-50'>
             <form className='w-full h-44 displayFlex' onSubmit={handleSubmit}>
                 <button className='border border-black p-4 rounded'>Add task +</button>
             </form>
            {task.length>0    ? 
             
                 <div className='flex flex-wrap w-full  p-4 justify-evenly overflow-x-hidden'>
                      {task.map((e)=>{
                 return(<Card title={e.title} description={e.description} date={e.date}   />)
             })}
                 </div>
             :
             <div className='w-full text-center p-4 text-6xl'>
                 No task
             </div>
         }
 
      </section>
    </>
  )
}

/*
    <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

*/