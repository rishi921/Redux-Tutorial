import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../actions";

export default function Counter() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return <>
        <div>
            <h1>Counter : {counter}</h1>

            <button className="btn btn-success m-2 p-1" onClick={() => dispatch(increment())}>Increment (+)</button>

            <button className="btn btn-danger m-2 p-1" onClick={() => dispatch(decrement())}>Decrement (-)</button>
        </div>
    </>
}