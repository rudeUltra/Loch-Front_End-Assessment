import { useState } from 'react'
{
  /* The following line can be included in your src/index.js or App.js file */
}


import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalExample from './components/signup';
import Display from './components/display';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [count, setCount] = useState(0)

  const columnStyle = {
    backgroundColor: 'white',
  };

  
  const columnStyle1 = {
    background: 'black radial-gradient(79.84% 79.84% at 32.27% 91.27%, rgba(31, 169, 17, 0.810119) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0) 100%)',
  };
  


  return (
    <>
    <div className="container-fluid">
      <div className="row">
        {/* First Column */}
        <div className="col-md-6" style={columnStyle1}>
         
           <Display></Display>
          

        </div>

        {/* Second Column */}
        <div className="col-md-6" style={columnStyle}>
          <VerticalExample></VerticalExample>
        </div>
      </div>
    </div>
    
    
      
    
    
    </>
  )
}

export default App
