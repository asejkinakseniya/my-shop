import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const FooterBar: React.FC = () => {
  return (
    <Navbar bg="light" className="mt-auto">
      <Container className="justify-content-center">
        <span className="text-muted">
          © {new Date().getFullYear()} StuoShop — интернет-магазин
        </span>
      </Container>
    </Navbar>
  );
};

export default FooterBar;
