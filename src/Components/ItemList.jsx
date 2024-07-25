import React from "react";
import { CDN_URL } from "../utills/Constant";
import { addItem, removeItem } from "../utills/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const ItemList=({items})=>{
    //  console.log(items);

    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);
  
    
    const handleremoveCart = (item) => {
      dispatch(removeItem(item));
    };
  
    const dispatch=useDispatch();
    const HandleAddItem=(item)=>{
            dispatch(addItem(item));
    };
return(
    <div> 
        {items.map((item)=>(
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 flex text-left justify-between"> 
                <div className="w-9/12">
                <div className="py-2 ">
                    <span className="font-bold text-lg ">{item.card.info.name}</span>
                    <h3 className="font-bold text-base">Rs. {item.card.info.price?item.card.info.price/100 :item.card.info.
                        defaultPrice/100}</h3>
                </div>
                <p className="font-bold text-m text-gray-600">{item?.card?.info?.description}</p>
                </div>
                <div className="w-3/12 p-4">
                    <div className="absolute">
                    {cartItems.length>0 && <button  className="bg-white text-green font-bold text-xl rounded-lg px-2 py-2 text-green-500" onClick={handleremoveCart}>‒</button>}
                        <button onClick={()=> HandleAddItem(item)} className="p-2 ml-[40px] mt-[80px] rounded-lg bg-white font-bold text-green-500  border-none hover:bg-slate-600">Add +</button>
                       
                    </div>
                    <img src={CDN_URL+item.card.info.imageId} className="w-full"/>
                </div>
            </div>
        )
    )}
    </div>
)
};
export default ItemList;