import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({categoryItems, fromMenu}) => {
    const dispatch = useDispatch();
    const AddToCart = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
    }
    return (
        <>
          {categoryItems.map(info => (
                <div key = {info?.card?.info?.id} className="p-2 m-4 w-lg bg-white shadow-lg justify-between flex">
                    <div className="p-4 w-9/12">
                    <p className="font-sans">{info?.card?.info?.name}</p>
                    <p className="font-sans">₹ {info?.card?.info?.price/100 || info?.card?.info?.defaultPrice /100}</p>
                    <p className="font-light font-sans text-sm break-words">{info?.card?.info?.description}</p>
                    </div>
                    <div className="p-4">
                        <img className="w-[110px] rounded-lg" src={IMAGE_URL + info?.card?.info?.imageId}/>
                        {fromMenu && <button type="button" className="bg-white border border-solid border-blue-100 shadow-sm w-full rounded-lg text-green-400 font-sans text-lg" onClick={() => AddToCart(info)}>Add +</button>}
                    </div>   
                </div>
                ))}
        </>
    )
}
export default ItemList;