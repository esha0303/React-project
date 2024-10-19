import React from "react";



function Card({icon ,title, text}){   
    return(
<>
<div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl ">
    

<div className="flex flex-col items-center justify-center ">
<img className="w-32 h-32 mt-5 rounded-full" src={`${icon}`} alt="" />
<div className="text-black "> 
    <h2 className="flex items-center justify-center mt-6 text-2xl font-bold"> {title}</h2>
    <p className="px-16 py-5 mt-6 mb-12 font-serif text-gray-700"> {text}</p>
</div>
</div>
</div>
</>
    )
}

export default Card;