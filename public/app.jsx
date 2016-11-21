var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter')

var firstName = "Kevin"
var messageProp = "This is from the message prop"
ReactDOM.render(
  <Greeter name={firstName} message={messageProp}  />,
  document.getElementById('app')
);
