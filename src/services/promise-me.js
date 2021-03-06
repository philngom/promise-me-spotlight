/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetQuotes() {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');

  const data = await res.json();

 return {
   character: data[0].character,
   quote: data[0].quote
 }
}

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export async function thenGetQuotes() {
  const result = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
  .then((res) => res.json())
  .then((data) => ({
      character: data[0].character,
      quote: data[0].quote
  }))

  return result;
}

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */

export async function asyncTryCatch() {
  try {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const data = await res.json();
    return {
      character: data[0].character,
      quote: data[0].quote
    }
  } catch (error) {
    console.error('There was an error with your request.')
  }
}

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */

export async function thenCatch() {
  const result = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
  .then((res) => res.json())
  .then((data) => ({
      character: data[0].character,
      quote: data[0].quote
  }))
  .catch((error) => console.error('There was an error with your request.'));

  return result;
}

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */
export async function asyncTryCatchFinally() {
  try {
   const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
   const data = await res.json();
   return {
     character: data[0].character,
     quote: data[0].quote
   }
 } catch (error) {
   console.error('There was an error with your request.')
 } finally {
   console.log('Done!');
 }
}



/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */

