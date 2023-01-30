import './App.css';
import Login from './component/Login';
import Profile from './component/Profile';
import ChangeColor from './component/ChangeColor';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Login/>
      <ChangeColor/>
    </div>
  );
}

export default App;
