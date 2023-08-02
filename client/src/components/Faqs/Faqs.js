import React, { useEffect } from "react";
import { Media, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Workflow from "../Workflow/Workflow.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Faqs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container" style={{color:"white"}}>
      <br />
      <br />
      <h1 style={{ fontFamily: "Joti one", color: "white" }}>
        <center>How it works</center>
      </h1>
      <br />
      <br />
      <div data-aos="fade-up">
        <br />

        <Media>
          <Row>
            <Col md={4}>
              <Image
                src="../assets/seller.png"
                style={{ maxWidth: 350, maxHeight: 350 }}
                alt="seller"
                roundedCircle
                fluid
              />
            </Col>
            <Col md={{ offset: 1, size: 7 }}>
              <Media body className="ml-1">
                <Media heading>
                  <h2 style={{ fontFamily: "Joti one", color: "black" }}>
                    Seller
                  </h2>
                </Media>
                <p>
                  A seller is anyone who has recyclable waste in a considerable
                  quantity and wants it to be recycled. All they have to do is
                  sign-in/sign-up on our website or App and fill a "Request to
                  Pick-up" form. After the vendor chosen by them accepts the
                  request, and so does a rider, the seller can get rid of that
                  scrap in exchange for money. As a bonus, the seller can stay
                  updated with the order status from the comfort of their abode.
                  So, they save time and earn money... sound like a win-win?
                </p>
              </Media>
            </Col>
          </Row>
        </Media>
      </div>
      <div data-aos="fade-up">
        <br />
        <Media>
          <Row>
            <Col md={7}>
              <Media body className="ml-1">
                <Media heading>
                  <h2 style={{ fontFamily: "Joti one", color: "black" }}>
                    Rider
                  </h2>
                </Media>
                <p>
                  Riders are authentic volunteers who serve as local ragpickers.
                  People have a lot of recyclable waste but not that much time
                  to get it recycled. So, the riders provide the facility of
                  "pickup at the doorstep." Once they accept an order, they
                  approach the seller with a weighing scale and pay them
                  according to the scrap collected on behalf of the vendors. The
                  riders then deliver this waste to the vendors. All of it while
                  giving regular status updates to both sellers and vendors.
                </p>
              </Media>
            </Col>
            <Col md={{ size: 4, offset: 1 }}>
              <Image
                src="../assets/rider.png"
                style={{ maxWidth: 350, maxHeight: 350 }}
                alt="rider"
                roundedCircle
                fluid
              />
            </Col>
          </Row>
        </Media>
      </div>
      <div data-aos="fade-up">
        <br />
        <Media>
          <Row>
            <Col md={4}>
              <Image
                src="./assets/vendor.png"
                style={{ maxWidth: 350, maxHeight: 350 }}
                alt="vendor"
                roundedCircle
                fluid
              />
            </Col>
            <Col md={{ offset: 1, size: 7 }}>
              <Media body className="ml-1">
                <Media heading>
                  <h2 style={{ fontFamily: "Joti one", color: "black" }}>
                    Vendor
                  </h2>
                </Media>
                <p>
                  Vendors are verified recyclable waste collection centres that
                  regularly send waste to recycling units. Sellers can choose a
                  vendor depending on the type of waste they collect and its
                  rate. They coordinate with PlanetCare riders to collect scrap at
                  a large scale based on a rate list decided solely by them. The
                  collaboration helps them in becoming more noticeable so that a
                  larger population opts for recycling their waste.
                </p>
              </Media>
            </Col>
          </Row>
        </Media>
      </div>{" "}
  
      <br />

    </div>
  );
};

export default Faqs;
