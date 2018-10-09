import {ACTION, STATUS} from '../constants'


const defaultState = {
    status: {},
    alert: {}
}

const StatusReducer = (state=defaultState.status, action) => {
    if(action.status) {
        let newstate = {};
        if(action.code === 500) {
            newstate[STATUS.ABORT] = true;
        } else {
            newstate = {
                [action.type]: action.status
            }
        }        
        return {...state, ...newstate}
    }
    return state;
}

const AlertReducer = (state=defaultState.alert, action) => {
    if(action.alert) {
        let newstate = {}
        newstate[action.alert] = {
            show: action.status === STATUS.WARNING || action.status === STATUS.ERROR || action.status === STATUS.SUCCESS ? true : false,
            status: action.status,
            message: action.message
        }
        return {...state, ...newstate}
    }
    return state;
}

const AppReducer = (state=defaultState, action) => {
    return {
        status: StatusReducer(state.status, action),
        alert: AlertReducer(state.alert, action)
    }
}

export default AppReducer