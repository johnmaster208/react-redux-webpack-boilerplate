import {ACTION, STATUS} from '../constants/index' 

const AppActions = {
    
    fetch: (url) => {
        return dispatch => {
            dispatch({type: ACTION.FETCH, status: STATUS.PENDING}),
            setTimeout( () => fetch(url)
            .then( resp => resp.json())
            .then( data => {
                    dispatch({
                        type: ACTION.FETCH, 
                        status: STATUS.SUCCESS,
                        ...alert,
                        message: 'Data was loaded successfully',
                        data: data
                    }) 
                }
            ), 5000)
        }
    }
}


export default AppActions