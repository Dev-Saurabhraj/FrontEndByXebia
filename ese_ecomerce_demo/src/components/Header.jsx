import { HomeIcon, Search } from "lucide-react";

export default function Header(){
    return (<>
    <div className="h-20 flex items-center  bg-gray-100">
        <HomeIcon className="h-20 ml-10 text-blue-600 hover:text-cyan-400"/>
        <h2 className="font-bold font-sans text-blue-600 h-20 ml-4 flex items-center text-2xl  hover:text-cyan-400">
            FlipKart
        </h2>
        
        <div className=" flex items-center bg-gray-300 rounded-3xl h-10  ml-20">
            <Search className=" text-blue-500  mx-5"/>
            <input placeholder="Search Bar" className=" h-10 w-70 rounded-3xl  outline-none focus:ring-0"/>
        </div>

        <div className="flex m-10 ">
            <h1 className="mr-10 hover:text-cyan-400 font-sans font-bold">
                Home
            </h1>
            <h1 className="mr-10  hover:text-cyan-400 font-sans font-bold">
                contact 
            </h1>
            <h1 className="mr-10  hover:text-cyan-400 font-sans font-bold">
                blog
            </h1>
        </div>
        <div className="flex justify-center">
<button
    className="w-25 h-10 flex items-center justify-center border p-3 rounded-3xl border-blue-600 bg-white text-blue-500 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
  >
    Login
  </button>
   <button
    className="w-25 h-10 flex items-center justify-center border ml-10 p-3 rounded-3xl border-blue-600 bg-white text-blue-500 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
  >
    Sign Up
  </button>
</div>
        
    </div>
    
    </>);
}