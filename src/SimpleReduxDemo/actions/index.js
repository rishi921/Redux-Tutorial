import { DECREMENT, DEPOSIT, INCREMENT, LOGIN, LOGOUT, WITHDRAW, } from "./actionTypes"

const increment = () => {
    return { type: INCREMENT }
}

const decrement = () => {
    return { type: DECREMENT }
}

const login = () => {
    return { type: LOGIN }
}

const logout = () => {
    return { type: LOGOUT }
}

const withdraw = (amount) => {
    return {
        type: WITHDRAW,
        payload: amount
    }
}

const deposit = (amount) => {
    return {
        type: DEPOSIT,
        payload: amount
    }
}

export { increment, decrement, login, logout, withdraw, deposit };