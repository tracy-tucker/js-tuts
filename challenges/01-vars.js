// Variable naming convention means name your variable a name that makes sense if someone else is looking at your code.
// Name can contain digits, letters, underscore, $
// Names can ONLY start with letter, $ or _
// NO keyword
// CANNOT start with a number
// Case sensitive - fullname VS Fullname
// camelCase or underscore

const firstName = 'Tracy';
const last_name = 'Tucker';
let address = 'Main Street';

address = 'First Street';

console.log('Name: ' + firstName + '', last_name + ', ', 'Address: ' + address);

// const: variable CANNOT be reassigned. Block scoped.
// let: variable CAN be reassigned. Block scoped.
// var: this has been replaced by let/const, but it has shortcomings. Function scoped.
