import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const HeaderBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">StuoShop</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
