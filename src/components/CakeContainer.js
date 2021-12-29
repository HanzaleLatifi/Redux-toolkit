import React from 'react'
import {connect , useSelector , useDispatch} from "react-redux"
import { buyCake } from '../redux/cake/cakeActions'

function CakeContainer(props) {
    const numOfCakes=useSelector((state)=>state.numOfCakes)
    const dispatch=useDispatch()
    return (
        <div>
            {/* <p>number of cakes {props.num_Of_Cakes}</p>
            <button onClick={props.buyCake}>buyCake</button> */}
            <p>number of cakes {numOfCakes}</p>
            <button onClick={()=>dispatch(buyCake())}>buyCake</button>
        </div>
    )
}
export default CakeContainer
// const mapStateToProps=(state)=>{
//     return{
//         num_Of_Cakes:state.numOfCakes
//     }
// }
// const mapDispatchToProps=(dispath)=>{
//     return{
//         buyCake:()=> dispath(buyCake())  // buycake : ()=> dispath ({ type:  ,  })
//     }
// }

// export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer)
