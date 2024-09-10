'use client'

import { useState } from "react"
import { StoreContext } from "../context"

export default function StoreProvider({children}){
    const [cardData, setcardData] = useState([])
    const [selectedArchive, setSelectedArchive] = useState(null);

    return(
      <StoreContext.Provider value={{ cardData, setcardData, selectedArchive, setSelectedArchive }}>
        {children}
      </StoreContext.Provider>
    ) 
}
