import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavLink, Spinner } from "react-bootstrap";
import { Ito } from "../dashboard/Ito";

export const DashBoard = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div >
      {
        loading ? 
        (<div className="spin" ><Spinner animation="grow" variant="dark" /></div> ):
        (<div  >
          <Navbar className="px-5" bg="light" variant="light" expand="xs" >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.decimalpointanalytics.com/static/media/dpa_main_logo.df6414e47945efb8229be45724f5238d.svg"
              width="180"
              height="45"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>)
      }
    </div>
  );
};
