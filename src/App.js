import logo from './logo.svg';
import './App.css';


function funcName(user) {

  return user.fname;
}


const user = {

  fname: 'virat',
  
};

const hello = <h1>Hello {funcName(user)}</h1>;



function App() {
  return (
 <div>
   {hello}


{hello}
</div>
  );
}

export default App;
