import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const clear = () => {
        dispatch(clearCart());
    }

    return (
        <div className="w-10/12 m-auto p-4">
            <div className="flex w-12/12 justify-end m-4 p-4">
                <button className="bg-orange-400 rounded-lg w-14 text-white" onClick={clear}> Clear</button>
            </div>
            <div>
                <ItemList categoryItems={cartItems} fromMenu={false}/>
            </div>    
        </div>    
    )
}
export default Cart;