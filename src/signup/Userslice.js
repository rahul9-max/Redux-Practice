import {createSlice} from "@reduxjs/toolkit"

// export const userSlice=createSlice({
//   name:"hello",
//   initialState:{
//     hello:null
//   },
//   reducers:{
//     form:(state,action)=>{
//       state.hello=action.payload;
//     }
//   }
// })
// const initial={name:"",password:"" ,email:""}
export const Userslice=createSlice({
  name:"user",
  initialState:{
    hello:"",
  },
  reducers:{
    Login:(state,action)=>{
      state.hello=action.payload
    },
    logout:(state)=>{
      state.hello=""
    }
  }
})
// export const{form,logout}=Userslice.action;
export const {Login,logout}=Userslice.actions;
// export const selectHello=(state)=>state.user.hello;
// export const selectHello=(state)=>state.user.hello;
export default Userslice.reducer;
