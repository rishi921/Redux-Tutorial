import { WITHDRAW, DEPOSIT } from "../actions/actionTypes";

const balanceReducer = (state = 'out', action) => {
    switch (action.type) {
        case WITHDRAW: return "In";
        case DEPOSIT: return "Out";
        default: return state;
    }
}

export default balanceReducer;