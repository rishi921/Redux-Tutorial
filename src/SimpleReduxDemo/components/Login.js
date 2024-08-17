import { useDispatch, useSelector } from "react-redux";
import { logout, login } from "../actions";

const Login = () => {
    const logIn = useSelector(state => state.login)
    const dispatch = useDispatch()

    return <>
        <h2>Login Page</h2>
        <h2>You are Logged {logIn}</h2>
        <button className='btn btn-primary m-2 p-3' onClick={() => dispatch(login())}>Login</button>
        <button className='btn btn-primary m-2 p-3' onClick={() => dispatch(logout())}>Logout</button>
    </>
}

export default Login;