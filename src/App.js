import React from "react"
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components"
import { 
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  Container

} from "react-bootstrap"
import "./App.css"
const Navigator = () => {
  return (
    <Container>
    
  <Navbar className="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">RCB</Navbar.Brand>
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
  {/* <Navbar.Collapse id="basic-navbar-nav"> */}
    <Nav >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form className="lg" >
      <div className="sm">
      <FormControl type="text" placeholder="Search"  />
      <Button variant="outline-info">Search</Button>
      </div>
    </Form>
    {/* </Navbar.Collapse> */}
  </Navbar>
 
  </Container>
  )
}

function App() {
  return (
    <AppWrapper>
      {/* <Header> */}
       <Navigator className="lg"/>

      {/* </Header> */}
      <Content>
        A social network
      </Content>

      <Footer>
        Contact us
      </Footer>

    </AppWrapper>

  );
}

export default App;

const AppWrapper = styled.div`

height: 100%;
width: 100%;
position: absolute;
Top: 0;

`;

const Header = styled.div`
margin: auto;
margin-bottom: 10px;
background-color: #000000;
color: #ffffff;
text-align: center;
height: 10%; 
width:100%;
`;

const Content = styled.div`
margin: auto;
margin-bottom: 10px;
background-color: #000000;
color: #ffffff;
text-align: center;
height: 70%; 
width: 85%;

`;

const Footer = styled.div`
margin: auto;
margin-bottom: 10px;
background-color: #000000;
color: #ffffff;
text-align: center;
height: 10%; 
width: 85%;

`;


