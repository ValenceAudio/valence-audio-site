import React from 'react';
import ReactDOM from 'react-dom';
import ContentView from './ContentView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContentView />, div);
});
