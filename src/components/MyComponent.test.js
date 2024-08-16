import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe("MyComponent", () => {
  let component;
  let form;

  beforeEach(() => {
    component = shallow(<MyComponent />);
    form = component.find('input');
  });

  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render initial layout", () => {
    expect(component.getElements()).toMatchSnapshot();
  });

  it("should create an entry in component state", () => {
    // Simulate input change
    form.simulate('change', { target: { name: 'myName', value: 'myValue' } });

    // Verify the state is defined
    expect(component.state('input')).toBeDefined();
  });

  it("should create an entry in component state with the event value", () => {
    // Simulate input change
    form.simulate('change', { target: { name: 'myName', value: 'myValue' } });

    // Verify the state contains the correct value
    expect(component.state('input')).toEqual('myValue');
  });
});
