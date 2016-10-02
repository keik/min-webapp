import React from 'react'
import globalStyles from './styles/global.css'
import styles from './app1.css'

export default class App1View extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <div className="container">
          <h1>App1</h1>
          <p className={styles.hello}>
            Hello, {this.props.name}. This is App1 built from <code>lib/share/app1.jsx</code> + <code>lib/share/app1.css</code>.
          </p>
        </div>
      </div>
    )
  }
}
