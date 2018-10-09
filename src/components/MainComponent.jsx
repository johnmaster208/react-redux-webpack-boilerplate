import React, { Component } from 'react'
import {connect} from 'react-redux'
import store from '../store/configureStore'
import {ACTION, STATUS} from '../constants/index'
import AppActions from '../actions/AppActions'
import Spinner from './Spinner'
// import {bindActionCreators} from 'redux'

class MainComponent extends Component {

  constructor(props) {
    super(props)
    const {dispatch} = store
    // this.actions = bindActionCreators(AppActions, dispatch)

  }

  componentDidMount() {
    // store.dispatch({type: ACTIONS.DUMMY, data: { text: 'a dummy action'}})
    // store.dispatch({type: ACTIONS.DUMMY, error: "Error was thrown!"})
    // this.actions.fetch("http://country.io/names.json")
    this.props.fetch("http://country.io/names.json")

  }

  render() {
    const {fetchstatus, countries} = this.props
    return (
      <div>
        <p>Current Status: {fetchstatus ? fetchstatus : STATUS.UNKNOWN}</p>
        <p>Countries and their codes:</p>
        <ul>
        {fetchstatus !== STATUS.SUCCESS && <Spinner />}

        {
          countries && Object.values(countries).map( (country, index) => {
            return( 
              <li key={index}>
                {country}
              </li>
            )
          })
        }
        </ul>
        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetch: (url) => { dispatch(AppActions.fetch(url)) }
  })
}

const mapStateToProps = (state) => {
  return {
    fetchstatus: state.app.status[ACTION.FETCH],
    countries: state.data.countries
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)
