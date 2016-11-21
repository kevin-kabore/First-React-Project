var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('./components/GreeterMessage');
var GreeterForm = require('./components/GreeterForm')
var Greeter = require('./components/Greeter')

var firstName = "Kevin"
var messageProp = "This is from the message prop"
ReactDOM.render(
  <Greeter name={firstName} message={messageProp}  />,
  document.getElementById('app')
);
