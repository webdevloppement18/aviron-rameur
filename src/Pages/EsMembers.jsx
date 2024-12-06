
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import EditArticles from "../Components/EditArticles";


export default function EspacesMembers() {
  const navigate = useNavigate();

    function handleRetour () {
    navigate('/login')
  } 


  return (
    <div className='w-full h-screen flex items-center justify-center flex-col gap-2'>

      <button
      onClick={handleRetour}
      

      
      >
      <FaArrowLeft/>  

      </button>
       <EditArticles/>
    </div>
  )
}
