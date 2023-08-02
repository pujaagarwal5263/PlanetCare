import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      <h5>Rate Us:</h5>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="starrating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffa62b" : "#bbbfca"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              size={30}
            />
          </label>
        );
      })}
    </div>
  );
};

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Services</h5>
            <ul className="list-unstyled">
              {localStorage.typeofuser === "seller" ? (
                <li>
                  <Link to="/requestPickup" style={{color: "white"}}>Request Pickup</Link>
                </li>
              ) : (
                ""
              )}
              {!localStorage.token ? (
                <div>
                  <li>
                    <Link to="/signup/vendor"  style={{color: "white"}}>Join as Vendor</Link>
                  </li>
                  <li>
                    <Link to="/signup/rider"  style={{color: "white"}}>Join as Rider</Link>
                  </li>
                </div>
              ) : (
                ""
              )}
              <li>
                <Link to="/contactus"  style={{color: "white"}}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-3">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/faqs"  style={{color: "white"}}>How it works</Link>
              </li>
              <li>
                <Link to="/aboutus"  style={{color: "white"}}>About Us</Link>
              </li>
              <li>
                <Link to="/tnc"  style={{color: "white"}}>Terms and Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-3">
            <center>
              <StarRating />
            </center>
          </div>
        
        </div>
        <hr style={{backgroundColor: "white"}} />
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>Made with ❤️ for Planet Care</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
