const React = require('react')
const styles = require('./app.css')

const AppView = React.createClass({
  render: function() {
    console.log(styles);
    return (
      <div className={styles.container}>Hello, {this.props.name}</div>
    )
  }
})

module.exports = AppView
