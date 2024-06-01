"use client";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import Picture from "@/utils/Image.png";
import { useContext, useState } from "react";
import { SignUp } from "@/utils/interfaces";
import { AppContext } from "@/context/AppContext";
import Link from "next/link";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";
import { log } from "console";

export default function Home() {
  const { success, error } = useContext(AppContext)!;
  if (!success || !error) throw new Error("Home screen must be used within a AppProvider");
  const [SignUpForm, setSignUpForm] = useState<SignUp>({
    email: "",
    username: "",
    password: "",
  });
 const router = useRouter()
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSignUpForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // todo: Sign Up endpoint here
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!SignUpForm.email || !SignUpForm.username || !SignUpForm.password) {
      error("All fields are required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(SignUpForm.email)) {
      error("Invalid email format.");
      return;
    }

    if (SignUpForm.password.length < 8) {
      error("Password must be at least 8 characters long.");
      return;
    }

    if (SignUpForm.password.length > 20) {
      error("Password must be at most 20 characters long.");
      return;
    }
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,20}$/;
    if (!passwordRegex.test(SignUpForm.password)) {
      error(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    fetch('http://127.0.0.1:8000/api/signup', {
      method: 'POST',
     
      body: JSON.stringify(SignUpForm)
  }).then(response => response.json())
  .then(data => {
    console.log(data)
      if (data.token) {
          // Save the token in localStorage or session
          localStorage.setItem('token', data.token);
          success("Success!");
          router.push('/dashboard')
      } else {
          error('Sign up failed:');
      }
  })
  .catch(er => console.log(er));
    
    setSignUpForm({
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header name="login" />
      <div className="flex flex-col sm:flex-row  h-full justify-center items-center sm:gap-[20rem]">
        <div className="container sm:w-1/3 w-full  items-center sm:my-24 sm:mx-36 m-4 flex flex-col justify-center px-4">
          <h1 className="sm:text-6xl text-2xl font-inter font-semibold mb-4">
            Sign Up Now
          </h1>
          <p className="mb-4">Some text here</p>
          <form onSubmit={handleSubmit}>
            <div className="px-4 py-2">
              <h1 className="text-xl font-semibold mb-2">Full name</h1>
              <input
                type="text"
                name="username"
                className="w-full rounded p-4 bg-Gray"
                placeholder="Full name"
                value={SignUpForm.username}
                onChange={handleChange}
              />
            </div>
            <div className="px-4 py-2">
              <h1 className="text-xl font-semibold mb-2">Email</h1>
              <input
                type="text"
                name="email"
                className="w-full rounded p-4 bg-Gray"
                placeholder="Enter your email"
                value={SignUpForm.email}
                onChange={handleChange}
              />
            </div>
            <div className="px-4 py-2">
              <h1 className="text-xl font-semibold mb-2">Password</h1>
              <input
                type="password"
                name="password"
                className="w-full rounded p-4 bg-Gray"
                placeholder="Enter your password"
                value={SignUpForm.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex px-4 py-4 justify-center">
              <button
                type="submit"
                className="sm:w-80 w-full rounded bg-Purple text-center py-3 font-inter font-semibold text-2xl text-[#ffff] text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <h1 className="text-sm">
              Already registered?
              <a className="text-Purple ml-1" href="/login">
                Login here
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
