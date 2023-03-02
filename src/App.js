import evenOdd from "./pages/230228";
import average from "./pages/230301";
import add from "./pages/230302";

function App() {
  return (
    <div>
      <div>{evenOdd(2)}</div>
      <div>{average([1, 2, 3, 4, 5, 6, 7, 8, 9])}</div>
      <div>{add(10123542)}</div>
    </div>
  );
}

export default App;
