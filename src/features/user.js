import {createSlice} from "@reduxjs/toolkit"

const initialVal={name:"",age:0,email:""}
export const userSlice=createSlice({
    name:"user",
    initialState:{value:initialVal},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload
        },
        logout:(state)=>{
            state.value=initialVal
        }
    }
})
// export const{login,logout}=userSlice.actions;
export const {login,logout}=userSlice.actions;
export default userSlice.reducer;