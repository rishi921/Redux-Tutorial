import { LOGIN, LOGOUT } from "../actions/actionTypes";


const loginReducer = (state = 'out', action) => {
    switch (action.type) {
        case LOGIN: return "In";
        case LOGOUT: return "Out";
        default: return state;
    }
}

export default loginReducer;