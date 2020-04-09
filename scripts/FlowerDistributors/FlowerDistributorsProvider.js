let distributor = []

export const useDistributor = () => distributor.slice () 


export const getDistributor = () => fetch("http://localhost:8088/distributors")  
    .then(res => res.json())    // stringify our json data
    .then(parsedDistributor => distributor = parsedDistributor) 