import React from 'react';
import ReactDOM from 'react-dom';
import FrontView from './FrontView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FrontView />, div);
});
