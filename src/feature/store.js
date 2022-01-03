import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/CounterSlice'
import todosReducer from './todos/TodoSlice'
const store=configureStore({
reducer :{
    counter:counterReducer ,
    todos:todosReducer 
}
})
export default store
