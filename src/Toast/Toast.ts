import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const toastSuccess = (message:string)=>{
    toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
}