
import "./App.css";
import TaskAdd from "./Components/TaskAdd";
import { TodoProvider } from "./Context/TodoContex";

function App() {

  return (
    <TodoProvider>
    <div className="h-[100vh] w-[100%] flex justify-start md:justify-center items-start md:items-center flex-col gap-4 md:flex-row md:gap-0">
      <div className="w-[100%] md:w-[60%] h-auto md:h-full">
        <img src="https://img.freepik.com/premium-vector/list-illustration-man-holds-pencil-notes-completed-tasks-time_173706-136.jpg" className="w-full object-contain md:object-cover h-auto md:h-full object-center"/>
      </div>
      <div className="w-[100%] md:w-[40%] ">
        <TaskAdd/>
      </div>
    </div>
    </TodoProvider>
  );
}

export default App;
