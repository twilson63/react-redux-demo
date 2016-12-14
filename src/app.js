const React = require('react')
const { Provider } = require('react-redux')
const { store } = require('./store')

const { BrowserRouter, Match } = require('react-router')

const Home = require('./pages/home')
const About = require('./pages/about')

const App = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/about" component={About} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
})

module.exports = App
