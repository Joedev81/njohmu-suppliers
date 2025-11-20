import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 py-10">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className=""></div>
          <div className="text-gray-300">
            <h3 className="text-lg mb-4">Links</h3>
            <div className=""><a target="_blank" href="https://facebook.com">Facebook</a></div>
            <div className=""><a target="_blank" href="https://instagram.com">Instagram</a></div>
            <div className=""><a target="_blank" href="https://wa.me/254720839534?">Whattsapp</a></div>
            <div className=""><a target="_blank" href="https://tiktok.com">TikTok</a></div>
          </div>
        </div>
        <p className="text-center text-white">© {new Date().getFullYear()} Njohmu Suppliers — All rights reserved</p>
      </footer>

    </>
  );
}