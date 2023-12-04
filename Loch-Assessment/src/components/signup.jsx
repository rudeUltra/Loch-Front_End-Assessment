import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const headingStyle = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '39px',
  lineHeight: '120%',
  color: '#B0B1B3',
  marginBottom: '50px'
};

const headingStyle2 = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '21px',
  lineHeight: '120%',
  color: 'black',
};

function VerticalExample() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email is valid
    const isValid = /\S+@\S+\.\S+/.test(email);

    if (isValid) {
      // Redirect to the specified URL
      window.location.href = 'https://app.loch.one/welcome';
    } else {
      // Show error message and update input placeholder
      setIsValidEmail(false);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center bd-highlight mb-3 gy-5 " style={{ height: '100vh' }}>
      <div className="p-2 bd-highlight" style={headingStyle}>Sign Up for <br></br> exclusive Access.</div>
      <div className="p-2 bd-highlight col-md-11" style={{ marginBottom: '10px' }}>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder={isValidEmail ? 'Your Email' : 'Enter valid Email with @ and .'}
              isInvalid={!isValidEmail}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
            <div className="d-grid" style={{marginTop:'2vh'}}>
              <Button variant="dark" type="submit">Submit</Button>
            </div>
          </Form>
        </Stack>
      </div>
      <div className="p-2 bd-highlight" style={headingStyle2}>
        You'll receive an email with an invite link to join.
      </div>
    </div>
  );
}

export default VerticalExample;
