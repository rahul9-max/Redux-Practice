import { createSlice } from "@reduxjs/toolkit";

export const beauty=createSlice({ 
     name:"theme",
     initialState:{value:""},
     reducers:{
        diffColor:(state,action)=>{
        state.value=action.payload;
        },
     }
})
export const {diffColor}=beauty.actions;
export default beauty.reducer