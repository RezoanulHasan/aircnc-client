
import { useQuery } from 'react-query'
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';



const useRoom = () => {
    const { user, loading } = useAuth();  
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: card = [] } = useQuery({
        queryKey: ['rooms', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/rooms?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [card, refetch]
}

export default useRoom;
