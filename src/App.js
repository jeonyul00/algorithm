import evenOdd from "./pages/230228";
import average from "./pages/230301";
import add from "./pages/230302";
import divisor from "./pages/230303";
import reverse from "./pages/230306";
import distance from "./pages/230309";

function App() {
  return (
    <div>
      <div>{evenOdd(2)}</div>
      <div>{average([1, 2, 3, 4, 5, 6, 7, 8, 9])}</div>
      <div>{add(10123542)}</div>
      <div>{divisor(12)}</div>
      <div>{reverse(123456789)}</div>
      <div>{distance(-4, 2)}</div>
    </div>
  );
}

export default App;
