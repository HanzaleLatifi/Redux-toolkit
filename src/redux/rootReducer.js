import {combineReducers} from "redux"
import cakeReducer from "./cake/cakeReducer"
import milkReducer from "./milk/milkReducer"

const reducer=combineReducers({
   cake: cakeReducer ,
   milk : milkReducer
})

export default reducer