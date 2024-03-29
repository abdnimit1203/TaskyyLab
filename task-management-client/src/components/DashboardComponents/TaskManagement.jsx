import { FaRegEdit } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { usePreview } from 'react-dnd-preview'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useEffect, useState } from "react";
import useTaskList from "../../hooks/useTaskList";
import TaskList from "./TaskList";
import { TouchBackend } from 'react-dnd-touch-backend';

const TaskManagement = () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const Backend = isMobile ? TouchBackend : HTML5Backend; 
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [data, , refetch] = useTaskList(user?.email)
 
  const {
    register,
    control,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const taskInfo = { ...data, useremail: user?.email, status: "todo" };

    try {
      axiosPublic.post("/api/v1/tasks", taskInfo).then((res) => {
        if (res.data?.insertedId) {
          console.log("task created and addded to database");
          toast.success("Task created successfully!");
        }
        reset();
        refetch()
      });
    } catch (err) {
      toast.error(err.message);
    }
  };
 
  const MyPreview = () => {
    const preview = usePreview()
    if (!preview.display) {
      return null
    }
    const {itemType, item, style} = preview;
    return <div className="item-list__item border-4" style={style}>{itemType}</div>
  }
  
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axiosPublic.get(`/api/v1/tasks?useremail=${user?.email}`).then((res) => {
  //     setData(res.data);
  //   });
  // }, [axiosPublic, user?.email]);
 

  return (
    <DndProvider backend={Backend}>
    <div className="p-6 lg:p-10 lg:py-16 flex flex-col">
      <div className="flex justify-between bg-[#fff] glass rounded-xl p-3 items-center mb-4">
        <h2 className="text-xl lg:text-2xl font-bold">Task Management</h2>

        <button
          className="btn text-white font-bold  bg-gradient-to-r from-purple-400 to-pink-600"
          onClick={() => document.getElementById("my_modal").showModal()}
        >
          <FaRegEdit className="text-2xl" />
          Create Task
        </button>
        <dialog id="my_modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle  absolute right-2 top-2 hover:btn-error hover:text-white ">
                ✕
              </button>
            </form>
            <h3 className=" text-xl text-center font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Create a new todo list
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 grid grid-cols-6 gap-6 text-left justify-center items-center"
            >
              <div className="col-span-6">
                <label htmlFor="Title" className="block text-sm font-medium ">
                  Title
                </label>

                <input
                  type="text"
                  id="Title"
                  name="title"
                  {...register("title", { required: true })}
                  className="mt-1 w-full border-2 rounded-md border-gray-200 focus:outline-2 px-3 bg-slate-100 focus:outline-slate-400 text-sm text-gray-700 py-3   shadow-inner"
                />
                {errors.title && (
                  <span className="text-red-400">Title is required</span>
                )}
              </div>

              <div className="col-span-6 relative">
                <label
                  htmlFor="Description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>

                <textarea
                  type="text"
                  id="Description"
                  name="description"
                  {...register("description", { required: true })}
                  className="mt-1 w-full border-2 rounded-md border-gray-200 focus:outline-2 px-3 bg-slate-100 focus:outline-slate-400 text-sm text-gray-700 py-3   shadow-inner"
                />
                {errors.description && (
                  <span className="text-red-400">Description is required</span>
                )}
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="priority"
                  className="block text-sm font-medium "
                >
                  Priority
                </label>
                <select
                  className="mt-1 w-full border-2 rounded-md border-gray-200 focus:outline-2 px-3 bg-slate-100 focus:outline-slate-400 text-sm text-gray-700 py-3 shadow-inner "
                  id="selectmethod"
                  defaultValue=""
                  name="priority"
                  {...register("priority", { required: true })}
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                {errors.priority && (
                  <span className="formError errorMssg">
                    This field is required
                  </span>
                )}
              </div>
              <div className="col-span-6">
                <label htmlFor="date" className="block text-sm font-medium ">
                  Due Date
                </label>
                <Controller
                  control={control}
                  name="dueDate"
                  render={({ field }) => (
                    <DatePicker
                      showIcon
                      placeholderText="Select date"
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                      className="ml-1 font-semiold"
                    />
                  )}
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4 mx-auto">
                <button type="submit" className="button-79">
                  Create
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-6 "
      >
        <div className="bg-[#f6fafa] rounded-l-xl p-4">
          <h3 className="pb-4 text-xl font-bold">To Do Task</h3>
         
         <TaskList tasks={data?.filter(task=> task.status === "todo") } Status={"todo"} refetch={refetch}></TaskList>
         <MyPreview />
        </div>
        <div className="  p-4 bg-sky-50">
          <h3 className="pb-4 text-xl font-bold">Ongoing Task</h3>
          <TaskList tasks={data?.filter(task=> task.status === "ongoing") } Status={"ongoing"} refetch={refetch}></TaskList>
          
        </div>
        <div className="bg-green-50 rounded-r-xl p-4">
          <h3 className="pb-4 text-xl font-bold">Completed Task</h3>
          <TaskList tasks={data?.filter(task=> task.status === "completed") } Status={"completed"} refetch={refetch}></TaskList>
        </div>
      </div>
    </div>
   
    </DndProvider>
  );
};

export default TaskManagement;
