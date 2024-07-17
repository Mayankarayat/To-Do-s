import { createContext, useState } from "react";

export const Todos = createContext ();

export const TodoProvider = ({children})=>{

    const [taskName, setTaskName] = useState("");
    const [task, settask] = useState([]);

    const[updateid,setupdateid] = useState(null)

    const [update,setupdate] = useState(false)


    const  handledelete =(id)=>{

        const newtask = task.filter((item)=>{
          return id !== item.id
          })
          console.log(newtask)
          settask(newtask)
      }
    

    const handleremove = ()=>{
        settask([]);
      }

      const handleedit = (id) => {
        const updatetask = task.find((item) => {
          return id === item.id;
        });
        setupdate(true)
        setTaskName(updatetask.title);
        setupdateid(updatetask.id)
      };

      const handlecomplete = (id)=>{


        const newtask = task.map((item)=>{
          if(id === item.id){
            return {...item,completed:!item.completed}
            }
            return item
            })
            console.log(newtask)
            settask(newtask)
      }
    

    const handleupdate = () => {

        if(taskName == ""){
            alert("Please enter a task")
        }else if(!update){
            const activity={id:Date.now(), title:taskName,completed:false}
            settask([...task, activity]);
            setTaskName("");
            setupdate(false)
        }else{
            settask(task.map((item)=>{
                if(item.id === updateid){
                    return {...item, title:taskName}
                    }
                    return item
                    
            }))
            setTaskName("")
            setupdateid(null)
            setupdate(false)
        }

      };

    return(
        <Todos.Provider value={{task,settask,handledelete,handlecomplete,handleedit,handleremove,taskName,setTaskName,handleupdate,update,setupdate,updateid,setupdateid}}>
            {children}
        </Todos.Provider>
    )
    
}



