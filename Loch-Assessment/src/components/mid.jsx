import React from 'react';
import './top.css';
import Img from '../mid1.jpg';

function Mid() {
  return (
    <div className="d-flex" style={{marginTop:'12vh'}}>
      
      
      <div className="p-2 flex-fill">
        <img src={Img} className="img-fluid w-8" alt="Responsive Image" />
      </div>


      <div className="p-2 flex-fill mr-2">
        <h2 className='heading-4'>Watch what the whales are doing</h2>
        <p className='body' style={{marginTop:'4vh'}}>
        All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.
        </p>
      </div>
    </div>

    
  );
}

export default Mid;
