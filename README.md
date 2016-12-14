# React Redux Getting Started Demo

This is a simple of demo for getting started
with redux and react.

## Install

```
npm install redux react-redux redux-thunk -S
```

## Create a store

src/store.js

```
const redux = require('redux')
const reactRedux = require('react-redux')

const rootReducer = (state={ name: ''}, action) => {
  switch (action.type) {
      case 'SET_NAME':
        return reduceName(state, action)
      default:
        return state
    }
}

const reduceName = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {name: action.value})
  return newState
}

// value
const mapStateToProps = (state) => {
  return { name: state.name }
}

// handleChange
const mapDispatchToProps = (dispatch) => {
  return {
    setName (name) {
      console.log(name)
      dispatch({type: 'SET_NAME', value: name})
    }
  }
}

const store = redux.createStore(rootReducer)

const connector = reactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)

module.exports = { connector, store }

```

---

In app.js

```
const { Provider } = require('react-redux')
const { store } = require('./store')


...

render () {
  return (
    <Provider store={store}>
      ...
    </Provider>
  )
}
```

---

In home.js

```
const { connector } = require('../store')

module.exports = connector(Home)

```
