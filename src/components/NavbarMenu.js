import {Container, Navbar} from "react-bootstrap"

export default function NavbarMenu() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href= "#!">
                Dinamic <b>form</b>
              </Navbar.Brand>
              <Navbar.Toggle/>
              <Navbar.Collapse className="justify-content-end">

              
                <Navbar.Text>
                  Signed in as: {" "}
                  <a href="https://rafaarreaga.com" target="_blank" rel="noreferrer"> Rafa Tarrega</a>
                </Navbar.Text>
              </Navbar.Collapse>
          </Container>
            
        </Navbar>


    </div>
  )
}
