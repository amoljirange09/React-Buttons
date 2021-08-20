import React from 'react';
import './App.css';
// import {Button} from '@material-ui/core'
import Button from '@material-ui/core/Button'
function App() {
  return (
    <div className="App">
      <h1> React Buttons </h1>
      <Button 
      color="primary main" 
      variant="contained">Button
      </Button><br></br>

      <Button 
      color="primary main-light" 
      variant="contained">Button
      </Button><br></br>

      <Button 
      color="secondary main" 
      variant="contained">Button
      </Button><br></br>

      <Button 
      color="negative" 
      variant="contained">Button
      </Button><br></br>

      <Button 
      color="dark red" 
      variant="contained">Yes
      </Button><br></br>

      <Button 
      color="light red" 
      variant="contained">No
      </Button><br></br>

      <Button 
      color="dark amber" 
      variant="contained">Yes
      </Button><br></br>

      <Button 
      color="light amber" 
      variant="contained">No
      </Button><br></br>

      <Button 
      color="dark green" 
      variant="contained">Yes
      </Button><br></br>

      <Button 
      color="light green" 
      variant="contained">No
      </Button><br></br>
      
    </div>
  )
}


export default App;
