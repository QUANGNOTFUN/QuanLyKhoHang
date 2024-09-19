import logo from './logo.svg';
import './App.css';
import Home from './components/js/Home'; // Thêm import

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home /> {/* Sử dụng Home component */}
      </header>
    </div>
  );
}

export default App;
