import { useDrop } from "react-dnd";
import TodoCard from "../Cards/TodoCard";
import PropTypes from "prop-types";

const TaskList = ({tasks , Status}) => {
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
        <div ref={drop}>
        {tasks?.map((task) => <TodoCard key={task._id} task={task}/> )}
        </div>
    );
};
TaskList.propTypes = {
    tasks: PropTypes.array,
    Status: PropTypes.string,
  };
export default TaskList;