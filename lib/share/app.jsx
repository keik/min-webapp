const React = require('react')

const AppView = React.createClass({
  render: function() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
})

module.exports = AppView
