import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
const TodoCard = ({ task }) => {
  const { _id, title, description, priority, status } = task;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todo",
    item: {id: _id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
// console.log(isDragging,_id);
  return (
    <article ref={drag} className={`hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]  my-2 ${isDragging? "opacity-50 from-red-600" :"opacity-100"}`}>
      <div className="rounded-[10px] bg-white p-4  sm:p-6   ">
        <div className="flex justify-between border-b-2 pb-2 ">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">{title}</h3>

          <button className="btn btn-circle btn-error btn-sm">
            <ImCross className="inline text-xl text-white" />
          </button>
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
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 ">
            {status}
          </span>
        </div>
      </div>
    </article>
  );
};
TodoCard.propTypes = {
  task: PropTypes.object,
};
export default TodoCard;
