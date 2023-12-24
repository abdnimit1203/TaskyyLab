import { useDrop } from "react-dnd";
import TodoCard from "../Cards/TodoCard";
import PropTypes from "prop-types";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const TaskList = ({tasks , Status,refetch}) => {

    const axiosPublic = useAxiosPublic()
    // console.log(tasks);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "todo",
        drop: (item) => addItemToList(item.id,item.status),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));

      const addItemToList = (id,status) =>{
        if(status === Status){
            console.log("No change");
        }else{
            axiosPublic.patch(`/api/v1/tasks?id=${id}&status=${Status}`)
            .then(res=>{
                console.log(res.data);
                toast.success(`Moved to ${Status}`)
                refetch()
            }).catch(err=>{
                toast.error(`Opp! ${err.message}`)
            })

            // console.log("dropped" , id,status, Status);
        }
      }
    return (
        <div ref={drop} className={`h-full ${isOver? "opacity-40 bg-green-400 glass rounded-b-3xl" : "opacity-100"}`}>
        { tasks.length == 0? <div>
                <img src="https://i.ibb.co/TqPHxBn/emptybox.png" alt="empty"  className="w-40 lg:w-48"/>
              </div> :
        tasks?.map((task) => <TodoCard key={task._id} task={task} refetch={refetch}/> )}
        </div>
    );
};
TaskList.propTypes = {
    tasks: PropTypes.array,
    Status: PropTypes.string,
    refetch: PropTypes.func,
  };
export default TaskList;