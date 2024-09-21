
// components/Footer.js
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sticky end">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a leading e-commerce platform, providing a wide range of products at competitive prices. Our mission is to offer a seamless shopping experience to our customers.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Order Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Returns & Exchanges</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Sale</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-200"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-200"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-200"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} MyEcommerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
