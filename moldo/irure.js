function createItem(specs = {}) {
  return Object.assign({}, defaultSpecifiers, specs);
}

// Example usage
const newItem4 = createItem({ color: 'red', size: 'large' });
console.log(newItem4);
// Output: { color: 'red', size: 'large', quantity: 1, price: 0 }

const newItem5 = createItem({ quantity: 0 });
console.log(newItem5);
// Output: { color: 'blue', size: 'medium', quantity: 0, price: 0 }
