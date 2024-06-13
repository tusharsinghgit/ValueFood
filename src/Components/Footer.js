import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
            <h4 className="text-light mb-3">Why People Like ValueFood!</h4>
              <p className="mb-4">ValueFood is committed to providing fresh and sustainable food solutions to our customers. Since our inception, we have focused on delivering high-quality ingredients and inspiring recipes that reduce food waste and promote healthy eating habits. Join us in our mission to value every ingredient and create a more sustainable future.</p>
              <Link to="/about" className="btn border-secondary py-2 px-4 rounded-pill text-primary">Read More</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-3">Shop Info</h4>
              <Link to="/" className="btn-link">Home</Link>
              <Link to="/about" className="btn-link">About Us</Link>
              <Link to="/blog" className="btn-link">Blog</Link>
              <Link to="/awareness" className="btn-link">Awareness</Link>
              {/* <Link to="/terms" className="btn-link">Terms & Condition</Link>
              <Link to="/return" className="btn-link">Return Policy</Link>
              <Link to="/faqs" className="btn-link">FAQs & Help</Link> */}
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-3">Account</h4>
              <Link to="/account" className="btn-link">My Account</Link>
              <Link to="/shop-details" className="btn-link">Shop details</Link>
              <Link to="/cart" className="btn-link">Shopping Cart</Link>
              <Link to="/wishlist" className="btn-link">Wishlist</Link>
              <Link to="/orders" className="btn-link">Order History</Link>
              <Link to="/international-orders" className="btn-link">International Orders</Link>
            </div>
          </div> */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-light mb-3">Contact</h4>
              <p>Email: valuefood@gmail.com</p>
              <p>Phone: +0123 4567 8910</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
