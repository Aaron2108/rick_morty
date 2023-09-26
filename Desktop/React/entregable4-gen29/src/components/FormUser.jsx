import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const FormUser = ({createUser, infoUpdate,updateUser,setInfoUpdate}) => {

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])

    const submit = data => {
        if(infoUpdate){
            //Update
            updateUser('/users',infoUpdate.id, data)
            setInfoUpdate()
        }else{
            //Create
            createUser('/users', data)
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        })
    }
    const [isopen, setisopen] = useState(false)
  return (

    <>
    <button className="btnU" onClick={()=>setisopen(true) }>Crear Usuario</button>
    {
        isopen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 ">
            <form onSubmit={handleSubmit(submit)}>
        <div className='container'>
        <div>
            <label htmlFor="email">Email</label><br />
            <input {...register('email')} type="email" id="email"/>
        </div>

        <div>
            <label htmlFor="password">Password</label><br />
            <input {...register('password')} type="password" id="password"/>
        </div>

        <div>
            <label htmlFor="first_name">First name</label><br />
            <input {...register('first_name')} type="text" id="first_name"/>
        </div>

        <div>
            <label htmlFor="last_name">Last name</label><br />
            <input {...register('last_name')} type="text" id="last_name"/>
        </div>

        <div>
            <label htmlFor="birthday">Birthday</label><br />
            <input {...register('birthday')} type="date" id="birthday"/>
        </div>
    <button className="btn-c-u">{ infoUpdate ? 'Actualizar usuario' :  'Crear Nuevo Usuario'}</button>
    <button className="bg-red-500 py-2 px-6 rounded-lg text-white font-bold mt-5" onClick={()=>setisopen(false)}>Salir</button>
    </div>
    </form>
            </div>
        </div>
        )
    }
    </>

  )
}
export default FormUser