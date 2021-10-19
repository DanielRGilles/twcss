import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="p-10  mg-10 max-w-md mx-auto bg-black rounded-xl shadow-lg flex items-center space-x-9 hover:border-red-700 border-4  cursor-pointer">
      <header className="App-header">
        <img src={logo} class=" animate-bounce hover:animate-none " alt="logo" />
        <p class='text-white text-lg p-10 max-w-lg flex-auto font-bold italic '>
          Trying out the tailwind
          for I am doing tailwind lorem ipsum. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
