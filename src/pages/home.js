const React = require('react')

const { connector } = require('../store')

const { Link } = require('react-router')

module.exports = connector((props) =>
  <div>
    <h1>Home</h1>
    <Link to="/about">About</Link>
    <br />
    <input
      type="text"
      value={props.name}
      onChange={e => props.setName(e.target.value)}
    />
    <div>{props.name}</div>
  </div>
)
