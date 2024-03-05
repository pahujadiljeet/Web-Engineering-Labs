// Define a custom map function
function customMap(array, callback) {
    var newArray = []; // Create a new array to store the mapped values
    for (var i = 0; i < array.length; i++) {
    // Call the callback function for each element and push the result to the newarray
    newArray.push(callback(array[i], i, array));
    }
    return newArray; // Return the new array
    }
    // Example usage:
    var numbers = [1, 2, 3, 4, 5];
    // Using the custom map function
    var doubledNumbers = customMap(numbers, function(num) {
    return num * 2;
    });
    console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
    Array.prototype.customMap = customMap;