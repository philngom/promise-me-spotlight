import {
  asyncGetQuotes,
  thenGetQuotes
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
    </>
  );
}
