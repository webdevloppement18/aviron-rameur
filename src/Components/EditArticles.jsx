import {useForm} from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebase/firebase'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




export default function EditArticles() {

    const {register, handleSubmit, reset, formState : {errors}} = useForm();
    
    const onSubmit = async (data) => {
        try{
            const docRef = await addDoc(collection( db, "articles"),data);
            console.log(docRef.id);
            reset();
            toast.success (" article publier avec succés")  

        }catch(error) {
            console.error(" une erreur est survenue", error)
            toast.error(' une erreur est survenue')
        }
    }
  return (
    <div className='max-w-[400px] w-full bg-white p-6 rounded-md shadow-md mt-12'>
        <h1 className='text-4xl mb-4 font-bold uppercase text-amber-600'> Publier un article</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>

            <div className='mb-4'>
                <label className='block' htmlFor="title"> Votre Titre : </label>
                <input  className=" outline-none form-input mt-1 block w-full border-b border-b*gray-300"type="text" id='title' {...register("title", {required: "Ce champ est requis"})} />
                {errors.title && <p className='text-red-500 text-sm mt-1'>{errors.title.message}</p>}
            </div>
            <div className='mb-4'>
                <label className='block' htmlFor="pseudo"> Votre pseudo : </label>
                <input  className=" outline-none form-input mt-1 block w-full border-b border-b*gray-300"type="text" id='pseudo' {...register("pseudo", {required: "Ce champ est requis"})} />
                {errors.pseudo && <p className='text-red-500 text-sm mt-1'>{errors.subTitle.pseudo}</p>}
            </div>
            <div className='mb-4'>
                <label className='block' htmlFor="message"> Votre articles : </label>
                <input  className=" outline-none form-input mt-1 block w-full border-b border-b*gray-300"type="text" id='message' {...register("message", {required: "Ce champ est requis"})} />
                {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.title.message}</p>}
            </div>

            <div className='mt-4'>

                <button type='submit' className='bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-md'> Envoyer votre article</button>

            </div>





        </form>
         <ToastContainer/>
      
    </div>
  )
}
