import React from "react";

function Home() {
  return (
    <div className="">
    
    {/* <form className="max-w-xl mx-auto mt-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Course ID
            </label>  
            <div className="mt-2.5">
              <input
                type="text" 
                name="courseID"
                
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div> 
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Credits   
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="credits"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Course Title
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="title"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="term" className="block text-sm font-semibold leading-6 text-gray-900">
                Term
              </label>
              <div className="mt-2.5">
                <select
                  id="term"
                  name="term"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="Spring">Spring</option>
                  <option value="Fall">Fall</option>
                  <option value="Summer">Summer</option>
                </select>
              </div>
            </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                name="description"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md tracking-widest bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit Course
          </button>
        </div>
        </form> */}
    <div className="max-w-xl mx-auto mt-5 text-center rounded-md bg-slate-100">
            
        <h2 className="items-center justify-center mx-auto mt-10 text-4xl font-bold text-center font-sofadiOne"> Register here for Arena </h2>
            
        <form className="grid max-w-xl mx-auto mt-12 s:grid-col-1">
            <div className="grid grid-cols-2 gap-6">
                
            <div className="flex items-center gap-3 mb-2 space-y-2 ">
                <label className="w-24 text-sm font-medium">Name* </label>
                 <input type="text" placeholder="enter name" className="block px-3 py-3 leading-3 bg-blue-200 rounded-md ring-inset ring-2 hover:ring-red-600 ring-green-900 placeholder-slate-700"/></div>
          
            <div className="flex items-center gap-3 mb-2 space-y-2">
                <label className="w-24 text-sm font-medium">Class*</label>
                <input type="text" placeholder="enter class" className="block px-3 py-3 leading-3 bg-blue-200 rounded-md ring-inset ring-2 ring-green-900 hover:ring-red-600"/>
            </div> 
            <div className="flex items-center gap-3 space-y-2">
                <label className="w-24 text-sm font-medium gap-x-3 gap-y-3">Course*</label>
                <input type=" text "placeholder="enter course" className="px-3 py-3 leading-3 bg-blue-200 rounded-md ring-2 ring-inset ring-green-900 hover:ring-red-600"/>
            </div>
            <div className="flex items-center gap-3 space-y-2">
                <label  className="w-24 text-sm font-medium gap-x-3 gap-y-3">Address* </label>
                <input placeholder="enter address" type="text" className="px-3 py-3 leading-3 bg-blue-200 rounded-md ring-2 ring-inset ring-green-900 hover:ring-red-600"/>
            </div>
            <div className="flex items-center gap-3 space-y-2">
                <label className="w-16 text-sm font-medium gap-x-3 gap-y-3">Term</label>
                <select className="flex-1 w-full px-3 py-3 leading-3 bg-blue-200 rounded-md ring-2 ring-inset ring-green-900 hover:ring-red-600"><option value="2018">2018</option>
                <option value="2018">2019</option>
                <option value="2018">2020</option></select>
            </div>
            <div className="flex items-center gap-3 space-y-2">
                <label className="w-16 text-sm font-medium gap-x-3 gap-y-3"> Gender</label>
                <select className="flex-1 w-full px-3 py-3 leading-3 bg-blue-200 rounded-md ring-2 ring-inset ring-green-900 hover:ring-red-600"><option value="male"> Male </option>
                <option value="female"> Female </option>
                <option value="transgender"> Transgender </option>
                <option value="bi-se"> Bi-se </option></select>
            </div>
            <div className="flex flex-row items-center col-span-2 gap-3 space-y-2 ">
                <label className="w-16 text-sm font-medium ">Course Description*</label>
                <textarea rows="1" placeholder="enter the details" className="w-full px-3 py-3 bg-blue-200 rounded-md ring-2 ring-inset ring-green-900 hover:ring-red-600"></textarea>
            </div>
            <div className="flex flex-row items-center col-span-2 gap-3 space-y-2">
                <label className="w-20 text-sm font-medium ">Email*</label>
                <input type="text" placeholder="enter email" className="w-full px-3 py-3 leading-3 bg-blue-200 rounded-md ring-2 ring-inset ring-green-900 hover:ring-red-600"/>
            </div>
            </div>
        </form>
            <div>
                <button className="px-5 py-2 mt-10 text-sm font-medium rounded-md bg-blue-50 ring-2 ring-inset hover:bg-green-300 hover:ring-blue-900"> Login Now</button>
                </div>
            </div>
    </div>

  );
}
export default Home;
