import React, { useContext } from 'react'
import { UserLoginContext } from '../Context/UserLoginContext'

const User = () => {

    const currentUser = useContext(UserLoginContext)
    return (
    <span>
        {currentUser.state.username}
    </span>
  )
}

export default User