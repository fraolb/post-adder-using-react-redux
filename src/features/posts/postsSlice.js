import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:1, title:"first post!" , content:"hello"},
    {id:2, title:"second post!", content:"ufff"}
]

export const postSlice= createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded(state, action){
            state.push(action.payload)
        }
    }
})

export const { postAdded } = postSlice.actions
export default postSlice.reducer