console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// we would change the value at which our loop stops - in the middle section of the for loop

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i = 3; i <= 5; i++) {
  console.log(i);
}

// changing starting value for the loop from 0 to 3
// as well as where the loop is checking to see if the code will run - the condition 


// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

//in this example we are changing the start and end of the loop, as well as the additive property
// this lets us print only the evens! for some reason my brain overcomplicates the code for evens


// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (i = 5; i >= 0; i--) {
  console.log(i);
}
// wow look at us doing basic counting 

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (let star of stars) {
  console.log(star);
}

// yeah I should probably use a more clear variable because the singular vs plural might get confusing

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let j = 0;
while (j <= 4) {
  console.log(stars[j]);
  j++;
}

// why does it get angry when i use the same variable sometimes?


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let x = 0;
while (x <= 5) {
  console.log(x);
  x++;
}
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let n = 10;
while (n >= 5) {
  console.log(n);
  n--;
}
