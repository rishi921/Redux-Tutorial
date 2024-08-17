import { useDispatch, useSelector } from "react-redux";
import { logout, login } from "../actions";

const Login = () => {
    const dispatch = useDispatch()
    // const logIn = useSelector(state => state.login)
    const logIn = useSelector(state => state.login.logIn)
    console.log(logIn)

    return <>
        <div>
            <h2>Login Page</h2>
            {/* <h2>You are Logged {logIn}</h2> */}
            <h2>You are Logged {logIn ? 'In' : 'Out'}</h2>
            <button className='btn btn-primary m-2 p-1' onClick={() => dispatch(login())}>Log In</button>
            <button className='btn btn-secondary m-2 p-1' onClick={() => dispatch(logout())}>Log Out</button>
        </div>
    </>
}

export default Login;


// import { useDispatch, useSelector } from "react-redux";
// import { logout, login } from "../actions";

// const Login = () => {
//     const dispatch = useDispatch()
//     const logIn = useSelector(state => state.login.logIn)
//     console.log(logIn);

//     return <>
//         <div>
//             <h1>Login Page</h1>
//             <h2>You are Logged {logIn}</h2>
//             <button className='btn btn-primary m-2 p-1' onClick={() => dispatch(login())}>Login</button>
//             <button className='btn btn-secondary m-2 p-1' onClick={() => dispatch(logout())}>Logout</button>
//         </div>
//     </>
// }

// export default Login;