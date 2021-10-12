import './App.css';
import Banner from './Component/Banner/Banner';
import Header from './Component/Header/Header';
import Program from './Component/Program/Program';


function App() {
  return (
    <div className="App container">
      <Header></Header>
      <Banner></Banner>
      <Program></Program>
    </div>
  );
}

export default App;
