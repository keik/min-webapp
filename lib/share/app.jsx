import React from 'react'
import styles from './app.css'

export default class AppView extends React.Component {
  render () {
    return (
      <div className={styles.container}>Hello, {this.props.name}</div>
    )
  }
}
