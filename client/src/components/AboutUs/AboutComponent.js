import React, { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Jumbotron,
  Media,
} from "reactstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Team(props) {
  return (
    <div classname="container">
      <Media>
        <Image
          src={props.src}
          style={{ maxWidth: 175, maxHeight: 175 }}
          alt="PlanetCare"
          roundedCircle
          fluid
        />

        <Media body align-self-center className="ml-1">
          <Media heading>
            <h2 style={{ fontFamily: "Joti one", color: "black" }}>
              {props.name}
            </h2>
          </Media>
          <p>{props.post}</p>
        </Media>
      </Media>
    </div>
  );
}

function About(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container" style={{color:"white"}}>
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr style={{backgroundColor:"white"}}/>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus
            at augue eget arcu dictum varius duis at consectetur. Commodo elit
            at imperdiet dui accumsan sit amet nulla. Morbi tristique senectus
            et netus et malesuada fames ac. Sed euismod nisi porta lorem. Quis
            hendrerit dolor magna eget est lorem ipsum dolor sit. Interdum
            varius sit amet mattis vulputate. Pharetra magna ac placerat
            vestibulum lectus mauris. Fermentum et sollicitudin ac orci. Tellus
            orci ac auctor augue mauris augue. Fermentum dui faucibus in ornare.
            Nisl tincidunt eget nullam non nisi est sit amet. Elementum nisi
            quis eleifend quam adipiscing vitae proin sagittis nisl. Egestas
            tellus rutrum tellus pellentesque eu tincidunt. Ac auctor augue
            mauris augue neque gravida in fermentum et. Nunc mattis enim ut
            tellus. Ac tincidunt vitae semper quis lectus. Eu tincidunt tortor
            aliquam nulla facilisi cras fermentum odio. Congue eu consequat ac
            felis donec et odio. Vulputate dignissim suspendisse in est.
          </p>
          <p>
            Aliquam sem et tortor consequat id. Vitae proin sagittis nisl
            rhoncus mattis rhoncus urna neque. Feugiat nisl pretium fusce id
            velit ut tortor pretium viverra. Pellentesque diam volutpat commodo
            sed egestas egestas fringilla. Non tellus orci ac auctor augue
            mauris. Nunc sed id semper risus in hendrerit gravida rutrum
            quisque. Lectus urna duis convallis convallis tellus. In massa
            tempor nec feugiat nisl pretium fusce id velit. Amet commodo nulla
            facilisi nullam vehicula ipsum a. Lacinia at quis risus sed.
            Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere
            lorem. Massa id neque aliquam vestibulum. Neque viverra justo nec
            ultrices dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus
            at augue eget arcu dictum varius duis at consectetur. Commodo elit
            at imperdiet dui accumsan sit amet nulla. Morbi tristique senectus
            et netus et malesuada fames ac. Sed euismod nisi porta lorem. Quis
            hendrerit dolor magna eget est lorem ipsum dolor sit. Interdum
            varius sit amet mattis vulputate. Pharetra magna ac placerat
            vestibulum lectus mauris. Fermentum et sollicitudin ac orci. Tellus
            orci ac auctor augue mauris augue. Fermentum dui faucibus in ornare.
            Nisl tincidunt eget nullam non nisi est sit amet. Elementum nisi
            quis eleifend quam adipiscing vitae proin sagittis nisl. Egestas
            tellus rutrum tellus pellentesque eu tincidunt. Ac auctor augue
            mauris augue neque gravida in fermentum et. Nunc mattis enim ut
            tellus. Ac tincidunt vitae semper quis lectus. Eu tincidunt tortor
            aliquam nulla facilisi cras fermentum odio. Congue eu consequat ac
            felis donec et odio. Vulputate dignissim suspendisse in est.
          </p>
          <p>
            Aliquam sem et tortor consequat id. Vitae proin sagittis nisl
            rhoncus mattis rhoncus urna neque. Feugiat nisl pretium fusce id
            velit ut tortor pretium viverra. Pellentesque diam volutpat commodo
            sed egestas egestas fringilla. Non tellus orci ac auctor augue
            mauris. Nunc sed id semper risus in hendrerit gravida rutrum
            quisque. Lectus urna duis convallis convallis tellus. In massa
            tempor nec feugiat nisl pretium fusce id velit. Amet commodo nulla
            facilisi nullam vehicula ipsum a. Lacinia at quis risus sed.
            Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere
            lorem. Massa id neque aliquam vestibulum. Neque viverra justo nec
            ultrices dui.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
