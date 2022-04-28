import {
  asyncGetQuotes,
  thenGetQuotes,
  asyncTryCatch,
  thenCatch,
  asyncTryCatchFinally
} from './services/promise-me.js';

export default function App() {

  const handleClick = async (callback) => {
    const results = await callback();
    console.log(results);
  }

  return (
    <>
    <h1>Promises</h1>
      <button onClick={() => handleClick(asyncGetQuotes)}>asyncGetQuotes</button>
      <button onClick={() => handleClick(thenGetQuotes)}>thenGetQuotes</button>
      <button onClick={() => handleClick(asyncTryCatch)}>asyncTryCatch</button>
      <button onClick={() => handleClick(thenCatch)}>thenCatch</button>
      <button onClick={() => handleClick(asyncTryCatchFinally)}>asyncTryCatchFinally</button>
    </>
  );
}
