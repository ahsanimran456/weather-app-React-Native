import { configureStore } from '@reduxjs/toolkit'
import { SetlatRed, SetlongRed,SetcityRed } from './Reducers/red.js'

export default configureStore({
  reducer: {
    Setlat: SetlatRed,
    Setlong: SetlongRed,
    Setcity:SetcityRed 
  },
})