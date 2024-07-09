import React from "react";
import { CDN_URL } from "../utills/Constant";
const ResturantCard =({resData})=>{
    console.log(resData);
    const{name,avgRatingString,cuisines,costForTwo,cloudinaryImageId,id}=resData;

    return(
        <div  className="card" >
            <div className="rescard">
               
                <img className="imge"  src={CDN_URL +cloudinaryImageId}/>
               
                <div className="name">{name}</div>
                <div className="details">
                    <h4  className="item">{cuisines[0]+", "+cuisines[1]}</h4>
                     <p className="rating"> {avgRatingString} &#x2605;</p>
                </div>
                  <div className="deliverytime">
                   • {resData.sla.deliveryTime} mins            
                    </div>
                </div>
        </div>
    )
};
export default ResturantCard;
