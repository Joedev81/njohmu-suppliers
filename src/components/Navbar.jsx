import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="text-5xl text-bold text-green-600 text-center">NJOHMU SUPPLIERS</div>

                <div className="flex justify-between item-center max-w-lg mx-auto py-2 text-lg text-white">
                    <div className=""><Link to="">Home</Link></div>
                    <div className=""><Link to="/shop">Shop</Link></div>
                    <div className=""><Link to="/blog">Blogs</Link></div>
                    <div className=""><Link to="/about">About Us</Link></div>
                    <div className=""><Link to="/contact">Contact Us</Link></div>
                </div>
            </div>
        </nav>
    );
}