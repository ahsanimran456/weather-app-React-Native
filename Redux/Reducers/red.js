import { createSlice } from '@reduxjs/toolkit'


export const lat = createSlice({
    name:'lat',
    initialState:'',
    reducers:{
        Setlat: (state, action) => {
            return state = action.payload
        },
    },
})
export const long = createSlice({
    name:'long',
    initialState:'',
    reducers:{
        Setlong: (state, action) => {
            return state = action.payload
        },
    },
})
export const city = createSlice({
    name:'city',
    initialState:"Karachi",
    reducers:{
        Setcity: (state, action) => {
            return state = action.payload
        },
    },
})

const SetlatRed = lat.reducer 
const SetlongRed = long.reducer 
const SetcityRed = city.reducer 


export const { Setlat } = lat.actions
export const { Setlong } = long.actions
export const { Setcity } = city.actions


export { SetlatRed,SetlongRed,SetcityRed}