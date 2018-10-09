import {ACTION, STATUS} from '../constants'


const defaultState = {
    countries: {}
}

const DataReducer = (state=defaultState, action) => {
    switch(action.type) {
        case ACTION.FETCH: {
            let newstate = {}
            newstate.countries = action.data
            return {...state, ...newstate}
        }
        default: {
            let newstate = {};
            if(action.code === 500) {
                newstate[STATUS.ABORT] = true;
            }
            newstate[action.type]=action.status
            return {...state, ...newstate}
        }
    }
}

export default DataReducer