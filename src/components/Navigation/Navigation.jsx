import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import Logo from "../Images/logo.jpeg"


const navItems = [
    {
        navName: "Home",
        path:"",
        key: 1,
    },
    {
        navName: "Team",
        path:"team",
        key: 2,
    },
    {
        navName: "Testimonials",
        path:"testimonials",
        key: 3,
    },
    {
        navName: "Articles",
        path:"articles",
        key: 4,
    },
    {
        navName: "Education",
        path:"education",
        key: 5,
    },
]
const Navigation = () => {
  return (
    <div >
    <Navbar expand="lg" className='bg-[#800042] fixed-top'>
    <Container>
      <Navbar.Brand>
      <div className="d-flex align-items-center justify-content-center">
      <div style={{width:"50px", height:"50px", borderRadius:"20px"}}><img src={Logo} alt='Clement Foundation'/></div>
      <div className='pl-5 text-white text-Fonts'>Nathanielcares </div>
      </div>
     </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            {
                navItems.map(({navName,key, path}) => {
                    return(
                        <Link to={`/${path}`} className='text-decoration-none text-Fonts text-white text-[20px] pr-5' key={key}>{navName}</Link>
                    )
                })
            }
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navigation
