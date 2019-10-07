import React from 'react';
import App from '../src/App';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({adapter: new Adapter()});


describe('<App />', () => {

  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toHaveLength(1);
  });

});
