import { useDispatch, useSelector } from "react-redux";
import { withdraw, deposit } from "../actions";

const Transaction = () => {
    const balance = useSelector(state => state.balance)
    const dispatch = useDispatch()

    return <>
        {/* <h2>Login Page</h2> */}
        <h2>Balance : ₹. {balance}</h2>

        <input type="number" value='value' placeholder="Enter Amount"/>

        <button className='btn btn-primary m-2 p-3' onClick={() => dispatch(withdraw())}>WITHDRAW</button>

        <button className='btn btn-primary m-2 p-3' onClick={() => dispatch(deposit())}>DEPOSIT</button>
    </>
}

export default Transaction;