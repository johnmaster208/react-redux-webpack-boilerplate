
import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from '../store/configureStore'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from '../store/configureStore'
import '../styles/styles.less'
import {MainContainer} from '../containers'

ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>, 
    document.querySelector('#app')
)
