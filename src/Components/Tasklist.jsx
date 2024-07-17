import React, { useContext, useState } from "react";
import { MdEdit } from "react-icons/md";
import { FcEditImage } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";
import { CiSquareCheck } from "react-icons/ci";
import { Todos } from "../Context/TodoContex";
import {Checkbox} from "../Icon Components/Checkbox"
import { GreenCheckbox } from "../Icon Components/GreenCheckbox";
import { Edit } from "../Icon Components/Edit";
import { Delete } from "../Icon Components/Delete";

const Tasklist = () => {
  const { task, handleedit,handlecomplete,handledelete  } =
    useContext(Todos);


  


  
  




  return (
    <div>
      {task.map((item) => (
        <div className="my-2" key={item.id}>
          <div className = {` flex flex-col justify-center items-center gap-2 ${item.completed?"line-through":""}`}>
        <div className="flex gap-1 justify-center items-center">
          {/* <CiSquareCheck className="cursor-pointer size-9 rounded-md  bg-white" onClick = {()=>{handlecomplete(item.id)}}/> */}
          <ul className="flex justify-between items-center bg-white w-[300px] sm:w-[400px] md:w-[290px] lg:w-[370px] rounded-xl px-1 ">
            <div className="flex justify-start items-center gap-1 ">
              {
                item.completed?
                <GreenCheckbox className="cursor-pointer size-5" onClick = {()=>{handlecomplete(item.id)}}/>:
                <Checkbox className="cursor-pointer size-5" onClick = {()=>{handlecomplete(item.id)}}/>
              }
            <li className="flex gap-2 items-center justify-between w-[200px] sm:w-[190px] lg:w-[250px] break-all text-black py-2 sm:py-[10px] md:py-[6px] px-[5px] rounded-lg text-sm sm:text-[18px] md:text-[16px] font-serif">
              {item.title}
              </li>

            </div>
            <div className="flex items-center gap-[2px]">
          <Edit className=" cursor-pointer size-7 rounded-md"
            onClick={() => handleedit(item.id)}/>
            <Delete className="cursor-pointer size-9 rounded-md " onClick={()=> handledelete(item.id)}/>
          {/* <MdDeleteOutline className="cursor-pointer size-9 rounded-md bg-white" onClick={()=> handledelete(item.id)} /> */}

            </div>
          </ul>
          {/* <MdEdit
            className="bg-white cursor-pointer size-9 rounded-md"
            onClick={() => handleedit(item.id)}
          /> */}
        </div>
      </div>
        </div>

        
      ))}

      
    </div>
  );
};

export default Tasklist;
