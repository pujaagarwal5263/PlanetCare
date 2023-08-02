import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Media,
  Row,
  Col,
} from "reactstrap";
import Image from "react-bootstrap/Image";
import image1 from "../../assests/seller.png";
import image2 from "../../assests/rider.png";
import image3 from "../../assests/vendor.png";
import Testimonials from "../Testimonials/Testimonials.js";
import Facts from "../FactsFigures/FactsFigures";
import AOS from "aos";
import "aos/dist/aos.css";

const items = [
  {
    src: "./assets/C1.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "./assets/C2.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "./assets/C3.jpg",
    altText: "",
    caption: "",
  },
];

const CardItem = ({ image, header, para }) => (
  <div className="box">
    <div className="box-image">
      <img src={image} alt="" />
    </div>
    <div className="box-content">
      <h2 className="box-header">{header}</h2>
      <p>{para}</p>
    </div>
  </div>
);

const Display = () => {
  const headers = ["Seller", "Rider", "Vendor"];

  const paras = [
    "The civilians willing to sell the waste",
    "The local riders or ragpickers",
    "The local scrap dealers",
  ];

  return (
    <div className="container">
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-12 col-sm-4">
          {" "}
          <CardItem image={image1} header={headers[0]} para={paras[0]} />
        </div>
        <div className="col-12 col-sm-4">
          {" "}
          <CardItem image={image2} header={headers[1]} para={paras[1]} />
        </div>
        <div className="col-12 col-sm-4">
          {" "}
          <CardItem image={image3} header={headers[2]} para={paras[2]} />
        </div>
      </div>
    </div>
  );
};

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <center>
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </center>
      </CarouselItem>
    );
  });

  return (
    <React.Fragment>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <div data-aos="fade-up">
        <Display />
      </div>
     
      <div className="container">
        
        <br />
        <hr style={{backgroundColor: "white"}} />
        <div data-aos="fade-up">
          <center>
            <h2 style={{ fontFamily: "Joti one", color: "white" }}>
              Did you know?
            </h2>
          </center>
          <Facts />
        </div>
        <br />
      </div>
    </React.Fragment>
  );
};

export default Home;
