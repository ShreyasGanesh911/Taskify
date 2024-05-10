export type Props={
    title:string,
    description:string,
    date:string,
    taskKey:number,
    isComplete:boolean,
    show : boolean,
    setShow:React.Dispatch<React.SetStateAction<boolean>>
}

export type Obj = {
    title :string,
    description:string,
    date:string,
    taskKey:number,
    isComplete:boolean
}