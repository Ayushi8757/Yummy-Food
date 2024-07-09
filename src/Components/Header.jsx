import { logourl } from "../utills/Constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../utills/useonlineStatus";
const Header=()=>{
    let [btnName,setbtnName]=useState("Login");
    const onlineStatus=useonlineStatus();
    return(
        <div className="header">
            <div className="logo">
                <img  className= "image" src={logourl}/>

            </div>
            <div className="nav-item">
                <ul>
                <li> <Link className="text-xl text-gray-700 hover:text-red-500"  to="/">Home</Link></li>
                <li > <Link  className="text-xl text-gray-700 hover:text-red-500" to="/about">About</Link></li>
                <li > <Link  className="text-xl text-gray-700 hover:text-red-500" to="/cart">Cart</Link></li>
                <li><Link className="text-xl text-gray-700 hover:text-red-500" to="/contact">Contact</Link></li> 
                <li><button className="w-[70px] h-[30px] bg-black text-white font-bold rounded text-base border-none" onClick={()=>{
                    btnName=="Login"?setbtnName("Logout"):setbtnName("Login");
                }}> {btnName}</button>
                </li> 
                <li>{onlineStatus === true ? "🟢" : "🔴" }</li>         
                </ul>      
            </div>
        </div>
    )
};
export default Header;