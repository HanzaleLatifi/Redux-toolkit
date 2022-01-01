import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../feature/counter/CounterSlice'
const store=configureStore({
reducer :{counterReducer}
})
export default store
