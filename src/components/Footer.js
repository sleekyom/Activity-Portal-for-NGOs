import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="partner-container">
        <div className="partner-row">
          <div className="partner-logo">A</div>
          <div className="partner-logo">S</div>
          <div className="partner-logo">D</div>
          <div className="partner-logo">F</div>
        </div>
        <div className="partner-row">
          <div className="partner-logo">F</div>
          <div className="partner-logo">G</div>
          <div className="partner-logo">H</div>
          <div className="partner-logo">J</div>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-link-column contact">
          <ul>
            <h4>Heading 1</h4>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="footer-link-column article">
          <ul>
            <h4>Article</h4>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="footer-link-column">
          <ul>
            <h4>News</h4>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      </div>
      <div className="social-media-row">
        <h1>Follow Us</h1>
        <a className="btn btn-icon btn-facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook"></i>
          <span>Facebook</span>
        </a>
        <a className="btn btn-icon btn-twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter"></i>
          <span>Twitter</span>
        </a>
        <a className="btn btn-icon btn-pinterest" href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-pinterest"></i>
          <span>Pinterest</span>
        </a>
        <a className="btn btn-icon btn-linkedin" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
      </div>

      <div className="footer-copyright text-center py-3">
        © {new Date().getFullYear()} Copyright
        <a href="https://shopgrad.com/"> Shopgrad.com</a>
      </div>
    </div>
  );
}
