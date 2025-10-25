import React from "react";
import Container from "react-bootstrap/Container";
import Banner from "./components/Banner";
import FooterBar from "./components/FooterBar";
import HeaderBar from "./components/HeaderBar";
import ProductsList from "./components/ProductsList";

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderBar />
      <main className="flex-grow-1">
        <Banner />
        <Container className="my-4">
          <ProductsList />
        </Container>
      </main>
      <FooterBar />
    </div>
  );
};

export default App;
