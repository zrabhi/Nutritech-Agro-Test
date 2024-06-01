import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";
import { FC, useContext } from "react";
import { TaskProp } from "@/utils/interfaces";
import { AppContext } from "@/context/AppContext";

export const Task: FC<TaskProp> = ({ id, status, task }) => {
  const { tasks, setTasks } = useContext(AppContext)!;

  if (!tasks || !setTasks)
    throw new Error("Task must be used within a AppProvider");

  const deleteTask = () => {
    const updatedTasks = tasks?.filter(
      (taskItem: TaskProp) => taskItem.id !== id
    );
    setTasks(updatedTasks);
  };

  //TODO Put request to change task status
  const toggleStatus = () => {
    const updatedTasks = tasks.map((taskItem: TaskProp) => {
      if (taskItem.id === id) {
        return {
          ...taskItem,
          status:
            taskItem.status === "In Progress" ? "Complete" : "In Progress",
        };
      }
      return taskItem;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="flex items-center  h-[100px] w-full">
        <div className="flex w-[90%] justify-between rounded  mt-20 h-full  ">
          <div className={`flex ${status !== "In Progress" ? "line-through decoration-Gray text-Gray" : ""} text-2xl font-inter font-bold items-center ml-5`}>
            {task}
          </div>
          <div className="flex gap-4 items-center mr-2">
            <button className="text-2xl text-[#FF0000]" onClick={toggleStatus}>
              <MdOutlineDone />
            </button>
            <button className="text-2xl  text-[#FF0000]" onClick={deleteTask}>
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </div>
      <hr className="text-[#6C63FF] mt-10" />
    </div>
  );
};
