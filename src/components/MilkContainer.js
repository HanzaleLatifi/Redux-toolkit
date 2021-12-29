import React from 'react'
import { useSelector , useDispatch} from "react-redux"
import { buyMilk } from '../redux/milk/milkAction';

function MilkContainer() {
    const numOfMilks=useSelector((state=>state.milk.numOfMilks))
    const dispatch=useDispatch();
    return (
        <div>
            <p>number of milks {numOfMilks}</p>
            <button onClick={()=>dispatch(buyMilk())} >buymilk</button>
        </div>
    )
}

export default MilkContainer
