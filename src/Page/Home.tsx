import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import TaskModal from '../Components/TaskModal'
import { ToastContainer} from 'react-toastify';
import { toastSuccess } from '../Toast/Toast';

export default function Home() {
    const [task,setTask] = useState([{title:"",date:'',description:'',taskKey:0,isComplete:false}])
    const[change,setChange] = useState(false)
    const [show,setShow] = useState(false)
  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    
    setShow(true)
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
    },[show,change])
  return (
    <>
        {!show?
            <></>:
      <TaskModal setShow={setShow} task={task}/>
        }
         <section className='page bg-gray-50'>
             <form className='w-full h-44 displayFlex' >
                 <button className='border border-black p-4 rounded' onClick={handleClick}>Add task +</button>
             </form>
            {task.length>0    ? 
             
                 <div className='flex flex-wrap w-full  p-4 justify-evenly overflow-x-hidden'>
                        {task.filter((e)=>!e.isComplete).map((e)=>{
                            return(<Card title={e.title} description={e.description} date={e.date} taskKey={e.taskKey} key={e.taskKey} isComplete={e.isComplete} show={change} setShow={setChange} />)
                        })}
                         {task.filter((e)=>e.isComplete).map((e)=>{
                            return(<Card title={e.title} description={e.description} date={e.date} taskKey={e.taskKey} key={e.taskKey} isComplete={e.isComplete} show={change} setShow={setChange} />)
                        })}
                 </div>
             :
             <div className='w-full text-center p-4 text-6xl font-mono'>
                 No task
                 <p className='text-lg p-1 my-2'>Try adding a task</p>
             </div>
         }
            <ToastContainer/>
      </section>
      
    </>
  )
}

/**
                          {task.map((e)=>{
                 return(<Card title={e.title} description={e.description} date={e.date} taskKey={e.taskKey} key={e.taskKey} isComplete={e.isComplete} show={change} setShow={setChange} />)
             })}

 */