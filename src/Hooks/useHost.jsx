import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useHost = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isHost , isLoading: isHostLoading } = useQuery({
        queryKey: ['isHost', user?.email],
        enabled: !loading,
        queryFn: async () => {
          const res = await axiosSecure.get(`/users/host/${user?.email}`);
      
          return res.data.host;
        }
      });
    
  return [ isHost,  isHostLoading];
};

export default useHost;