// Function to format a row
function formatRow(row) {
    // Perform formatting or processing on the row here
    // For example, let's assume the row is an object with properties 'name' and 'age'
    return `Name: ${row.name}, Age: ${row.age}`;
}

// Example usage
let sampleRow = { name: "Alice", age: 30 };
let formattedOutput = formatRow(sampleRow);
console.log(formattedOutput); // Output: Name: Alice, Age: 30
