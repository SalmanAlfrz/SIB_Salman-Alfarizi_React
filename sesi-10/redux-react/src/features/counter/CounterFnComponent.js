import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByTen } from "./counterSlice";
import { useState } from "react";

const CounterFnComponent = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    console.log(addValue);
    return (
        <div className="demo">
            <h1>Counter Function Component</h1>
            <h1 id="counter">{count}</h1>
            <button id="decrement" onClick={() => dispatch(decrement())}>-</button> {' '}
            <button id="increment" onClick={() => dispatch(increment())}>+</button> {' '}
            <input type="number" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} /> {' '}
            <button id="incrementByTen" onClick={() => dispatch(incrementByTen({amount:addValue}))}>Add Amount</button>            
        </div>
    )
}

export default CounterFnComponent;