import { useQuery} from 'react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const usePayment = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/bookings?email=${user?.email}`);
      console.log('res from axios', res);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default usePayment;
