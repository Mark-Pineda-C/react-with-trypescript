import { Counter } from './components/Counter';
import { User } from './components/User';

import { TimerParent } from './components/TimerParent';
import { CounterRed } from './components/CounterRed';
import { Form } from './components/Form';
import { Todo } from './todo/Todo';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <User />
      <h2 className='mt-4'>useEffect - useRef</h2>
      <TimerParent />
      <h2 className='mt-4'>useReducer</h2>
      <CounterRed />
      <h2 className='mt-4'>useCustomHooks</h2>
      <Form />
      <hr />
      <h2 className='mt-4'>useContex - createContext - contextProvider</h2>
      <Todo />
    </>
  );
}

export default App;
