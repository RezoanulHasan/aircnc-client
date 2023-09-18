import avatarImg from '../../../assets/images/placeholder.jpg'
import { useContext } from 'react'
import { AuthContext } from '../../../providers/AuthProvider'

const Avatar = () => {
  const { user } = useContext (AuthContext)

  return (
    <img
      className='rounded-full w-10 h-10'
      alt='profile'
      title={user?.displayName}
      src={user && user?.photoURL ? user?.photoURL : avatarImg}
    />
  )
}

export default Avatar;
