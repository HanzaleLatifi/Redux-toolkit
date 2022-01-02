import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../feature/counter/CounterSlice";

function Counter() {
  const [inputValue, setInputValue] = useState("");
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment(Number(inputValue) | 0) )}>+</button>
      <p>{count.value}</p>
      <button onClick={() => dispatch(decrement(Number(inputValue) | 0)  )}>-</button>
      <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
    </div>
  );
}

export default Counter;
