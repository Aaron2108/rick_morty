import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import { pagination } from "../utils/pagination"
import Residents from "./Residents"

const ResidentCard = ({url, residents}) => {

    const [resident, getResident, hasError] =useFetch(url)
    useEffect(() => {
        getResident()
        }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const {pages, residentsInPage} = pagination(currentPage, residents)
// console.log(residents);
// console.log(url);

    useEffect(() => {
        setCurrentPage(1)
    }, [url])

  return (
    
     <>
    <div className="w-full flex flex-wrap justify-center items-center">
    {
        residentsInPage?.map(resident1 =>
            <Residents
            key={resident1}
            resident={resident1}
            />) 
    }

    </div>
        {/* Paginacion */}

        <section>
        {
            pages.map((page) =>( 
                <button   
                key={page}    
                onClick={()=> setCurrentPage(page)} 
                className={`mr-1 mb-8 bg-green-700 p-2 px-3 rounded-md opacity-50 ${currentPage ===page ? "bg-red-500 px-6 opacity-100" : "bg-green-700"}`}
                >
                {page}
                </button> 
            ))}
        </section> 
    
    </>
    
  )
}
export default ResidentCard