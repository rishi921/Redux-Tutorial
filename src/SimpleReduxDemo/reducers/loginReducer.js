import { LOGIN, LOGOUT } from "../actions/actionTypes";

const initialValue = { logIn: false };

// const loginReducer = (state = 'out', action) => {
const loginReducer = (state = initialValue, action) => {
    switch (action.type) {
        // case LOGIN: return "In";
        case LOGIN:
            return { ...state, logIn: true };

        // case LOGOUT: return "Out";
        case LOGOUT:
            return { ...state, logIn: false };

        default: return state;
    }
}

export default loginReducer;





// import { LOGIN, LOGOUT } from "../actions/actionTypes";
// const initialValue = { logIn: false, };
// const loginReducer = (state = initialValue, action) => {
//     switch (action.type) {
//         case LOGIN: return { ...state, logIn: true }
//         case LOGOUT: return { ...state, logIn: false }
//         default: return state;
//     }
// }
// export default loginReducer;