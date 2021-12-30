import React, { useState } from 'react'
import {  useSelector , useDispatch} from "react-redux"
import { buyCake } from '../redux/cake/cakeActions'
function CakeWithPayload() {
    const [number , setNumber]=useState(0);
    const numOfCakes=useSelector((state)=>state.cake.numOfCakes)
    const dispatch=useDispatch()
    return (
        <div>
            {/* <p>number of cakes {props.num_Of_Cakes}</p>
            <button onClick={props.buyCake}>buyCake</button> */}
            <p>number of cakes {numOfCakes}</p>
            <input value={number} onChange={e=>setNumber(e.target.value)}/> 
            <button onClick={()=>dispatch(buyCake(number))}>buyCake {number}</button>
        </div>
    )
}

export default CakeWithPayload
