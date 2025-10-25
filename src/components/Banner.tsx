import React, { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { BANNERS_ENDPOINT } from "../api";
import type { IBanner } from "../types";

const Banner: React.FC = () => {
  const [banners, setBanners] = useState<IBanner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(BANNERS_ENDPOINT)
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка при получении баннеров");
        return res.json();
      })
      .then((data: IBanner[]) => {
        setBanners(data);
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

  if (banners.length === 0)
    return <Alert variant="info">Баннеры отсутствуют</Alert>;

  return (
    <Carousel>
      {banners.map((b) => (
        <Carousel.Item
          style={{
            maxHeight: "400px",
          }}
        >
          <img className="d-block w-100" src={b.image} alt={`слайд ${b.id}`} />
          <Carousel.Caption>
            <h3>{b.title}</h3>
            <p>{b.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
