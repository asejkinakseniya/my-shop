import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import type { IProduct } from "../types";

const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <Card style={{ height: "100%" }} className="h-100">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ objectFit: "cover", height: 200 }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="flex-grow-1">{product.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div>
            <strong>{product.price.toLocaleString()} ₽</strong>
          </div>
          <Button variant="primary">Купить</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
