import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <>
      {['lg'].map((expand) => (

        <Navbar key={expand} expand={expand} className="bg-secondary">
          <Container fluid className='fw-bold'>
            <Navbar.Brand href="#" className='text-uppercase text-white'> <img src='/images/logo.png' alt="" style={{ width: "50px" }} className='me-2' />Skill Bender</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <div className='d-flex w-100 align-items-center flex-sm-column flex-lg-row'>
                  <Nav className=" d-flex pe-3 color-theme w-100 justify-content-start ">

                    <NavLink href="#action1" className='mx-2 color-theme-blue'>Home</NavLink>
                    <NavLink href="#action2" className='mx-2'>Learning</NavLink>
                    <NavLink href="#action2" className='mx-2'>Earning</NavLink>
                    <NavLink href="#action2" className='mx-2'>About us</NavLink>
                    <NavLink href="#action2" className='ms-2'>Contact us</NavLink>

                  </Nav>
                  <Nav className='p-2 flex-shrink-1 align-self-start'>
                    <NavLink to="/login" className=" text-decoration-none me-4"><LockOpenIcon  className='color-theme-orange' fontSize='large'/></NavLink>
                    <Dropdown >
                      <Dropdown.Toggle className='px-4 border-0 ' style={{ background: "#FB641B" }}>
                        <NavLink to="/Sign_up" className="text-decoration-none text-white text-uppercase">signup</NavLink>
                      </Dropdown.Toggle>
                    </Dropdown>

                  </Nav>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;