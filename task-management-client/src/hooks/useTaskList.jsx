import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const useTaskList = (email) => {
    console.log(email);
  const axiosPublic = useAxiosPublic();

  const {
    data: taskLists = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["taskLists", email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/v1/tasks?useremail=${email}`);
      return res.data;
    },
  });
  return [taskLists, isLoading, refetch];
};

export default useTaskList;
