import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    movie:null
}

export const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovie:(state,action) => {
            state.movie = action.payload
        }
    }
})

export const {setMovie} = movieSlice.actions

export const selectMovie = (state) => state.movie.movie

export default movieSlice.reducer