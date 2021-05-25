import React from "react"
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components"
import { 
  Navbar,
  Nav,
  Form,
  Button,
  FormControl

} from "react-bootstrap"

const Navigator = () => {
  return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">RCB</Navbar.Brand>
    <Nav className="mr-0">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form style={{float:"right"}} inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  )
}

function App() {
  return (
    <AppWrapper>
      {/* <Header> */}
       <Navigator/>

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
width: 85%; 
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


