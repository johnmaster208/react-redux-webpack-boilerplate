import React, { Component } from 'react'
import LoadingGif from '../images/ajax-loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={LoadingGif} style={{width: 25, height: 25}}/>
      </div>
    )
  }
}
