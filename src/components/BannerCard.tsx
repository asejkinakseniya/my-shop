import React from "react";
import Carousel from "react-bootstrap/Carousel";
import type { Banner } from "../types";

const BannerCard: React.FC<{ banner: Banner }> = ({ banner }) => {
  return (
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={banner.image}
        alt={`слайд ${banner.id}`}
      />
      <Carousel.Caption>
        <h3>{banner.title}</h3>
        <p>{banner.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default BannerCard;
