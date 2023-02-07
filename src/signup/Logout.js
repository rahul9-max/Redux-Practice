import React from 'react'
import { useDispatch } from 'react-redux'
import { logout} from './Userslice'
import { useSelector } from 'react-redux'
import "./Logout.css"

const Logout = () => {
    const good=useSelector((state)=>state.user.hello)
    const dispatch=useDispatch()
    const handle=(e)=>{
        e.preventDefault()
        dispatch(logout())
    }
    
  return (
    <div>
        <h1>welcome {good.name}</h1>
        <button type="submit" className="logout__button"
         onClick={handle}>Logout</button>
    </div>
  )
}

export default Logout