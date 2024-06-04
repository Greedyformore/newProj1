import logo from './logo.svg';
import './App.css';
import Employee from './employee';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Good Morning</h1>
        <h1>Welcome !</h1>
        <Employee></Employee>
        <Post></Post>
      </header>
    </div>
  );
}

export default App;
