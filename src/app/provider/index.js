'use client'

import { useState } from "react"
import { StoreContext } from "../context"

export default function StoreProvider({children}){
    const [cardData, setcardData] = useState([])
    
    return(
        <StoreContext.Provider value={{cardData, setcardData}}>
            {children}
        </StoreContext.Provider>
    ) 
}