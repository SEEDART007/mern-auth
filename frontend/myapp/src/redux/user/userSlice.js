import { createSlice } from "@reduxjs/toolkit";

const initialState={
   currentUser:null,
   loading:false,
   error:false
}


const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading=true;
        },
        signInSuccess:(state,action)=>{
            state.currentUser=action.payload,
            state.error=false,
            state.loading=false
        },
        signInFailure:(state,action)=>{
          state.loading=false,
          state.error=action.payload

        }
    }
})


export const {signInFailure,signInStart,signInSuccess}=userSlice.actions


export default userSlice.reducer