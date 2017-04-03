import React from 'react'
import ReactDOM from 'react-dom'

import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'


import App from '../App'
import Todolist from '../components/Todolist'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore({ todos: []})

describe('Testing Todo Apps', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<app />)
    expect(wrapper).to.have.length(1)
  })

  it('Renders Todolist', () => {
    const wrapper = mount(<App />)
    expect(wrapper.contains(<Todolist />)).to.be.true
  })

  it('Renders with store props', () => {
    const wrapper = mount (
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(wrapper).to.have.length(1)
  })

  it('Renders ')
})
