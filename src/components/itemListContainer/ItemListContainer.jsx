import { useState } from "react"
import LoadingComponent from "../loadingComponent/LoadingComponent"

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(true)
  return (
    <div>
    {loading ? <LoadingComponent /> : 
    // aca iria los el componente ItemList
    <></>}
    </div>
  )
}