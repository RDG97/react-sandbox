import logo from './logo.svg';
import './App.css';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import Hello from './Hello';
import Button from './button';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
//export default App;


function Dyl(props) {
  const [ count, setCount ] = useState(0);
  const [ name, setName ] = useState('Dylan')
  const handleClick = (e) => {
    setCount(count + 1);
  }
  return (
    <>
    <h1>{name}</h1>
    <h1>{count}</h1>
    <button onClick={handleClick} >hey</button>
    </>
  )
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function SquidButton() {
  return (
  <button onClick={Squid}>
    press for squid
  </button>
  );
}

function ahh() {
  console.log('test')
}


function Test() {
  return (
    <p>
      im a test!
    </p>
    
  );
}

function Squid() {
  return (
    <img
      src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61+3SAPKbcL._AC_SX679_.jpg"
      alt="My man"
      className="squid"

    />
  );
}


export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Welcome to my app</h1>
      
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <Test />
      <SquidButton />
      <Squid />
      <Squid />
      <Button />
      <Hello name="Mason" father="true" tallAf="true" />
      <Hello name="Sarah" father="false" tallAf="true" />
      <Hello name="Cooper" father="false" tallAf="false" />
      <Dyl />
    </div>
  );
}
