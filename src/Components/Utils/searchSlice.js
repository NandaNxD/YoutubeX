import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:'search',
    initialState:{
        cache:{

        },
        searchText:''
    },
    reducers:{
        addSearchResultsToCache(state,action){
            state.cache={
                ...state.cache,
                ...action.payload
            }
        },
        changeSearchText(state,action){
            console.log(action.payload)
            state.searchText=action.payload;
        }

    }  
})

export const {addSearchResultsToCache,changeSearchText}=searchSlice.actions;

export default searchSlice.reducer;