import React from 'react'
import ReactDOM from 'react-dom'

import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import App from '../App';
import Todolist from '../components/Todolist'

describe('Testing Component Todolist', () => {

  const wrapper = shallow(<Todolist />)

  it('Render Todolist Component without crashing', () => {
    expect(wrapper).to.have.length(1)
  })

  it('Renders Edit Button', () => {
    expect(wrapper.find('.edit-button')).to.have.length(1)
  })

  it('Renders Delete Button', () => {
    expect(wrapper.find('.delete-button')).to.have.length(1)
  })

  it('Have 3 todos during initialization', () => {
    expect(wrapper.state().todos).to.have.length(3)
  });

  it('Deletes any todo after clicked delete button', () => {
    const currentTodoslength = wrapper.state().todos.length - 1
    wrapper.find('.delete-button').simulate('click');
    expect(wrapper.state().todos).to.have.length(currentTodoslength)
  });

  xit('Render Todo Edit',()=>{})
  xit('Render Todo Delete')
})
