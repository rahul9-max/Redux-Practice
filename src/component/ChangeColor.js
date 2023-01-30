import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { diffColor } from '../features/theme'

const ChangeColor = () => {
    const [color,setColor]=useState("")
    const dispatch=useDispatch()

    const demo=(e)=>{
        setColor(e.target.value)
    }
  return (
    <div>
        <input type="text" onChange={demo}/>
        <button onClick={()=>dispatch(diffColor(color))}>change</button>
    </div>
  )
}

export default ChangeColor