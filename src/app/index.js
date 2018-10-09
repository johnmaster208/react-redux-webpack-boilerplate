
import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from '../store/configureStore'
import ReactDOM from 'react-dom'
import MainComponent from '../components/MainComponent'
import '../styles/styles.less'

ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>, 
    document.querySelector('#app')
)
