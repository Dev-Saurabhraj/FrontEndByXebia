import { useState } from "react";
import {
  Home,
  ShoppingBag,
  ShoppingCart,
  User,
  Menu,
  X
} from "lucide-react";

export default function SideBar({categoryProps}){


return (<>

<div className="bg-amber-600 w-50  text-2xl">

    <div className="flex h-screen bg-gray-100">
      {
        open && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            
          />
        )
      }

      
      <div
        className={`
          fixed md:static top-0 left-0 z-50
          h-full w-64
          bg-white shadow-xl
          
        `}
      >

        <div className="p-4 space-y-3">

          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-100">

            <Home className="w-5 h-5" />

            <span>Home</span>

          </button>

          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-100">

            <ShoppingBag className="w-5 h-5" />

            <span>Products</span>

          </button>

          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-100">

            <ShoppingCart className="w-5 h-5" />

            <span>Cart</span>

          </button>

          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-100">

            <User className="w-5 h-5" />

            <span>Profile</span>

          </button>

        </div>

      </div>

    </div>

 
</div>

</>)
}