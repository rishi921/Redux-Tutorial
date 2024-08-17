import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../actions";

export default function Counter() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return <>

        <h1>Counter : {counter}</h1>
        <button className="btn btn-primary m-2 p-3" onClick={() => dispatch(increment())}>Increment</button>

        <button className="btn btn-secondary m-2 p-3" onClick={() => dispatch(decrement())}>Decrement</button>

    </>
}