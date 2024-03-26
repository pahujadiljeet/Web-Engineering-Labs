let person = {
    name : "Diljeet",
    gender : "Male",
    cost : "+92",
    age : 23 
}
// console.log(person)
// let person2 = {...person}
// console.log(person2)

// person.name = "Winner of the heart"
// console.log(person)

// const {name, age} = person
// console.log(name, age)

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined)

// const numbers = [1, 2, 3, 4, 5, 6];

// const [one, two, ...rest] = numbers;
// console.log(rest)

// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }
  
//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021,
//     color: 'yellow'
//   }
  
//   const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
//   console.log(myUpdatedVehicle)

// let timeout;

// function myFunction() {
//   timeout = setTimeout(alertFunc, 5000);
// }

// function alertFunc() {
//   alert("Hello!");
// }

// myFunction()

// let count = 0;
// const intervalId = setInterval(() => {
// count++;
// console.log(`Interval count: ${count}`);
// if (count === 5) {
// clearInterval(intervalId); // Stop the interval after 5 iterations
// console.log('Interval stopped after 5 iterations.');
// }
// }, 1000); // 1000 milliseconds = 1 second
// console.log('setInterval example started.');

// function getData() {
//     return new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation (e.g., fetching data from an API)
//     setTimeout(() => {
//     const data = [1, 2, 3, 4, 5];
//     // Simulating successful completion
//     resolve(data);
//     // Simulating failure
//     // reject(new Error('Failed to fetch data'));
//     }, 2000); // Simulating a delay of 2 seconds
//     });
//     }
//     // Consuming the Promise
//     getData()
//     .then(data => {
//     console.log('Data received:', data);
//     })
//     .catch(error => {
//     console.error('Error:', error.message);
//     });

// const getdata = new Promise((resolve, reject) => {
//     console.log("in promise body")
//     resolve("i am resolved output")
// })

// console.log(getdata)
fetch('https://jsonplaceholder.typicode.com/todos').then(apiResult => {
    console.log(apiResult.json())
})