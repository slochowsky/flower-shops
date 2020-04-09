let retailersDistributor = []

export const useRetailersDistributor = () => retailersDistributor.slice () 


export const getRetailersDistributor = () => fetch("http://localhost:8088/retailersDistributors")  
    .then(res => res.json()) 
    .then(parsedRetailersDistributor => retailersDistributor = parsedRetailersDistributor) 