import React, { useState } from "react";
import food from "../../assets/foodss.jpg";
import calling from "../../assets/call.jpg";
import delivery from "../../assets/delivery.png";
import health from "../../assets/healthy.png";
import tiffin from "../../assets/foods.webp";
import lunch from "../../assets/tiffinss.jpg";
import noodle from "../../assets/noodles.webp";
import background from "../../assets/homeMealPlanBG.png";
import mobile from "../../assets/mobile2.png";
import daal from "../../assets/daaal.avif";
import Card from "./card.jsx";
import Mealdetails from "./meal.jsx";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { BiMoon, BiSun } from "react-icons/bi";

function Mid() {
  const slides = [lunch, tiffin, food];
  const [currentIndex, setStatus] = useState(0);

  const nextSlide = () => {
    setStatus((preSlide) => (preSlide + 1) % slides.length);
  };
  const preSlide = () => {
    setStatus((preSlide) => (preSlide - 1 + slides.length) % slides.length);
  };

const mealDetails=[{
  icon: daal,
  title:" Light Meal",
  text:"1 Vegetable, 1 Dal, 3 Chapati, 1 Salad/Soup"
},
{
  icon: daal,
  title:"Healthy Meal",
  text:"1 Vegetable, 1 Dal, 3 Chapati, 1 Salad/Soup"
},
{
  icon: daal,
  title:" Fast Foood",
  text:"1 Vegetable, 1 Dal, 3 Chapati, 1 Salad/Soup"
}]
  
  const cardDetails=[
    {
      icon: calling,
      title: "Easy Access",
      text:"But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
    },
    {
      icon: health,
      title: "Healthy Food",
      text:"But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
    },
    {
      icon: delivery,
      title:"Fast Delivery",
      text:"But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
    }
  ]

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden ">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        >
          {" "}
        </div>

        <button
          onClick={preSlide}
          className="absolute p-5 m-5 translate-x-0 bg-black rounded-full right-20 top-20 translate-y-[50%]"
        >
          <BsChevronCompactLeft className="text-white" size={30} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute p-5 m-5 translate-x-0 bg-black rounded-full top-20 translate-y-[50%]"
        >
          <BsChevronCompactRight className="text-white" size={30} />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-7">
        <div className="text-4xl font-sofadiOne">
          Today{" "}
          <span className="text-red-500 font-playpenSans">special offers </span>
          Are
        </div>
        <div>
          <p className="mt-5 font-sans text-xl px-52 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            enim unde obcaecati deleniti? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quos, dolores <span className="text-red-500">    officiis, consequuntur
            dolore corporis eum aperiam earum numquam quibusdam doloremque ab
            delectus aspernatur deleniti,</span> sequi dignissimos quam vel quisquam
            nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illum veniam?  corrupti nihil.
          </p>
        </div>
        <button className="px-8 py-3 mt-5 bg-blue-300 rounded-full font-playpenSans "> Download App</button>
<div className="flex flex-col items-center w-full h-screen mt-5 text-white bg-black rounded-md">
    <div className="flex flex-col items-center justify-center mt-8 text-white">
       <div className="font-serif text-4xl "> How <span  className="text-red-600"> IT </span> works  </div>
       <p className="p-10 py-10 mb-10 px-60 font-playpenSans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nulla, est nisi perferendis libero quos fugiat dicta unde animi iure debitis corrupti maiores reprehenderit. Mollitia porro expedita quasi laboriosam praesentium.</p>

       <div className="grid grid-cols-3 gap-10 px-10">
        
        {cardDetails?.map((data,i)=>(
          
          <Card 
          icon={data?.icon}
          key={i}
          title={data?.title}
          text={data?.text}
          />
        ))}
       </div>
        
    </div>

    </div>
    <div className="relative w-full"  >
        <img src={background} className="w-full h-auto" style={{display:'block'}} alt=""></img>
      <div className="absolute inset-0 flex flex-col items-center mt-10 rounded-md ">
        <h2 className="mb-10 text-4xl font-bold ">Meal Plans</h2>
        <div className="px-32 font-serif text-xl"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis in nisi consectetur, ipsam aperiam facere, repudiandae suscipit eius atque dicta ut minus porro? Esse fuga, ullam deserunt quo, ducimus aliquam maiores.t quo, ducimus aliquam maiores.t quo, ducimus aliquam maiores.t quo, ducimus aliquam maiores.

        </div>
        <div className="flex gap-3 mt-3 mb-10">

        <button className="flex p-3 m-3 font-bold bg-orange-400 rounded-lg"> Dinner   <BiMoon /> </button>
        <button className="flex p-3 m-3 font-bold bg-orange-400 rounded-lg"> Lunch   <BiSun /> </button>
        </div>
        <div className="grid grid-cols-3 gap-20">
          {mealDetails?.map((data,i)=>(
            <Mealdetails 
            icon={data?.icon}
            title={data?.title}
            text={data?.text}
            />
          ))}
        </div>
          <div className="flex flex-row p-3 font-bold bg-orange-400 rounded-md mb-14">
        <button>View More</button>
        </div>
           
          <div className="w-full relative h-full py-10 font-medium pl-7 bg-[#fff4f4]">
            
          <div className="flex flex-col w-1/3 p-2 leading-loose " >
              
            <div  className="flex gap-1 text-3xl text-left whitespace-nowrap"> It's <span className="mx-1 text-red-600"> NowMore </span> Easy to <span className="mx-1 text-orange-600"> Order </span> by Our <span className="mx-1 text-red-600"> Mobile App </span>
            </div>
            <p className="mt-4 text-xl ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum inventore, modi debitis vero ipsum eos? Harum dolor officia atque, porro in maxime eos minus qui esse! Animi tenetur quibusdam vitae.
              </p>
                
           <div className="flex items-center justify-center w-full ">
            <div className="absolute top-4 left-1/2">
              <img src={noodle} className="w-52 h-52"  alt=""/>
            </div>
            <div className="absolute left-2/3 top-[-5rem]">
              <img src={mobile} alt=""/>
            </div>
            
            </div>
                </div>
          </div>
          </div>
        
        </div>

</div>



      
    </>
  );
}
export default Mid;
