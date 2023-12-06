export const pagination = (currentPage,residents) => {
    
    //Excepcion para el primer render
    if(!residents){
        return {
            pages: [1],
            residentsInPage: []
        }
    }

    //Cantidad de residentes por pagina
    const cantidad = 6

    //Cantidad total de paginas totales 
    const totalPages = Math.ceil(residents.length / cantidad)

    //Residentes que van a mostrar en la pagina actual
    const sliceStart = (currentPage - 1) * cantidad // 6
    const sliceEnd = sliceStart + cantidad //12
    const residentsInPage = residents.slice(sliceStart, sliceEnd);

    //Generacion del arreglo de las paginas que se van a mostrar 
    const pages = []
    for(let i = 1; i <= totalPages; i++){
        pages.push(i)
    }
    return {
        residentsInPage,
        pages
    }
}