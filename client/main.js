// Any JS in here is automatically ran for us

// Import the React library
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
//New ES6 syntax for -> var React = require('react');

// Create a component: a component in React is a simple function
// or object that produces some HTML and allow us to render it.
const App = () => {
	return (
    <div>
      <ImageList />
    </div>
	);
};


// Render this component to the screen and tell it where
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
