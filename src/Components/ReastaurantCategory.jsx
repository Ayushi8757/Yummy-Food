
import { useState } from "react";
import ItemList from "./ItemList";
const ReastaurantCategory=({data})=>{
    console.log(data);
     const [showItems,setshowItems]=useState(false);// this is used for expending accordian 
    const handleClick=()=>{
        // if showItems is true then false and if that is false then true
        setshowItems(!showItems);// this fun upadate the showItems and expend and collapse the accrodian.
         //lifting state up, this function is coming from the parent.
        //setshowIndex();
    }
        return(
            <div> 
             
                <div className="w-6/12 mx-auto bg-gray-100 shadow-lg p-4 my-4 ">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title}({data?.itemCards.length})</span>
                    <span className="font-bold">⌄</span>
                    </div>
                    <div className="flex justify-center align-middle ">
               {showItems && <ItemList items={data?.itemCards} />}
      </div>
                </div>
            </div>
        );

};
export default ReastaurantCategory;