import { db } from "./firebase/firebase"
import { useState, useEffect } from "react"
import { collection, doc, getDocs } from "firebase/firestore"

export default function Cards() {
    const [apoitements, setappoitements] = useState([]);

    useEffect(() => {
        const getAppoitenments = async () => {
            try{
                const querySnapshot = await getDocs(collection(db, "articles"));
                const appoitementList = [];
                querySnapshot.forEach((doc) =>{
                    appoitementList.push({id: doc.id, ...doc.data()})
                    setappoitements(appoitementList)
                })

            }catch (error){
                console.error('erreur', error)
            }
        }
        getAppoitenments()
    })
  return (
    <>
       <h2 className="font-bold text-center text-4xl uppercase text-amber-900"> Liste des articles </h2>
       <div className="grid grids-cols-1 md:grid cols-2 lg:grid-cols xl: grid-cols-4 gap-4 pt-20"></div>
       {apoitements.map((appoitement) =>(
        <div key={appoitement.id} className="bg-white p-4 shadow-md">
            <h2 className="text-4xl font-bold mb-2 text-red-600">{appoitement.title}</h2>
             <h2 className="text-2xl font-semibold mb-2 1px text-blue-700">{appoitement.pseudo}</h2>
            <p className="text-sm text-[]font-bold mb-2 text-red-500">{appoitement.message}</p>
            <hr />
        </div>
       ))}
    </>
  )
}
