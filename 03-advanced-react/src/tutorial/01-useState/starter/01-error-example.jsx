const ErrorExample = () => {
  let count = 0;
  const incrementCount = () => {
    count += 1;
    console.log('Count incremented to', count);
  }
  return <>
           <h2>useState error example</h2>
           <div>Count: {count}</div>
           <button type="button" onClick={incrementCount}>Click me</button>
         </>;
};

export default ErrorExample;
