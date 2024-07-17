import React, { useContext} from "react";
import Tasklist from "./Tasklist";
import { Todos } from "../Context/TodoContex";

const TaskAdd = () => {

  const {task,taskName,setTaskName,handleupdate,update,handleremove} = useContext(Todos);

  
  
  

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className=" text-3xl sm:text-5xl md:text-3xl text-stone-300 font-bold font-serif pt-3">
          To-Do's
        </h1>
        <form action="#" className="flex flex-col gap-2">
          <input
            type="text"
            className="w-[300px] sm:w-[400px] md:w-[290px] lg:w-[370px] px-2 py-2 rounded-xl md:rounded-lg text-sm sm:text-lg md:text-sm outline-none border-none font-serif"
            placeholder="Add Task"
            value={taskName}
            onChange={(e) => {
              // console.log(e.target.value)
              setTaskName(e.target.value)
            }}
          />
          {/* <button className='bg-gray-600 rounded-lg py-1 font-serif font-bold text-lg text-slate-300' onSubmit={addtask}>Add</button> */}

          {
          update? <input
            type="button"
            value="Update"
            className="bg-purple-800 rounded-xl md:rounded-lg py-1 sm:py-2 md:py-1 font-serif font-bold text-lg text-white cursor-pointer  hover:bg-purple-400 transition-all duration-[.5s] active:scale-50 "
            onClick={handleupdate}
          />:<input
            type="button"
            value="Add"
            className="bg-purple-800 rounded-xl md:rounded-lg py-1 sm:py-2 md:py-1 font-serif font-bold text-lg text-white cursor-pointer hover:bg-purple-400 transition-all duration-[.8s] active:scale-50"
            onClick={handleupdate}
          />}


          
        </form>

        <Tasklist />
          {
            task.length>=1? <button className="bg-red-600 text-white py-1 px-3 rounded-lg font-semibold font-serif" onClick={handleremove}>Remove all</button> :""
          }
      </div>
    </>
  );
};

export default TaskAdd;
