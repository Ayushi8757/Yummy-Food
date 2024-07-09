import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturentMenu from "../utills/useResturentMenu";
import ReastaurantCategory from "./ReastaurantCategory";
import { CDN_URL } from "../utills/Constant";

const RestaurantMenu = () => {
    const {resId} = useParams();//call useParam to get value of restaurant Id(resId) using object destructuring.

    //fetching restaurant info from custom hook (useRestaurantMenu)
    const restaurant=useResturentMenu(resId)
   
    const reslist=(restaurant?.cards[2].card.card.info)
    console.log(reslist);
    //for expandin
    //const [showIndex,setshowIndex]=useState(null)

  const menuList= (restaurant?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
  console.log(restaurant?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
   
     //filtering categories
    const categories =
    restaurant?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
   
    return !reslist ? <Shimmer/>: ( 
        <div>
                <div className="text-center"> 
                  <img  className="w-[500px] h-[300px] m-7 ml-[500px]" src={CDN_URL+reslist.cloudinaryImageId}/>
                     <span className="font-bold my-3 text-3xl mr-80">{reslist.name}</span>
                     <span className="ml-70 bg-green-800 p-1 font-bold text-base text-white rounded-lg">{reslist.avgRating}&#x2605;</span>
                     <p className="font-bold text-xl text-gray-600 pr-[330px]">{reslist.cuisines.join(",")}</p>
                    <p className="pr-[180px] text-lg font-bold text-gray-500">{reslist.slugString}<span>{","+reslist.city}</span></p>
                </div>

            <div>  
        
                {/* {
                menuList?.map((item)=>(  
                    <div key={item?.card?.info?.id}>                    
                         <h4>
                         {item?.card?.info?.name || "No Menu Item Available"}
                         </h4>                        
                     </div>   
                ))
            }         */}

             {/* manu item - accordian categories */}

        {categories.map((category) => (
                    
                   /* Controlled Component
                    --------------------
                    RestaurantCategory(Child component) is a controlled component, 
                    it will expand the accordian only when it's clicked, 
                    rest accordians are collapsed based upon RestaurantMenu which is a parent component.*/
                   
          <ReastaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
       //expand the items only when we clicked, other accordians will collpase
          //showItems={index===showIndex?true:false}
        /*  Lifting state up
          -----------------
          passing the function to set the index value in child component.*/
      
          //setshowIndex={()=>setshowIndex(index)}/>
        ))
        }
            </div> 
        </div>
   
    )

}

export default RestaurantMenu;