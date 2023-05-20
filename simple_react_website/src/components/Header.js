// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <div className="HeaderClass">
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>


    );
}

export default Header;