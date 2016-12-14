const { createStore, applyMiddleware } = require('redux')
import thunk from 'redux-thunk'

const reactRedux = require('react-redux')

const rootReducer = (state={ name: ''}, action) => {
  switch (action.type) {
    //... reducer each action
    case 'SET_NAME':
      return setNameReducer(state, action)
    default:
      return state
  }
}

const setNameReducer = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { name: action.value })
  return newState
}

const store = createStore(rootReducer, applyMiddleware(thunk))

const mapStateToProps = (state) => {
  return { name: state.name }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName(name) {
      setTimeout(_ => {
        dispatch({type: 'SET_NAME', value: name})
      }, 50)

    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { store, connector }
