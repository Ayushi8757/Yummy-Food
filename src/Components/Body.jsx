import ResturantCard from "./ResturantCard";
import {  useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useonlineStatus from '../utills/useonlineStatus';

const Body = () => {
    //Local state variable = Super powerful variable
    
    const [listOfRestaurants, setListOfRestaurants] =useState([]);//All Restaurants
    const [filteredRestaurants, setFilteredRestaurants] =useState([]);    //Filtered Restaurants
    const [searchRestaurant, setSearchRestaurant] =useState("");//Search Restaurants
    const onlineStatus = useonlineStatus();//fetching online status through custom hook.


    //useEffect(2 params) - callback function, dependencies
    useEffect(() => {
        getRestaurants();
        console.log("running...");
    }, []);

    //get restaurants list   
    async function getRestaurants(){
        //making swiggy api calls
       try {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=25.59080&lng=85.13480"); 
        console.log(data);

        const json = await data.json();

        console.log(json);
        const listPath=json?.data?. success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
        if (listPath) {
            setListOfRestaurants(listPath);
            setFilteredRestaurants(listPath);
            console.log("If block")
        } 
       } 
       catch(error){
                console.log(error);
        }
    };//getRestaurants

    //check if there's internet or not & show message.
    if(onlineStatus === false)
        return (
            <h1>Looks like  you're offline. !!!Check your internet connection.......</h1>
        );

    return listOfRestaurants.length==0? <Shimmer/>: ( <div className="body">
   
    <div>
            <input type="text" placeholder="Search" value={searchRestaurant}
                onChange={(e) => {
                    setSearchRestaurant(e.target.value);
                }
            }
            />

                <button  className="btn" onClick={()=>{
                     const filteredRes = listOfRestaurants.filter((res) => 
                     res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
                    );
                        
                         setFilteredRestaurants(filteredRes);
                    }}>
                        Search
                </button>
            <button className="res-filter" onClick={() => 
                {
                    const filteredList = listOfRestaurants.filter((restaurants) => restaurants.info.avgRating > 4);
                   setFilteredRestaurants(filteredList);//updating the state
                    console.log("resturant data");
                }}>
                Top Rated Restaurants
            </button>
       </div> 
      <div style={{textDecoration:'none',display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
       { 
            filteredRestaurants.map((res)=>{
                
                return(
                  <Link style={{textDecoration:'none'}} to={"/resturant/"+res.info.id} key={res.info.id}>
                    <ResturantCard  resData={res.info}/>
                 </Link>
                 )
             })
        }
      </div>
    </div>
    )
}

export default Body;