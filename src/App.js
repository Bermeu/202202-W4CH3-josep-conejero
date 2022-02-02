import "./App.css";
import Display from "./components/Display";
import Info from "./components/Info";

function App() {
  const calling = true;
  //const clickedNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const clickedNumers = "123456789";

  return (
    <div className="container">
      {<Info calling={calling} />}
      <main className="phone">
        <div className="keyboard-container">
          <ol className="keyboard">
            <li>
              <button className="key">1</button>
            </li>
            <li>
              <button className="key">2</button>
            </li>
            <li>
              <button className="key">3</button>
            </li>
            <li>
              <button className="key">4</button>
            </li>
            <li>
              <button className="key">5</button>
            </li>
            <li>
              <button className="key">6</button>
            </li>
            <li>
              <button className="key">7</button>
            </li>
            <li>
              <button className="key">8</button>
            </li>
            <li>
              <button className="key">9</button>
            </li>
            <li>
              <button className="key">0</button>
            </li>
            <li>
              <button className="key big">delete</button>
            </li>
          </ol>
        </div>
        <div className="actions">
          {<Display numbers={clickedNumers} />}
          <a href="www.google.es" className="call">
            Call
          </a>
          <a href="www.google.es" className="hang active">
            Hang
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
