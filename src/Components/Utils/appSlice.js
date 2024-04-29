import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true,
        videoArray:[],
    },
    reducers:{
        toggleMenu(state,action){
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu(state){
            state.isMenuOpen=false;
        },
        openMenu(state){
            state.isMenuOpen=true;
        },
        storeVideos(state,action){
            state.videoArray=action.payload;
        }
    }
})

export const {toggleMenu,closeMenu,openMenu,storeVideos}=appSlice.actions;

export default appSlice.reducer;