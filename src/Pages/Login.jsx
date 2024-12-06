import { signInWithEmailAndPassword } from "firebase/auth";
import  {useState} from "react";
import { auth } from "../Components/firebase/firebase";
import {  useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


export function Login () {
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password)
            console.log ('utilisaateur bien connecter ')
            navigate('/profile')
            
            toast.success(" votre profil est bien enregistré")
            
            

        }catch (error){
            console.log(error.message);
            
        }
    };


    return(
        <form onSubmit={handlesubmit} className='w-full h-screen flex items-center justify-center flex-col gap-2' >
                <h3> Pour vous connecter </h3>

                 <div className="mb-3">
                    <label htmlFor="email"> Votre Email : </label>
                    <input 
                    type="email" 
                    className=""
                    placeholder="votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                 </div>

                 <div className="mb-3">
                    <label htmlFor="password"> Votre mot de passe </label>
                    <input
                     type="password"
                     className=""
                     placeholder=" Entrez votre mot de passe "
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    />

                 </div>

                 <div className="mb-3">
                    <button type="submit" className="bg-[blue] text-white rounded "> Se connecter </button>

                 </div>

                 <ToastContainer/>


 





        </form>
    )
}