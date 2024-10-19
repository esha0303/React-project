import React from "react";

function Mealdetails({icon, title, text }){

    return(
        <>
        <div className="inset-0 mb-10 border-2 border-transparent border-black border-dashed rounded-lg shadow-lg">
            <div className="flex flex-col ">
                <img className="mb-8 rounded-md h-72" src={icon} alt=""/>
            <div className="">
                <h2 className="mb-8 text-xl font-bold">{title} </h2>
                <p className="mb-5 font-medium">  {text} </p>
                </div>
            </div>
        
        </div>
        
        </>
    )
} 


export default Mealdetails;