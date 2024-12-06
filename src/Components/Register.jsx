import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase/firebase"
import { db } from "./firebase/firebase"
import { setDoc, doc } from "firebase/firestore"
import {toast, ToastContainer} from 'react-toastify'
export default function Register() {

    const [email, setEmail] = useState ("")
    const [password, setPassword ] = useState ("")
    const [fname, setFname] = useState ("")
    const [lname, setLname] =useState ("")

    const handleRegister =  async (e) => {
        e.preventDefault();
        try{
          await createUserWithEmailAndPassword(auth, email,password)
          const user = auth.currentUser;
          console.log(user)
          if(user){
            await setDoc(doc(db, "Users", user.uid), {
                email:user.email,
                firstName: fname,
                lastName: lname,

            });
        }
         toast.success(" vous etes bien inscrit",{
            position:"top-center"
         })    
        }catch(error){
            console.log(error.message);
            toast.success(error.message,{
                position:"bottom-center"
            });
           
        }
    };






  return (
    <form onSubmit={handleRegister} className='w-full h-screen flex items-center justify-center flex-col gap-2' >
    
           
                <h3> Pour vous inscrire</h3>

                <div className="mb-3">
                    <label htmlFor="lName"> Votre Prénom : </label>
                    <input 
                    type="text" 
                    className=""
                    placeholder="votre prenom"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    />

                 </div>



                <div className="mb-3">
                    <label htmlFor="Lnamen"> Votre nom : </label>
                    <input 
                    type="text" 
                    className=""
                    placeholder="votre nom"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    />

                 </div>
               
               









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
