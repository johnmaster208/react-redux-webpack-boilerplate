import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from '../store/configureStore'
import MainComponent from '../components/MainComponent'
import '../styles/styles.less'

ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>, 
    document.querySelector('#root')
)
