import logo from './logo.svg';
import './App.css';
import backgrounds from './backgrounds';
import BgChange from './BgChange/BgChange';
console.log(backgrounds[0]);

function App() {
  return (
    <div className="App-header">
      <BgChange></BgChange>
    </div>
  );
}

export default App;
