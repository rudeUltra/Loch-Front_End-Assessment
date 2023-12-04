import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';

const headingStyle = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '39px',
    lineHeight: '120%',
    color: '#B0B1B3',
    marginBottom:'50px'
  };

  const headingStyle2={
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '21px',
    lineHeight: '120%',
    color: 'black',
    
  }
function VerticalExample() {
  return (
    
    <div className="d-flex flex-column align-items-center justify-content-center bd-highlight mb-3 gy-5 " style={{ height: '100vh' }}>
      <div className="p-2 bd-highlight" style={headingStyle}>Sign Up for <br></br> exclusive Access.</div>
      <div className="p-2 bd-highlight col-md-11" style={{marginBottom:'10px'}}>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="outline-secondary">Save changes</Button>
          <Button variant="dark">Cancel</Button>
        </Stack>
      </div>
      <div className="p-2 bd-highlight" style={headingStyle2}>You'll receive an email with an invite link to join.</div>
    </div>

    
    
    //  <Stack gap={3} className='vh-100 d-flex justify-content-center align-items-center'>
    //   <div className="p-2">Sign up for Exclusive Access</div>
      
      
      

    // </Stack>
        
    
   
  );
}

export default VerticalExample;