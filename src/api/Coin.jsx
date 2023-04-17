import { createContext, useState } from "react";

let CoinList = createContext({
    name: "",
    price: "",
});

let Coin = (props) =>{

    let [coins, setCoins] = useState([
        {
            name: "BTC",
            price: 25000
        },
        {
            name: "DOGE",
            price: 0.07
        },
        {
            name:"RIPPLE",
            price: 0.45
        }
    ]);
    let [cartItems, setCartItems] = useState([]);
    let handelInsert =(name, price, quantity) =>{
        let flag = false;
        setCartItems(cartItems.map((value)=>{
            if(value.name === name){
                flag = true;
                value.quantity=parseFloat(value.quantity)+parseFloat(quantity);
            }
            return value;
        }))
        if(flag===false){
            console.log(false);
            setCartItems([...cartItems, {name,price,quantity:(quantity)}]);
        }
        console.log(cartItems);
    };
    return (
        <CoinList.Provider value={{cartItems, coins, handelInsert}}>
        {props.children}
        </CoinList.Provider>
    )
}
export {Coin, CoinList}