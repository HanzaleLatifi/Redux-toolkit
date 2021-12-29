const initialState={
    numOfMilks:20
}
const milkReducer=(state=initialState , action)=>{
switch (action.type){
    case "BUY_MILK":{
        return {...state , numOfMilks : state.numOfMilks-1}
    }
    default : return state
}
}
export default milkReducer ;