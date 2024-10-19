import React from "react";
// import xyz from "../../assets/xyz.jpg";
// import blue from "../../assets/bluebi.jpg";
import icon from "../../assets/ico.png";
import Mid from "./section"; //FOR CARAOUSEL IMAGES 
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
function Main() {
  const navigate = useNavigate();
  const companyList=[{
    name:"About us", link:"about us"},
{name:"Contact us" , link:"contact us"},
{ name: "Service Us", link: "service-us" },
  { name: "Contact", link: "contact" },
  { name: "Company", link: "company" },]

  const legalService=[
    {name:"Cookie Policy", link:"cookies"},
    {name:"Terms of Use", link:"terms"},
    {name:"Privacy Policy",link:"privacy"},
    {name:"Sitemap", link:"map"}]
  function goto() {
    navigate("/Home");
  }
  return (
    <>
      {/* iss box k help se header k just after we can use carousel img */}
      <div className="flex flex-col w-full ">
        <header className="sticky top-0 z-10 max-w-full space-x-10 text-center rounded-md max-auto">
          <div className="py-2 font-serif font-medium text-white bg-blue-500">
            Impressed by our work you can utilize it properly by visiting our
            pages{" "}
          </div>
          <div className="relative flex max-w-full">
            <img src={icon} className="absolute top-0 z-10 flex h-14 left-32 " alt=""/>
            <ul className="flex justify-center w-full p-3 space-x-20 text-xl font-semibold text-black bg-white font-sofadiOne ">
              
              <li onClick={goto} className="hover:cursor-pointer">
                Home
              </li>
              <li>Register</li>
              <li>Contact</li>
              <li>Details</li>
            </ul>
          </div>
        </header>
        <Mid />

        <footer>
          <div className="flex w-full h-full bg-black">
          <div className="grid justify-center grid-cols-3 ml-16 mt-14">
              
            <div className="flex flex-col w-5/6 text-3xl leading-loose text-orange-600 ml-14 font-playpenSans">
               Tiffin Work
               <p className="block mb-5 text-lg text-white font-playwrite ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex similique, eaque alias quae.</p>
               
               <div className="flex flex-row h-40 gap-5">
                <FaFacebook className="bg-white " />
                <FaInstagram className="bg-white" />
                <FaTwitter className="bg-white" />
               </div>
               </div>
              <div className="flex gap-20 ">
                
                    <div className="flex text-white font-playwrite">
                <div className="text-3xl leading-loose text-orange-600 ">Company
                  {companyList?.map((list,i)=>{
                    return(
                      <Link to={list.link} key={i} className="flex flex-col mt-1 text-lg text-white font-sofadiOne">
                        {list.name}
                      </Link>
                    );
                  })}
                </div>
                </div>
                    <div className="">
                      <div className="flex flex-col text-3xl leading-loose text-orange-600 font-playwrite">
                        Policies
                        {legalService.map((data,i)=>{
                          return(
                            <Link to={data.link} className="flex flex-col mt-1 text-lg text-white font-sofadiOne">
                            {data.name}
                            </Link>
                          )
                        })}
                        </div>
                      </div>
                    </div>
            <div className="text-white">
              <div className="text-3xl text-orange-600 font-playwrite">
              Get in touch
              <p className="block mt-5 text-lg leading-loose text-white font-sofadiOne">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex similique, eaque alias quae.</p>
              
                
              <input type="email" placeholder="Email" className="p-2 text-base bg-gray-700 rounded-full font-playwrite"/>
              <button className="p-3 px-5 text-lg text-white bg-orange-500 rounded-full font-playwrite">Subscribe</button>
               </div>
              
              
            </div>
            </div>
          </div>
               
        </footer>
      </div>
    </>
  );
}
export default Main;
