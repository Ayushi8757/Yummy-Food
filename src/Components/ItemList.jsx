import React from "react";
import { CDN_URL } from "../utills/Constant";
const ItemList=({items})=>{
    //  console.log(items);
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
                        <button className="p-2 ml-[40px] mt-[110px] rounded-lg bg-white font-bold text-green-500  border-none hover:bg-slate-600">Add +</button>
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