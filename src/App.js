import './App.css';

function App() {
  return (
    <div class="container">
      <!-- El siguiente elemento se oculta añadiéndole la clase "off" -->
      <span class="message">Calling...</span>
      <main class="phone">
        <div class="keyboard-container">
          <ol class="keyboard">
            <li><button class="key">1</button></li>
            <li><button class="key">2</button></li>
            <li><button class="key">3</button></li>
            <li><button class="key">4</button></li>
            <li><button class="key">5</button></li>
            <li><button class="key">6</button></li>
            <li><button class="key">7</button></li>
            <li><button class="key">8</button></li>
            <li><button class="key">9</button></li>
            <li><button class="key">0</button></li>
            <li><button class="key big">delete</button></li>
          </ol>
        </div>
        <div class="actions">
          <span class="number">667359961</span>
          <!-- El botón de llamar debe tener la clase "activo" cuando -->
          <!-- el número de teléfono tiene 9 cifras -->
          <a href="#" class="call">Call</a>
          <!-- Sólo se tiene que ver un botón u otro -->
          <a href="#" class="hang active">Hang</a>
        </div>
      </main>
    </div>
  );
}

export default App;
