import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Login } from './Userslice'
import { useSelector } from 'react-redux'
import "./Login.css";

const Form = () => {
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")

  const dispatch=useDispatch()
  // const good=useSelector((state)=>state.user.hello)

  const nameChan=(e)=>{
    setName(e.target.value)
  }
  const passChan=(e)=>{
    setPassword(e.target.value)
  }
  const emailChan=(e)=>{
    setEmail(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(Login({
      name:name,
      password:password,
      email:email,
      loggedIn:true
     }))
  }
//  useEffect(()=>{
//   dispatch(Login({
//     name:name,
//     password:password,
//     email:email,
//     loggedIn:true
//    }))
//  },[])
  return (
      <div className="login">
      <h1>Login Here</h1>
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={name} onChange={nameChan} placeholder="enter your name"/><br/>
        <input type="password" value={password} onChange={passChan} placeholder=" password"/><br/>
        <input type="email" value={email} onChange={emailChan} placeholder=" email"/><br/>
        <button type="submit" className="submit__btn">submit</button>
      </form>
    </div>
  )
}

export default Form