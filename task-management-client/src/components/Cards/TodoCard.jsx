import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { BiEditAlt } from "react-icons/bi";

import toast from "react-hot-toast";
const TodoCard = ({ task, refetch }) => {
  const { _id, title, description, priority, status,dueDate } = task;
  const date = new Date(dueDate).toDateString()
  const axiosPublic = useAxiosPublic();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todo",
    item: { id: _id, status: status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  // console.log(isDragging,_id);

  // handle EDit
  const handleEdit = (id) =>{
      
    console.log("edited :" , id,dueDate );
  }
  // handle remove

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to get the task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove task",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/api/v1/tasks/${id}`)
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              title: "Removed!",
              text: ` Your task has been removed `,
              icon: "success",
            });
            refetch();
          })
          .then((err) => {
            toast.error(`${err.message}`);
          });
      }
    });
  };


  

  return (
    <article
      ref={drag}
      className={`hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]  my-2 ${
        isDragging ? "opacity-50 from-red-600" : "opacity-100"
      }`}
    >
      <div className="rounded-[10px] bg-white p-4  sm:p-6   ">
        <div className="flex justify-between border-b-2 pb-2 ">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">{title}</h3>
          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(_id)}
              className="btn btn-circle btn-warning btn-sm"
            >
              <BiEditAlt className="inline text-xl " />
            </button>
            <button
              onClick={() => handleRemove(_id)}
              className="btn btn-circle btn-error btn-sm"
            >
              <ImCross className="inline text-xl text-white" />
            </button>
          </div>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-1 ">
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            {priority}
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-1 ">
          <span className="whitespace-nowrap rounded-full border-b-2 border-purple-100 px-2.5 py-0.5 ">
          <span className="text-rose-600">Due: </span> {date}
          </span>
        </div>
      </div>
    </article>
  );
};
TodoCard.propTypes = {
  task: PropTypes.object,
  refetch: PropTypes.func,
};
export default TodoCard;
