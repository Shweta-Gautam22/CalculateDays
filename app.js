// Higher-order function to create a function that extracts date components
const date = (dateExtractor) => (date) => dateExtractor(date);

// Pure functions to extract day, month, and year from a date
const day = date((dt) => dt.getDate());
const month = date((dt) => dt.getMonth() + 1);
const year = date((dt) => dt.getFullYear());

// Compose functions to calculate the total number of days
const composedFunc = (date) =>    year(date) * 365 + month(date) * 30 + day(date);

// Calculate the number of days between two dates
const first = new Date(2080, 0, 30);
const last = new Date(2080, 1, 10);

const days = Math.abs(composedFunc(first) - composedFunc(last));

// Display the result
console.log(`The number of days between the two dates is: ${days} days`);
