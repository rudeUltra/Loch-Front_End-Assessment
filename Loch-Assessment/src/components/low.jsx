import React, { useState, useRef, useEffect } from 'react';

const Lower = () => {
  const [pressed, setPressed] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const rowRef = useRef(null);

  useEffect(() => {
    // Add event listener to handle mouseup anywhere on the document
    const handleDocumentMouseUp = () => {
      document.body.style.cursor = 'default';
      setPressed(false);
      snapToNearestCard();
    };

    document.addEventListener('mouseup', handleDocumentMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleDocumentMouseUp);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleMouseDown = (e) => {
    setPressed(true);
    setStartX(e.clientX);
    setCardWidth(rowRef.current.children[0].offsetWidth); // Assuming all cards have the same width
  };

  const handleMouseEnter = () => {
    document.body.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!pressed) return;
    e.preventDefault();

    const newOffsetX = e.clientX - startX;
    setOffsetX(newOffsetX);

    document.body.style.cursor = 'grabbing';
  };

  const snapToNearestCard = () => {
    const distanceToSnap = cardWidth / 2;
    const snappedIndex = Math.round(offsetX / cardWidth);

    setOffsetX(snappedIndex * cardWidth);
  };

  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div style={{marginRight:'100px',
      marginLeft:'50px'}}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60 29.9444L52.7455 22.6898L52.7505 22.6848L30.067 0L22.8432 7.22386L22.8333 7.21393L0 30.0486L9.35245 39.4022L9.35742 39.3973L29.9608 60L39.3142 50.6464L39.3063 50.6385L60 29.9444ZM25.3947 36.7276L36.7409 25.3813L41.2991 29.9395L29.9529 41.2859L25.3947 36.7276ZM23.266 34.5989L18.7109 30.0437L30.0581 18.6973L34.6132 23.2525L23.266 34.5989ZM37.251 48.4363L32.156 43.3412L50.6475 24.8493L55.7426 29.9444L37.251 48.4363ZM30.067 4.25849L48.493 22.6838L43.398 27.779L24.972 9.3536L30.067 4.25849ZM22.8333 11.4724L27.9283 16.5675L16.5821 27.9149L16.5643 27.8971L9.33459 35.1269L4.25743 30.0486L22.8333 11.4724ZM29.9608 55.7425L11.4871 37.2675L16.5821 32.1724L35.0558 50.6464L29.9608 55.7425Z" fill="white"/>
</svg>

      </div>
      <div className="container text-center">
      <div
        ref={rowRef}
        className="row align-items-start"
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        style={{
          display: 'flex',
          transition: pressed ? 'none' : 'transform 0.3s',
          transform: `translateX(${offsetX}px)`,
        }}
      >
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Yash P Research, 3poch Crypto Hedge Fund</h5>
              
              <p className="card-text">“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Shiv S Co-Founder Magik Labs</h5>
              <p className="card-text">“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though.”.</p>
            </div>
          </div>

          
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Jack F Ex Blackrock PM</h5>
              
              <p className="card-text">“Love how Loch integrates portfolio analytics and whale watching into one unified app watching the whales.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Lower;
