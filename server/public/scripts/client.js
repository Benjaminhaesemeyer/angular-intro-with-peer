console.log('js sourced');

var myApp = angular.module('myApp', []);

myApp.controller('displayController', function(){
//this code inside runs when controller is initialized
var display = this;
// name.message = this;
console.log(this);
display.name = 'Enter name below';
display.message = 'Enter message below';

display.people = [];
display.addPerson = function(nameBox, messageBox) {
  var person = {nameBox : nameBox, messageBox : messageBox};
  display.people.push(person);
  console.log(display.people);
};

});//end of myApp.controller
