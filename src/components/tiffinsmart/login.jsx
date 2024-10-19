import React from "react";
import first from "../../assets/6103.png";
import second from "../../assets/arrow.png";
import third from "../../assets/6103.png";
import fourth from "../../assets/cb3349b86ca661ca61ae9a36d88d70d4.jpg";
import fifth from "../../assets/images.jpg";
import sixth from "../../assets/png-clipart-squirtle-pikachu-pokemon-blastoise-charmander-pikachu-fictional-character-pokemon.png";
import seventh from "../../assets/png-transparent-pokemon-squirtle-illustration-pokemon-x-and-y-pokemon-go-ash-ketchum-pikachu-squirtle-pokemon-vertebrate-fictional-character-cartoon-thumbnail.png";
import eigth from "../../assets/pokemon-png-13.png";
// import { Link } from "react-router-dom"; 
function Login() {
  return (
    <>
      <div className="container m-6 justify-center flex h-[800px]">
        
            
        <div className="flex flex-col items-start justify-start overflow-y-auto shadow-2xl">
          <div className="m-10 shadow-2xl">
            <img src={first} className="items-center m-6 bg-blue-500 rounded-full w-52 h-52" alt=" " />
            
             </div>
             <div className="m-6  bg-green-500 w-52 h-64 overflow-visible">
  <img src={second} className="w-52 h-52 mt-12  " alt=" " />
  <p className=" text-center z-10">HYYYYYYY</p>
</div>
          <div>
            <img src={third} className="m-6 bg-green-500 rounded-full w-52 h-52" alt=" " />
          </div>
          <div>
            <img src={fourth} className="m-6 bg-blue-500 rounded-full w-52 h-52" alt=" " />
          </div>
          <div>
            <img src={fifth} className="w-56 h-56 m-6 rounded-full" alt=" " />
          </div>
          <div>
            <img src={sixth} className="w-56 h-56 m-6 bg-pink-400 rounded-full" alt=" " />
          </div>
          <div>
            <img src={seventh} className= "m-6 bg-pink-400 rounded-full h-52 w-52" alt=" " />
          </div>
          <div>
            <img src={eigth} className="m-16 rounded-full h-52 w-52" alt=" " />
          </div>
        </div>
        </div>
      
    </>
  );
}
export default Login;







