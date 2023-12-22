import { useDrop } from "react-dnd";
import TodoCard from "../Cards/TodoCard";
import PropTypes from "prop-types";

const TaskList = ({tasks , Status,refetch}) => {
    console.log(tasks);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "todo",
        drop: (item) => addItemToList(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));

      const addItemToList = (id) =>{
        console.log("dropped" , id,Status);
      }
    return (
        <div ref={drop} className={`h-full ${isOver? "opacity-40 bg-green-100 rounded-b-3xl" : "opacity-100"}`}>
        {tasks?.map((task) => <TodoCard key={task._id} task={task} refetch={refetch}/> )}
        </div>
    );
};
TaskList.propTypes = {
    tasks: PropTypes.array,
    Status: PropTypes.string,
    refetch: PropTypes.func,
  };
export default TaskList;