import { useState } from "react";
import LoadingComponent from "../loadingComponent/LoadingComponent";
import mockProducts from "../../mock/mockProducts";
import { ItemList } from "../itemList/ItemList";

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div>
      {loading ? <LoadingComponent /> :
       <ItemList products={mockProducts} 
       />
      }
    </div>
  );
};