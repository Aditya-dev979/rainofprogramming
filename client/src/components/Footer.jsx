import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-100 text-gray-800 dark:bg-[#020817] dark:text-gray-100 transition-colors duration-300">
      <div className="footer-top py-8 border-b border-gray-300 border-t dark:border-gray-700">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Logo Section */}
          <div className="footer-logo">
            <h3 className="text-xl font-bold">Rain Of Programming</h3>
          </div>

          {/* Explore Section */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Courses</a></li>
              <li><a href="#" className="hover:underline">Online Classes</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Refunds</a></li>
              <li><a href="#" className="hover:underline">Order Tracking</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom py-4 text-center border-t border-gray-300 dark:border-gray-700">
        <p className="text-sm">&copy; 2025 Rain Of Programming | All Rights Reserved</p>
        <p className="text-sm">This Website is made with ❤️ by <a href="https://sandsinfotech.com" className="hover:underline">sandsinfotech.com</a></p>
        <div className="social-icons flex justify-center space-x-4 mt-2">
          <a href="#" aria-label="Facebook" className="text-xl hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram" className="text-xl hover:text-pink-600"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter" className="text-xl hover:text-blue-400"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="LinkedIn" className="text-xl hover:text-blue-700"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
