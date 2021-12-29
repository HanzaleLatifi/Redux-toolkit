import React from 'react'
import {connect} from "react-redux"
import { buyCake } from '../redux/cake/cakeActions'
function CakeContainer(props) {
    return (
        <div>
            <p>number of cakes {props.num_Of_Cakes}</p>
            <button onClick={props.buyCake}>buyCake</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        num_Of_Cakes:state.numOfCakes
    }
}
const mapDispatchToProps=(dispath)=>{
    return{
        buyCake:()=> dispath(buyCake())  // buycake : ()=> dispath ({ type:  ,  })
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer)
