"use client";
import { Header } from "@/components/Header";
import { AppContext } from "@/context/AppContext";
import { SearchInput } from "@patternfly/react-core";
import { useContext, useState } from "react";
import { MdOutlineModeNight } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import picture from "@/utils/Detective.png";
import Image from "next/image";
import Modal from "react-modal";

import { CiSearch } from "react-icons/ci";
import { Task } from "@/components/Task";
import { TaskProp } from "@/utils/interfaces";

export default function Home() {
  const { User, mode, tasks, setTasks } = useContext(AppContext)!;
  if (!User) throw new Error("Dashboeard  must be used within a AppProvider");
  const [searchTerm, setSearchTerm] = useState("");
  const [task, settask] = useState<string>("");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "30%", // Adjust width as per your requirement
      height: "30%",
      borderRadius: '20px',
      background: '#ffffff',
      border: 'none'
    },
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle search logic here
    console.log(`Searching for ${searchTerm}...`);
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  //TODO: Post request to create new task
    const addTask = () =>
  {

    const newTask : TaskProp = {
      id: '', // You can use a unique id generation logic here
      task: task,
      status: 'In Progress',
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }
  return (
    <div className="min-h-screen  flex flex-col">
      <Header name="logout" />
      <div className="flex flex-col items-center sm:justify-center w-full h-full">
        <h1 className="font-inter  mb-6 text-bold sm:text-3xl text-sm">
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
          <button
            onClick={openModal}
            className="fixed bottom-[10%] flex items-center justify-center text-4xl text-[#ffff]  bg-Purple rounded-full w-[42px] h-[42px] sm:right-[33%]"
          >
            <IoIosAdd />
          </button>
        </div>
        <div className="w-1/3 h-1/3">
          {tasks.length ? tasks.map((task: TaskProp, index: number) => (
            <Task
              key={index}
              id={task.id}
              status={task.status}
              task={task.task}
            />
          )) :
            <div className="mt-10  flex flex-col  justify-center items-center">
              <Image
                src={picture}
                className="h-full w-full object-cover"
                alt="image"
              />
              <h1 className="font-inter text-semibold ">Empty...</h1>
            </div>
          }
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="flex mb-10 text-2xl font-inter justify-center">
            New Task
          </h2>
          <input
            type="text"
            name="task"
            className="w-[90%] rounded-xl border-2 bg-none border-[#6C63FF]  ml-10 p-4 bg-[#fff]"
            placeholder="Craete Your Task"
            value={task}
            onChange={(e) => settask(e.target.value)}
          />
          <div className="mt-[4rem] flex items-end justify-between ml-6 mr-6">
            <button
              className="w-[92px] rounded-xl font-inter text-[#6C63FF] h-[42px] bg-[#fff] border-2 border-[#6C63FF]"
              onClick={closeModal}
            >
              close
            </button>
            <button  onClick={addTask} className="w-[92px] rounded-xl font-inter text-[#ffff] h-[42px] bg-[#6C63FF] border-2 border-[#ffff]">
              Apply
            </button>
          </div>

        </Modal>
      </div>
      <div></div>
    </div>
  );
}
