import React from 'react';
import './top.css';
import Img from '../top2.jpg';

function Notify() {
  return (
    <div className="d-flex" style={{marginTop:'8vh'}}>
      {/* First Item */}
      <div className="p-2 flex-fill mr-2">
        <h2 className='heading-4'>Get notified when a highly correlated whale makes a move</h2>
        <p className='body' style={{marginTop:'4vh'}}>
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>

      {/* Second Item */}
      <div className="p-2 flex-fill">
        <img src={Img} className="img-fluid w-7" alt="Responsive Image" />
      </div>
    </div>
  );
}

export default Notify;
