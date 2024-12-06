import { useEffect, useState } from "react"
import { auth } from "./firebase/firebase"
import { db } from "./firebase/firebase"
import { doc, getDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import EditArticles from "./EditArticles"


export function Profil () {

      const [userDetails, setUserDetails] =useState (null)
      const navigate = useNavigate()
      
       const fetchUserData = async () => {
        auth.onAuthStateChanged( async (user) => {
            console.log(user)
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()) {
                setUserDetails(docSnap.data());
            }else {
                console.log(" utlisateur non connecter")
            }
        });
       };

       useEffect(() => {
        fetchUserData();
       }, [])

       
      async function handleLogout() {
        try {
            await auth.signOut();
            navigate('/');
            console.log('deconection reussit')

        }catch (error) {
            console.error("errur lors de la requete", error.message)
        }
      }

       function handleMembres (){
        navigate('/membres')
      }

    return(
        <div className='w-full h-screen flex items-center justify-center flex-col gap-2'  >
            {userDetails ?(
                <>
                   <h3 className="text-6xl "> bonjour {userDetails.firstname}</h3>
                   <div>
                    <p className="text-2xl font-bold"> Votre Email : {userDetails.email}</p>
                    <p className="text-2xl font-bold"> Votre prenom : {userDetails.firstName}</p>
                    <p className="text-2xl font-bold"> votre nom : {userDetails.lastName}</p>
                   </div>

                   <button  onClick={handleLogout}className="bg-[blue] text-[white] rounded"> se deconnecter</button>
                   <button onClick={handleMembres} className="bg-[blue] text-[white] rounded"> acceder a votre espace Membres </button>
                </>

            ) : (
                <p> chargement....</p>
            )}

            <form>



            </form>
            <EditArticles/>
        </div>

        
    );
}