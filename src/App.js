import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import Child from './Child';
function App() {
  const [item,setItem]=React.useState()
  const [searchItem,setSearchItem]=React.useState("")
  function plusfun(data,setData){
    setData(prev=>prev+1)
    setItem(data)
  }
  function searchfun(search){
    setSearchItem(search)
  }
  return (
    <div className="App">
      <h3>{item}</h3>
      <h3>{searchItem}</h3>
      <Child plusfun={plusfun} searchfun={searchfun}/>
    </div>
  );
}

export default App;
