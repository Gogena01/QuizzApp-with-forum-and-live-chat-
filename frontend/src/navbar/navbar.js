import React,{useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
//import Tooltip from 'react-bootstrap/Tooltip';
import { Outlet } from "react-router-dom";
import './navbar.css';
import firebase from 'firebase/compat/app';
//import Button from 'react-bootstrap/esm/Button';








const NavMenu = () => {
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setCurrUser(user);
    });
  }, []);


  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      window.location = '/login'
    } catch (error) {
      alert(error)
    }
  };

  /*return (
    <div>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>

      <input value={count} disabled />
    </div>
  );*/




  return (
    <>

      <Navbar id='okay' expand="lg">
        <Container>
          <Navbar.Brand style={{ color: 'white' }}>My React Website</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
              <Nav.Link href='/about' style={{ color: 'white' }}>About</Nav.Link>
              {currUser ? (
                <><Nav.Link style={{ color: 'white' }} href='/chat'>Chat</Nav.Link>
                  <NavDropdown style={{ color: 'white' }} title="Community" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/forum">Forum</NavDropdown.Item>
                    <NavDropdown.Item href="/toDo">
                      To Do list
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/exercise">
                      Exercise
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link style={{color:'white'}} onClick={handleLogout}>Logout</Nav.Link>
                </>) : (
                <>
                  <Nav.Link style={{color:'white'}} href='/login'>Login</Nav.Link>
                  <Nav.Link style={{color:'white'}} href='/register'>Register</Nav.Link>
                </>
              )
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

    </>



  );
}

export default NavMenu;