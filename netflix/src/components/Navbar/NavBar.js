import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
const  NavBar =()=>{
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )

}

export default NavBar;