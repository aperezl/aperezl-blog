import React from 'react';
import renderer from 'react-test-renderer';
import Home from './index'

describe('Home Page', () =>{
  test('HomePage', () => {
    const component = renderer.create( <Home /> )
    const tree = component.toJSON()
    expect(tree.type).toBe('h1')

  })
})