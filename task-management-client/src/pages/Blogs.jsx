import { FaBloggerB } from "react-icons/fa6";

const Blogs = () => {
  return (
    <>
      <div className="bg-[url('https://i.ibb.co/ZcWL28v/register-bg.jpg')] h-[100px] flex justify-center items-center text-white rounded-xl transition hover:scale-95 duration-150 delay-150">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          {" "}
          <FaBloggerB className="inline" />
          Blogs
        </h2>
      </div>
      <div className="my-10">
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg mb-6 hover:scale-95 hover:cursor-pointer ">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1634078111133-a1e12d6131b6?q=80&w=1230&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white  p-4 sm:p-6">
            <h3 className="mt-0.5  text-gray-900 text-2xl font-bold">
              The Art of Task Prioritization
            </h3>

            <p className="block text-xs text-gray-500 py-4">2023-01-15</p>

            <p className="mt-2 line-clamp-3 text-lg/relaxed text-gray-500">
              In the fast-paced world of project management, mastering the art
              of task prioritization is crucial. This blog delves into proven
              strategies and techniques to effectively prioritize tasks within
              your todo task management system. Learn how to identify
              high-priority tasks, allocate resources wisely, and optimize your
              workflow to achieve both short-term and long-term goals with
              efficiency.
            </p>
           
            <hr className="my-4" />
            <p>by <span className="font-bold">Jhon Doe</span></p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg mb-6 hover:scale-95 hover:cursor-pointer ">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white  p-4 sm:p-6">
            <h3 className="mt-0.5  text-gray-900 text-2xl font-bold">
            The Role of Collaboration in Task Management

            </h3>

            <p className="block text-xs text-gray-500 py-4">2023-02-20</p>

            <p className="mt-2 line-clamp-3 text-lg/relaxed text-gray-500">
            Collaboration is at the heart of successful project management. This blog explores the pivotal role of collaboration features in your todo task management website. From shared projects to real-time updates, discover how these tools foster teamwork, improve communication, and ultimately boost the success of your projects. Unleash the power of collaboration to take your task management to the next level.
            </p>
           
            <hr className="my-4" />
            <p>by <span className="font-bold">Jane Smith</span></p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg mb-6 hover:scale-95 hover:cursor-pointer ">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1608817618454-b0e9aef7a342?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white  p-4 sm:p-6">
            <h3 className="mt-0.5  text-gray-900 text-2xl font-bold">
            Tips for Creating a Productive Daily Task Routine
            </h3>

            <p className="block text-xs text-gray-500 py-4">2023-01-15</p>

            <p className="mt-2 line-clamp-3 text-lg/relaxed text-gray-500">
            Establishing a productive daily task routine is the cornerstone of achieving your long-term goals. This insightful blog provides practical tips and proven insights on how to structure your day for maximum efficiency using your todo task management platform. Explore effective time management, goal setting, and habit formation to create a daily routine that propels you towards success.
            </p>
           
            <hr className="my-4" />
            <p>by <span className="font-bold">Jhon Doe</span></p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg mb-6 hover:scale-95 hover:cursor-pointer ">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1589987607627-616cac5c2c5a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white  p-4 sm:p-6">
            <h3 className="mt-0.5  text-gray-900 text-2xl font-bold">
            Integrating Time Management Techniques with Todo Lists
            </h3>

            <p className="block text-xs text-gray-500 py-4">2023-01-15</p>

            <p className="mt-2 line-clamp-3 text-lg/relaxed text-gray-500">
            Unlock the synergy between time management techniques and todo lists. This blog explores the powerful integration of time-blocking, the Pomodoro technique, and other proven strategies with your todo task management platform. Discover how aligning these techniques can optimize your task management workflow, enhance focus, and ultimately boost overall productivity. Elevate your time management game and achieve more with less stress.
            </p>
           
            <hr className="my-4" />
            <p>by <span className="font-bold">Emily Davis</span></p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Blogs;
