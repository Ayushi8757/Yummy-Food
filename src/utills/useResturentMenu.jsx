// Creating custom hook for ResturentMenu

import { useState,useEffect } from "react"

const useResturentMenu=(resId)=>{

     const [restaurant, setRestaurant] = useState(null);//holds a restaurant details

    //calls only once after the initial component render
    useEffect(() => {
        console.log("Id ");
        getRestaurantInfo();
       
    }, []);

    //get restaurant details
    async function getRestaurantInfo () {
        console.log("This is Resturant Menu ");
        const restaurantData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER" );//fetching menu data
        
        const jsonResData = await restaurantData.json();//converting fetched data to json
       
        //set restaurant
        setRestaurant(jsonResData.data);
    }
return restaurant;

}
export default useResturentMenu;