import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
export const MapContext = createContext()
export default function MapContextProvider({children}){
    const [latlng,setLatlng] = useState([])
useEffect(()=>{
    axios
    .get('/work/latlng')
    .then((res)=>{
        setLatlng(res.data.latlng)
    })
},[])
console.log(latlng)

return(
    <MapContext.Provider value={{latlng}}>
        {children}
    </MapContext.Provider>
)
}
