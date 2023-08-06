import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

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
            {cartItems.length > 0 ?<div>
                <ItemList categoryItems={cartItems} fromMenu={false}/>
            </div> :
            <div className="flex">
                <div className="text-xl font-sans">
                    Uh Oh! Your cart looks Empty.
                </div>
                <div className="mx-4">
                    <Link to="/"><button  className="bg-white rounded-lg w-28 text-orange-400 hover:shadow-lg hover:scale-95">
                        Go to Home.
                    </button>
                    </Link>
                </div>   
            </div>
            }    
        </div>    
    )
}
export default Cart;