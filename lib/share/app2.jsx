import React from 'react'
import styles from './app2.css'

export default class App2View extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <div className="container">
          <h1>App2</h1>
          <p className={styles.hello}>
            Hello, {this.props.name}. This is App2 built from <code>lib/share/app2.jsx</code> + <code>lib/share/app2.css</code>.
          </p>
        </div>
      </div>
    )
  }
}
