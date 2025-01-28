
import './App.css';
import Counter from './Counter';
import Greeting from './Greeting';
import Mycomponent from './Mycomponent';
import Myjsxcomponent from './Myjsxcomponent';
import UserCard from './UserCard';
import WelcomeMessage from './WelcomeMessage';


function App() {
  const userName = "Pinjal"; 
  return (
    <div className="App">
      <Myjsxcomponent />
      <Mycomponent />
      <Greeting name={userName} />
      <WelcomeMessage />
      <Counter />
    </div>
  );
}

export default App;
