import { HeaderProp } from "@/utils/interfaces"
import Image from "next/image";
import Picture from "@/utils/Image.png";
import Link from "next/link"
import { FC } from "react"
export const Header : FC<HeaderProp> = ({name}) =>{
  const handleLogout = () => {
    // Remove the token and user from the local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  
  }
    return (<div className="flex justify-between items-center p-4 sm:m-24 m-10">
      <div className="flex  flex-row">
      <img
            src={Picture.src}
            className="w-16 h-16"
            alt="image"
            />
          <h1 className="sm:text-4xl text-2xl text-Purple font-bold font-itim ">
            TO-DO-NOW
          </h1>
      </div>
    <Link href={` ${name ==="Sign Up" ? "/" : "/login"}`}>
      <button className="sm:text-2xl sm:h-14 sm:w-36 w-28 h-8 text-[#ffff] text-white font-bold font-inter rounded-lg bg-Purple"
      onClick={()=>{
        if (name === "logout")
            handleLogout();
          }} >
        {name}
      </button>
    </Link>
  </div>
  )
}