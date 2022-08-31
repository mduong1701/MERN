import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
        first_name={"Jane"} last_name={"Doe"} age={45} hair_color = "Black"
      />

      <Person
        first_name={"John"} last_name={"Smith"} age={88} hair_color = "Brown"
      />
    </div>
  );
}

export default App;
