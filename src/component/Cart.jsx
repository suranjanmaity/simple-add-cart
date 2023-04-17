import { useContext } from "react";
import { CoinList } from "../api/Coin";

let Cart = () =>{
    let {cartItems} = useContext(CoinList);
    let grandTotal =0;
    return(
        <div>
            <ol className="
            w-4/5
            border
            ">

            {cartItems.map((val)=>{
                grandTotal+=parseFloat(val.quantity)*val.price;
                return(
                    <div>
                        <li key={val.name} className="
                    flex justify-evenly w-[100%]
                    ">
                        <div className="
                        flex justify-center w-1/3
                        ">
                            {val.name}
                        </div>
                        <div className="
                        flex justify-center w-1/3
                        ">
                            {val.quantity}
                        </div>
                        <div className="
                        flex justify-center w-1/3
                        ">
                            {parseFloat(val.quantity)*val.price}
                        </div>
                    </li>
                    </div>

                );
                })
            }
            </ol>
            <span>Grand Total : {grandTotal}</span>
        </div>
    )
}
export default Cart;