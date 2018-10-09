import {combineReducers} from 'redux'
import AppReducer from './AppReducer'
import DataReducer from './DataReducer';

const rootReducer = combineReducers({
    app: AppReducer,
    data: DataReducer
})

export default rootReducer