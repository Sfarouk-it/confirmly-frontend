import { useState } from "react";
import { IoMenu , IoClose } from "react-icons/io5";

const HomeNavBar = () => {
    const [nav, setNav] = useState(false);
    
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-blue-600">
            <h1 className="w-full text-3xl font-bold text-blue-600">confirmly</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Services</li>
                <li className="p-4">Price</li>
                <li className="p-4">Contact</li>
            </ul>

            <div onClick={() => setNav(!nav)} className="block md:hidden">
                {nav ? <IoClose size={20}/> : <IoMenu size={20}/>}
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
        