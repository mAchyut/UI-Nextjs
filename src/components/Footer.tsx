import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-8">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm">
            At Our Music Academy, we nurture talent and foster a love for music through expert instruction and creative exploration.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm">Email: info@musicacademy.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Address: 456 Harmony Blvd, Music City, USA</p>
        </div>
      </div>
      <p className='text-xs text-center mt-8 text-gray-500 pt-4'>&copy;{new Date().getFullYear()} Music Academy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
