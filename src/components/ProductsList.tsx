import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { PRODUCTS_ENDPOINT } from "../api";
import type { IProduct } from "../types";
import ProductCard from "./ProductCard";

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(PRODUCTS_ENDPOINT)
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка при получении товаров");
        return res.json();
      })
      .then((data: IProduct[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Неизвестная ошибка");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  if (error) return <Alert variant="danger">Ошибка: {error}</Alert>;

  if (products.length === 0)
    return <Alert variant="info">Товары отсутствуют</Alert>;

  return (
    products && (
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {products.map((p) => (
          <Col key={p.id}>
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    )
  );
};

export default ProductsList;
