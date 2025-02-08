function foo(a, b) {
  // Check if both arguments are numbers before performing addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error('Arguments must be numbers.');
    return NaN; //or throw an error
  }
}
foo(1,2);foo('1','2');foo(1,'2');