function App() {
  /* Output this form in react using JSX syntax
Here's the raw HTML:

<form>
  <label for="search-input">Search:</label>
  <input id="search-input">
  <button aria-label="Submit" class="submit-btn">
    <img
      alt=""
      src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
    >
  </button>
</form>
*/
  // PUT YOUR CODE HERE
  return (
    <form>
      <label htmlFor="searh-input">Search:</label>
      <input type="text" id="search-input" />
      <button aria-label="Submit" className="submit-btn">
        <img
          src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
          alt=""
        />
      </button>
    </form>
  );
}

export default App;
