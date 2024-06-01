"use client";
import { Header } from "@/components/Header";
import { AppContext } from "@/context/AppContext";
import { SearchInput } from "@patternfly/react-core";
import { useContext, useState } from "react";
import { MdOutlineModeNight } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import picture from "@/utils/Detective.png"
import Image from "next/image";


import { CiSearch } from "react-icons/ci";

export default function Home() {
  const { User } = useContext(AppContext)!;
  if (!User) throw new Error("Dashboeard  must be used within a AppProvider");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle search logic here
    console.log(`Searching for ${searchTerm}...`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header name="logout" />
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="font-inter text-bold text-3xl">
          {" "}
          Welcome {User.fullName}, Be creative today!{" "}
        </h1>
        <div className="flex gap-2 w-1/3 h-1/3">
          <form
            className=" flex items-center gap-2 h-full w-full"
            onSubmit={handleSubmit}
          >
            <input
              placeholder="Search for task..."
              className="p-4 border-2 bg-none border-Purple rounded h-[50px] w-full"
              type="text"
              value={searchTerm}
              onChange={handleChange}
            ></input>
            <button type="submit" className=" text-2xl text-Purple">
              <CiSearch />
            </button>
          </form>
          <div className="mt-2 w-[36px] h-[36px] bg-Purple rounded flex items-center justify-center text-[#ffff]">
            <MdOutlineModeNight />
          </div>
          <button className="fixed bottom-[10%] flex items-center justify-center text-4xl text-[#ffff]  bg-Purple rounded-full w-[42px] h-[42px] sm:right-[33%]">
            <IoIosAdd />
          </button>
        </div>
        <div className="sm:w-1/4 mt-10  flex flex-col justify-start items-center">
          <Image
            src={picture}
            className="h-full sm:w-full object-cover"
            alt="image"
          />
        <h1 className="font-inter text-semibold ">Empty...</h1>
        </div>
      </div>
      <div></div>
    </div>
  );
}
