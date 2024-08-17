import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { withdraw, deposit } from "../actions";

const Transaction = () => {
    const balance = useSelector(state => state.balance)
    const [inputAmount, setInputAmount] = useState(0);
    const dispatch = useDispatch()

    return <>
        {/* <h2>Login Page</h2> */}
        <div>
            <h2>Balance : ₹. {balance}</h2>

            <input
                type="number"
                placeholder="Enter Amount"
                onChange={(e) => setInputAmount(e.target.value)}
                style={{
                    width: '100%',
                    maxWidth: '250px',
                    padding: '10px 15px',
                    fontSize: '16px',
                    fontFamily: 'Arial, sans-serif',
                    border: '2px solid #ccc',
                    borderRadius: '8px',
                    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                    outline: 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#007bff'}
                onBlur={(e) => e.target.style.borderColor = '#ccc'}
                onInput={(e) => e.target.style.boxShadow = '0 0 8px rgba(0, 123, 255, 0.2)'}
            />


            <button className='btn btn-success m-2 p-1' onClick={() => dispatch(deposit(inputAmount))}>DEPOSIT</button>

            <button className='btn btn-danger m-2 p-1' onClick={() => dispatch(withdraw(inputAmount))}>WITHDRAW</button>
        </div>
    </>
}

export default Transaction;