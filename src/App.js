import './App.css';
import Records from './Users.json';
import {User} from './Component/user';
import {Product} from './Component/product'
import {Filter1} from './Component/filter'
import {Filter2} from './Component/filter'
function App() {
  return (
    <div className="App">
       {
        Records.map( records =>{
          return(
            <div key="id">
          
            <li>{records.username}</li>
            
            </div>
          )
        })
       }
       <div> <User /> </div>
      <div> <Product /> </div>
      <div><Filter1 /></div>
      <div><Filter2 /></div>
    </div>
  );
}

export default App;
