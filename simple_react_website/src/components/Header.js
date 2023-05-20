// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="HeaderClass">
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                <Link to="/">Home</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/about">About</Link>
                </Nav.Item>
                <Nav.Item as="li">
                <Link to="/contact">Contact</Link>
                </Nav.Item>
            </Nav>
        </div>


    );
}

export default Header;