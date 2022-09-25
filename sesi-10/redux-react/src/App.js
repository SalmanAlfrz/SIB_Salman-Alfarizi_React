import './App.css';
import CounterClass from './features/counter/CounterClassComponent';
import CounterFunction from './features/counter/CounterFnComponent';

function App() {
  return (
    <main className='App'>
      <CounterClass />
      <CounterFunction />
    </main>
  );
}


export default App;
