"use client";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

import Picture from "@/utils/Image.png";
import { useContext, useState } from "react";
import { Login } from "@/utils/interfaces";
import { AppContext } from "@/context/AppContext";
import Link from "next/link";
import { Header } from "@/components/Header";

export default function Home() {
  const [LoginForm, setLoginForm] = useState<Login>({
    email: "",
    password: "",
  });
  const { success, error } = useContext(AppContext)!;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLoginForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // todo: Login endpoint here
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!LoginForm.email || !LoginForm.password) {
      error("All fields are required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(LoginForm.email)) {
      error("Invalid email format.");
      return;
    }
    console.log("Form submitted:", LoginForm);
    success("Success");
    // Reset Login Form to default
    setLoginForm({
      email: "",
      password: "",
    });
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header name="Sign Up" />
      <div className="flex flex-col sm:flex-row h-full  items-center sm:gap-[9rem]">
        <div className="container sm:w-1/3 w-full sm:my-24 sm:mx-36 m-4 flex flex-col justify-center px-4">
          <h1 className="sm:text-6xl text-2xl font-inter font-semibold mb-4">
            Login Now
          </h1>
          <p className="mb-4">
            Hi ,Welcome back! Sign in to access your tasks and keep your day
            organized with TO-DO-NOW.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="px-4 py-2">
              <h1 className="text-xl font-semibold mb-2">Email</h1>
              <input
                type="text"
                name="email"
                value={LoginForm.email}
                className="w-full rounded p-4 bg-Gray"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <div className="px-4 py-2">
              <h1 className="text-xl font-semibold mb-2">Password</h1>
              <input
                type="password"
                name="password"
                value={LoginForm.password}
                className="w-full rounded p-4 bg-Gray"
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>
            <div className="flex px-4 py-4 justify-center">
              <button
                type="submit"
                className="sm:w-80 w-full rounded bg-Purple text-center py-3 font-inter font-semibold text-2xl text-[#ffff] text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <h1 className="text-sm">
              Not registered yet?
              <a className="text-Purple ml-1" href="/">
                Create account here
              </a>
            </h1>
          </div>
        </div>
        <div className="sm:w-1/3  hidden sm:flex justify-start items-center">
          <Image
            src={Picture}
            className="sm:h-full sm:w-full object-cover"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
