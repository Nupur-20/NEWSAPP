
import './App.css';
import React ,{Component} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component{
  
  render(){
    return (
      <div>
       <NavBar/>
       <News/>

      </div>
    )
  }
}


//function App() {
 // return (
   // <div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
       // <p>
       //   Edit <code>src/App.js</code> and save to reload.
       // </p>
        //<a
         // className="App-link"
         // href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
         // Learn React
       // </a>
      //</header>
    //</div>
 // );
//}

//export default App;
