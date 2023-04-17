import { useContext, useState } from "react";
import { CoinList } from "../api/Coin";

let Menu = () =>{
    let {coins, handelInsert} = useContext(CoinList);
    let [quantiy, setQuantity] = useState();

    return (
        <div className="
        flex
        ">
            {coins.map((val)=>{
                return(
                    <div key={val.name}>
                        <div>
                            <img src="" alt="Coin image" />
                            <h4>{val.name}</h4>
                            <h4>{val.price}</h4>
                        </div>
                        <div>
                            <h3>Qty:</h3>
                            <input type="number" step="0.01" onChange={(e)=>{
                                setQuantity(e.target.value);
                                console.log(e.target.value);
                            }}/>
                        </div>
                        <button onClick={()=>{
                            console.log(val.name+" "+val.price);
                            handelInsert(val.name, val.price, quantiy);
                        }}>Add to cart</button>
                    </div>
                )
            })}
        </div>
    );
}
export default Menu;