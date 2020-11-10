import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="container">
      <div className="contact-us">
        <div className="address-container">
          You can find us here
          <span>Street: 59 Plantation Place</span>
          <span>City: ARKELL</span>
          <span>State: New South Wales</span>
          <span>Zip Code: 2795</span>
          <span>Phone Number: (02) 4080 6697</span>
        </div>
        <div className="google-maps-container">Google Maps</div>
      </div>
    </div>
  );
}
