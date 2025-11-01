import { useState } from "react";
import { IoMenu , IoClose } from "react-icons/io5";

const HomeNavBar = () => {
    const [nav, setNav] = useState(false);
    
    return (
        <div className="sticky top-0 z-10">
            <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-blue-600 rounded-2xl p-6 shadow-lg  bg-white/10 backdrop-blur-sm border border-white/20">
                <h1 className="w-full text-3xl font-bold text-blue-600">confirmly</h1>
                <ul className="hidden md:flex">
                    <li className="p-4"><a href="#home">Home</a></li>
                    <li className="p-4"><a href="#company">Company</a></li>
                    <li className="p-4"><a href="#services">Services</a></li>
                    <li className="p-4"><a href="#price">Price</a></li>
                    <li className="p-4"><a href="#contact">Contact</a></li>
                </ul>

                <div onClick={() => setNav(!nav)} className="block md:hidden">
                    {nav ? <IoClose size={20}/> : <IoMenu size={20}/>}
                </div>
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] border-r border-r-blue-600 h-full bg-white ease-in-out duration-500" : "fixed left-[-100%]"}>
                <h1 className="w-full text-3xl font-bold text-blue-600 p-4">confirmly</h1>
                <ul className="pt-12 uppercase">
                    <li className="p-4 border-b border-b-blue-600">Home</li>
                    <li className="p-4 border-b border-b-blue-600">Company</li>
                    <li className="p-4 border-b border-b-blue-600">Services</li>
                    <li className="p-4 border-b border-b-blue-600">Price</li>
                    <li className="p-4 border-b border-b-blue-600">Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default HomeNavBar;
        