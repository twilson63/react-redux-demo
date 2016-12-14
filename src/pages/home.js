const React = require('react')

const { Link } = require('react-router') 

module.exports = () =>
  <div>
    <h1>Home</h1>
    <Link to="/about">About</Link>
  </div>
