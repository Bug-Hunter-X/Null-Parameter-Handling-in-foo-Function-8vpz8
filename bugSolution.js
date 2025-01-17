function foo(a, b) {
  a = a === null ? 0 : a; // Set default value if null
  b = b === null ? 0 : b; // Set default value if null
  // ... rest of the function
  return a + b; // Example operation
}